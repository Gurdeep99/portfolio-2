import mongoose from 'mongoose';

// MongoDB Connection
const MONGODB_URI = process.env.MONGO_URI;
const API_KEY = process.env.AUTH;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((mongoose) => mongoose)
      .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        throw new Error('Database connection failed');
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// Mongoose Schema
const ContactSchema = new mongoose.Schema(
  {
    deviceIp: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

// API Route
export async function POST(req) {
  try {
    // Authorization
    const apiKey = req.headers.get('x-api-key');
    if (!apiKey || apiKey !== API_KEY) {
      return new Response(JSON.stringify({ error: 'Unauthorized: Invalid API Key' }), {
        status: 401,
      });
    }

    // Parse request body
    const { name, email, phone, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), {
        status: 400,
      });
    }

    // Extract device IP
    const deviceIp =
      req.headers['x-forwarded-for']?.split(',')[0] || // If behind a proxy (e.g., Vercel)
      req.connection?.remoteAddress || // Fallback to connection remote address
      'Unknown';

    // Connect to MongoDB
    await connectToDatabase();

    // Save the data
    const newContact = await Contact.create({
      deviceIp,
      name,
      email,
      phone,
      subject,
      message,
    });

    return new Response(
      JSON.stringify({
        message: 'Contact form submitted successfully.',
        data: newContact,
      }),
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error('Error saving contact form data:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
