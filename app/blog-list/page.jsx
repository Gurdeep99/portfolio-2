
import Layout from "@/components/layout/Layout"
import Contact1 from "@/components/sections/Contact1"
import Link from "next/link"
export default function BlogList() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-blog-list pt-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto mb-lg-0">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase">
											Recent blog
										</Link>
										<h3 className="ds-3 mt-3 mb-4 text-300">
											Explore the <span className="text-dark">insights and trends shaping</span> our industry
										</h3>
										<p className="text-300 fs-5 mb-0">
											Discover key insights and emerging trends shaping the future of design: a detailed <br />
											examination of how these innovations are reshaping our industry
										</p>
									</div>
								</div>
							</div>
							<div className="row mt-8">
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-1.png" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">App Design</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">March 28, 2023 • 3 min read</span>
											<h5 className="blog-card__title">5 UI/UX Trends to Watch in 2024</h5>
											<p className="blog-card__description fs-6">Stay ahead of the curve with these emerging trends in UI/UX design.</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-2.png" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Branding</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">March 28, 2023 • 3 min read</span>
											<h5 className="blog-card__title">The Importance of User Research</h5>
											<p className="blog-card__description fs-6">Stay ahead of the curve with these emerging trends in UI/UX design.</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-3.png" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Mockup</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">March 28, 2023 • 3 min read</span>
											<h5 className="blog-card__title">The Role of Color Psychology</h5>
											<p className="blog-card__description fs-6">Stay ahead of the curve with these emerging trends in UI/UX design.</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-4.png" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Branding</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">March 28, 2023 • 3 min read</span>
											<h5 className="blog-card__title">5 UI/UX Trends to Watch in 2024</h5>
											<p className="blog-card__description fs-6">Stay ahead of the curve with these emerging trends in UI/UX design.</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-5.png" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Mockup</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">March 28, 2023 • 3 min read</span>
											<h5 className="blog-card__title">The Importance of User Research</h5>
											<p className="blog-card__description fs-6">Stay ahead of the curve with these emerging trends in UI/UX design.</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-6.png" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">App Design</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">March 28, 2023 • 3 min read</span>
											<h5 className="blog-card__title">The Role of Color Psychology</h5>
											<p className="blog-card__description fs-6">Stay ahead of the curve with these emerging trends in UI/UX design.</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-7.png" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">App Design</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">March 28, 2023 • 3 min read</span>
											<h5 className="blog-card__title">5 UI/UX Trends to Watch in 2024</h5>
											<p className="blog-card__description fs-6">Stay ahead of the curve with these emerging trends in UI/UX design.</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-8.png" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Mockup</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">March 28, 2023 • 3 min read</span>
											<h5 className="blog-card__title">The Importance of User Research</h5>
											<p className="blog-card__description fs-6">Stay ahead of the curve with these emerging trends in UI/UX design.</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-3">
										<div className="blog-card__image position-relative">
											<div className="zoom-img rounded-3 overflow-hidden">
												<img className="w-100" src="/assets/imgs/blog/blog-1/img-9.png" alt="" />
												<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" href="/blog-details">Branding</Link>
												<Link href="/blog-details" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle">
													<i className="ri-arrow-right-up-line text-dark" />
												</Link>
											</div>
										</div>
										<div className="blog-card__content position-relative text-center mt-4">
											<span className="blog-card__date fs-7">March 28, 2023 • 3 min read</span>
											<h5 className="blog-card__title">The Role of Color Psychology</h5>
											<p className="blog-card__description fs-6">Stay ahead of the curve with these emerging trends in UI/UX design.</p>
											<Link href="/blog-details" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<div className="container">
						<div className="row py-120">
							<div className="d-flex justify-content-center align-items-center">
								<nav aria-label="Page navigation example">
									<ul className="pagination gap-2">
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#" aria-label="Previous">
												<i className="ri-arrow-left-line" />
											</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#">1</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#">2</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#">3</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-600" href="/#" aria-label="Next">
												<i className="ri-arrow-right-line" />
											</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					{/*Static 1*/}
					<div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-6">
						<div className="container">
							<div className="inner">
								<div className="row align-items-center justify-content-between">
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">12</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Year of</p>
													<p className="fs-5 mb-0 fw-bold">Experience</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">250</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Projects</p>
													<p className="fs-5 mb-0 fw-bold">Completed</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">680</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Satisfied</p>
													<p className="fs-5 mb-0 fw-bold">Happy Clients</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">18</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Awards</p>
													<p className="fs-5 mb-0 fw-bold">Won Received</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Contact 1*/}
					<Contact1 />
				</div>

			</Layout>
		</>
	)
}