
import Layout from "@/components/layout/Layout"
import Contact1 from "@/components/sections/Contact1"
import Link from "next/link"
export default function Pricing() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-pricing-1 pt-130 pb-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto mb-8">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase">
											My Pricing
										</Link>
										<h3 className="ds-3 mt-3 mb-4 text-dark">
											Affordable <span className="text-300">Solutions for Every</span> Budget
										</h3>
										<p className="text-300 fs-5 mb-0">
											Flexible Plans Tailored to Meet Your Unique Needs, Ensuring High-Quality Services <br />
											Without Breaking the Bank
										</p>
									</div>
									<div className="row mt-8 d-flex">
										<div className="col-md-6">
											<div className="card-pricing-1 p-6 rounded-4 h-100 d-flex flex-column">
												<span className="text-uppercase fs-7">basic</span> <br />
												<h3 className="ds-3 fw-medium text-primary-1 mb-5">$49<span className="text-300 fs-4">/Hour</span></h3>
												<ul className="ps-3 border-top border-600 pt-5 mb-auto">
													<li>
														<p className="text-300">Require your wireframe</p>
													</li>
													<li>
														<p className="text-300">Design using Figma, Framer</p>
													</li>
													<li>
														<p className="text-300">Develop with Webflow, React, WordPress, Laravel/PHP</p>
													</li>
													<li>
														<p className="text-300">Remote/Online collaboration</p>
													</li>
													<li>
														<p className="text-300">Available on business days, no weekends</p>
													</li>
													<li>
														<p className="text-300">6 months of support</p>
													</li>
												</ul>
												<Link href="/#" className="btn btn-primary mt-5 w-100 justify-content-center">
													Order Now
													<i className="ri-arrow-right-up-line" />
												</Link>
											</div>
										</div>
										<div className="col-md-6">
											<div className="card-pricing-1 p-6 rounded-4 align-self-stretch mt-md-0 mt-6">
												<span className="text-uppercase fs-7">Business</span> <br />
												<h3 className="ds-3 fw-medium text-primary-1 mb-5">$99<span className="text-300 fs-4">/Hour</span></h3>
												<ul className="ps-3 border-top border-600 pt-5">
													<li>
														<p className="text-300">No wireframe needed</p>
													</li>
													<li>
														<p className="text-300">Design using Figma, Framer</p>
													</li>
													<li>
														<p className="text-300">Develop with Webflow, React, WordPress, Laravel/PHP</p>
													</li>
													<li>
														<p className="text-300">Remote/Online collaboration</p>
													</li>
													<li>
														<p className="text-300">Available on business days, no weekends</p>
													</li>
													<li>
														<p className="text-300">12 months of support</p>
													</li>
													<li>
														<p className="text-300">Your project is always a priority</p>
													</li>
													<li>
														<p className="text-300">Customer care gifts included</p>
													</li>
												</ul>
												<Link href="/#" className="btn btn-primary mt-5 w-100 justify-content-center">
													Order Now
													<i className="ri-arrow-right-up-line" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row mt-8">
								<div className="col-lg-6  mx-md-auto text-center">
									<h2 className="text-300 mb-8">
										Common Questions
									</h2>
									<div className="accordion">
										<div className="mb-3 card border-2 rounded-4">
											<div className="card-header p-0 border-0">
												<Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseSevent">
													<p className="fs-5 mb-0 text-dark">What is the main focus of your portfolio?</p>
													<span className="ms-auto arrow me-2 icon-shape">
														<i className="ri-add-line" />
													</span>
												</Link>
											</div>
											<div id="collapseSevent" className="collapse" data-bs-parent=".accordion">
												<p className="px-4 pt-0 text-start card-body">
													You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.
												</p>
											</div>
										</div>
										<div className="mb-3 card border-2 rounded-4">
											<div className="card-header p-0 border-0">
												<Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseEight">
													<p className="fs-5 mb-0 text-dark">Will you include a blog or other written content?</p>
													<span className="ms-auto arrow me-2 icon-shape">
														<i className="ri-add-line" />
													</span>
												</Link>
											</div>
											<div id="collapseEight" className="collapse" data-bs-parent=".accordion">
												<p className="px-4 pt-0 text-start card-body">
													You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.
												</p>
											</div>
										</div>
										<div className="mb-3 card border-2 rounded-4">
											<div className="card-header p-0 border-0">
												<Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseNine">
													<p className="fs-5 mb-0 text-dark">How much do your services cost?</p>
													<span className="ms-auto arrow me-2 icon-shape">
														<i className="ri-add-line" />
													</span>
												</Link>
											</div>
											<div id="collapseNine" className="collapse" data-bs-parent=".accordion">
												<p className="px-4 pt-0 text-start card-body">
													You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.
												</p>
											</div>
										</div>
										<div className="mb-3 card border-2 rounded-4">
											<div className="card-header p-0 border-0">
												<Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseTen">
													<p className="fs-5 mb-0 text-dark">How long does it take to see results?</p>
													<span className="ms-auto arrow me-2 icon-shape">
														<i className="ri-add-line" />
													</span>
												</Link>
											</div>
											<div id="collapseTen" className="collapse" data-bs-parent=".accordion">
												<p className="px-4 pt-0 text-start card-body">
													You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.
												</p>
											</div>
										</div>
										<div className="mb-3 card border-2 rounded-4">
											<div className="card-header p-0 border-0">
												<Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseEleven">
													<p className="fs-5 mb-0 text-dark">Do you offer ongoing support?</p>
													<span className="ms-auto arrow me-2 icon-shape">
														<i className="ri-add-line" />
													</span>
												</Link>
											</div>
											<div id="collapseEleven" className="collapse" data-bs-parent=".accordion">
												<p className="px-4 pt-0 text-start card-body">
													You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.
												</p>
											</div>
										</div>
										<div className="mb-3 card border-2 rounded-4">
											<div className="card-header p-0 border-0">
												<Link className="p-3 collapsed text-900 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="/#collapseTwelve">
													<p className="fs-5 mb-0 text-dark">Do you work with businesses in my industry?</p>
													<span className="ms-auto arrow me-2 icon-shape">
														<i className="ri-add-line" />
													</span>
												</Link>
											</div>
											<div id="collapseTwelve" className="collapse" data-bs-parent=".accordion">
												<p className="px-4 pt-0 text-start card-body">
													You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
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