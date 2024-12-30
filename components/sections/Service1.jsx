import Link from "next/link";

export default function Service1() {
  const data = {
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
  };
  return (
    <>
      <section className="section-service-1 pt-120 pb-120">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7 me-auto">
              <h3 className="ds-3 mt-3 mb-3 text-primary-1">{data.title}</h3>
              <span className="fs-5 fw-medium text-200">{data.subtitle}</span>
            </div>
            <div className="col-lg-auto">
              <Link
                href={data.link}
                className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto"
              >
                {data.button}
                <i className="ri-arrow-right-up-line" />
              </Link>
            </div>
          </div>
          <div className="row mt-6 justify-content-between">
            {data.list.map((item, index) => (
              <div className="col-12" key={index}>
                <div
                  className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3"
                //   data-fx={1}
                //   data-img={item.hover}
                >
                  <div className="service-card-details d-lg-flex align-items-center">
                    <h3 className="service-card-title w-lg-50 w-100 mb-0">
                      <Link href={item.link}>
                        <span className="service-number">{item.id}</span>
                        {item.title}
                      </Link>
                    </h3>
                    <Link
                      href={item.link}
                      className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100"
                    >
                      <p className="service-card-text my-3">
						{item.description}
                      </p>
                      <div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
                        <i className="ri-arrow-right-up-line" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
