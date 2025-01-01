import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// MongoDB connection URI (with database name included)
const MONGO_URI = process.env.MONGO_URI;
const AUTH_TOKEN = process.env.AUTH;

export async function GET(request) {
  const client = new MongoClient(MONGO_URI);

  try {
    // Check Authorization Header
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || authHeader !== `Bearer ${AUTH_TOKEN}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Connect to MongoDB
    await client.connect();
    const db = client.db(); // Automatically uses the database name from the URI

    // Fetch data from 'navbar' collection
    const navbarCollection = db.collection("navbar");
    const navbarData = await navbarCollection.find().toArray();

    // Fetch data from 'education' collection
    const educationCollection = db.collection("education");
    const educationData = await educationCollection.find().toArray();

    // Fetch data from 'experience' collection
    const experienceCollection = db.collection("experience");
    const experienceData = await experienceCollection.find().toArray();

    // Fetch data from 'navbar' collection
    const socialLinksCollection = db.collection("socialLinks");
    const socialLinksData = await socialLinksCollection
      .find()
      .limit(4)
      .toArray();

    // Fetch data from 'personal' collection
    const personalCollection = db.collection("personal");
    const personalData = await personalCollection.findOne();

    // Format data
    const responseData = {
      sideBar: {
        title: "Get in Touch",
        description:
          "I'm always excited to take on new projects and collaborate with innovative minds.",
        personalInfo: [
          {
            icon: "ri-phone-fill",
            iconText: "Phone Number",
            link: personalData?.phone || null,
            slug: personalData?.phone ? `tel:+91 ${personalData?.phone}` : null,
          },
          {
            icon: "ri-mail-fill",
            iconText: "Email",
            link: personalData?.email || null,
            slug: personalData?.email ? `mailto:${personalData?.email}` : null,
          },
          {
            icon: "ri-github-fill",
            iconText: "Github",
            link: personalData?.github?.split("/")?.at(-1) || null,
            slug: personalData?.github || null,
          },
          {
            icon: "ri-map-2-fill",
            iconText: "Address",
            link: personalData?.location || null,
            slug: "#",
          },
        ],
        socialLinks: socialLinksData,
      },
      navbar: {
        title: "PORTFOLIO",
        navLinks: navbarData,
        slug: "/",
        socialLinks: socialLinksData,
      },
      sectionOne: {
        name: personalData?.firstname + " " + personalData?.lastname || null, // Use "personal.firstname" if exists, otherwise null
        titleOne: "Crafting Intuitive",
        titleTwo: "Digital Experiences",
        subTitle:
          "I assist individuals and brands in achieving their objectives by creating and developing user-focused digital products and interactive experiences.",
        link: personalData?.resume || null,
        subText:
          `+${personalData?.experience} years with ${personalData?.occupation}` ||
          null,
        image: personalData?.image || null,
      },
      sectionTwo: [
        {
          id: 1,
          count: personalData?.experience || 0,
          text: "Year of",
          subText: "Experience",
        },
        {
          id: 2,
          count: personalData?.projects || 0,
          text: "Total",
          subText: "Projects",
        },
      ],
      sectionThree: {
        title: "What do I offer?",
        subtitle:
          "My journey started with a fascination for design and technology, leading me to specialize in UI/UX design",
        button: "Get a Quote",
        link: "/#contact",
        list: [
          {
            id: "01.",
            title: "UI/UX Design",
            description:
              "Designing visually stunning and user-friendly interfaces for web and mobile applications.",
            link: "/#contact",
            hover: "assets/imgs/services/services-1/img-1.png",
          },
          {
            id: "02.",
            title: "Mobile App Design",
            description:
              "Designing visually stunning and user-friendly interfaces for web and mobile applications.",
            link: "/#contact",
            hover: "assets/imgs/services/services-1/img-2.png",
          },
          {
            id: "03.",
            title: "Brand Identity Design",
            description:
              "Designing visually stunning and user-friendly interfaces for web and mobile applications.",
            link: "/#contact",
            hover: "assets/imgs/services/services-1/img-3.png",
          },
          {
            id: "04.",
            title: "Web Development",
            description:
              "Designing visually stunning and user-friendly interfaces for web and mobile applications.",
            link: "/#contact",
            hover: "assets/imgs/services/services-1/img-4.png",
          },
        ],
      },
      sectionFour: {},
      sectionFive: {
        title: "My Resume",
        subTitle:
          "I believe that working hard and trying to learn every day will make me improve in satisfying my customers.",
        education: educationData,
        experience: experienceData,
      },
      sectionSix: {},
      sectionSeven: {},
      sectionEight: {},
      sectionNine: {},
      sectionTen: {},
      footer: {
        title: "PORTFOLIO",
        navLinks: navbarData,
        slug: "/",
      },
    };

    // Return formatted data as JSON
    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  } finally {
    // Ensure MongoDB connection is closed
    await client.close();
  }
}
