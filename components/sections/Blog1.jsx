
import Link from "next/link"

export default function Blog1() {
	const data = {
		title : "Recent blog",
		subTitle : "Explore the insights and trends shaping our industry",
		blog : [
			{
				id : 1,
				title : "The Future of Design: How AI is reshaping our industry",
				date : "March 28, 2023 • 3 min read",
				description : "Stay ahead of the curve with these emerging trends in UI/UX design.",
				image : "/assets/imgs/blog/blog-1/img-1.png",
				category : "App Design",
				slug : "/blog-details",
			},
			{
				id : 2,
				title : "The Future of Design: How AI is reshaping our industry",
				date : "March 28, 2023 • 3 min read",
				description : "Stay ahead of the curve with these emerging trends in UI/UX design.",
				image : "/assets/imgs/blog/blog-1/img-2.png",
				category : "Branding",
				slug : "/blog-details",
			},
			{
				id : 3,
				title : "The Future of Design: How AI is reshaping our industry",
				date : "March 28, 2023 • 3 min read",
				description : "Stay ahead of the curve with these emerging trends in UI/UX design.",
				image : "/assets/imgs/blog/blog-1/img-3.png",
				category : "Mockup",
				slug : "/blog-details",
			},
		],
	}
	return (
		<>
			<section className="section-blog-1 position-relative pt-120 pb-120">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">{data.title}</h3>
							<span className="fs-5 fw-medium text-200">{data.subTitle}</span>
						</div>
						<div className="col-lg-auto">
							<Link href="/blog-list" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								View more
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>
					<div className="row mt-8">
						{data.blog.map((item, index) => (
						<div className="col-lg-4" key={index}>
							<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
								<div className="blog-card__image position-relative">
									<div className="zoom-img rounded-3 overflow-hidden">
										<img className="w-100" src={item.image} alt="" />
										<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href={item.slug}>{item.category}</Link>
										<Link href={item.slug} className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
											<i className="ri-arrow-right-up-line text-dark" />
										</Link>
									</div>
								</div>
								<div className="blog-card__content position-relative text-center mt-4">
									<span className="blog-card__date fs-7">{item.date}</span>
									<h5 className="blog-card__title">{item.title}</h5>
									<p className="blog-card__description fs-6">{item.description}</p>
									<Link href={item.slug} className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
								</div>
							</div>
						</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
