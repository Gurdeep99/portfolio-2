import Marquee from 'react-fast-marquee'


export default function Brands1() {

	const data = {
		title : "Trusted by industry leaders",
		subTitle : "I have collaborated with many large corporations, companies, and agencies around the world in many fields of design and consulting",
		brands : [
			{
				name : "infinia",
				image : "/assets/imgs/brands/brands-1/logo-1.png"
			},
			{
				name : "infinia",
				image : "/assets/imgs/brands/brands-1/logo-2.png"
			},
			{
				name : "infinia",
				image : "/assets/imgs/brands/brands-1/logo-3.png"	
			},
			{
				name : "infinia",
				image : "/assets/imgs/brands/brands-1/logo-4.png"	
			},
			{
				name : "infinia",
				image : "/assets/imgs/brands/brands-1/logo-5.png"	
			},
			{
				name : "infinia",
				image : "/assets/imgs/brands/brands-1/logo-6.png"	
			},
			{
				name : "infinia",
				image : "/assets/imgs/brands/brands-1/logo-7.png"	
			},
			{
				name : "infinia",
				image : "/assets/imgs/brands/brands-1/logo-8.png"	
			},
			{
				name : "infinia",
				image : "/assets/imgs/brands/brands-1/logo-9.png"	
			},
			{
				name : "infinia",
				image : "/assets/imgs/brands/brands-1/logo-10.png"	
			},
		]
	}
	return (
		<>

			<section className="section-brands-1 section-padding">
				<div className="container">
					<div className="text-center">
						<h2>{data.title}</h2>
						<p className="text-300">
							{data.subTitle}
						</p>
					</div>
				</div>
				<div className="container-fluid">
					{/* Carausel Scroll */}
					<Marquee className="carouselTicker carouselTicker-right mt-5 position-relative z-1" direction="right">
						<ul className="carouselTicker__list">
							{data.brands.map((item, index) => (
							<li className="carouselTicker__item" key={index}>
								<img src={item.image} alt={item.name} />
							</li>
							))}
						</ul>
					</Marquee>
				</div>
			</section>

		</>
	)
}
