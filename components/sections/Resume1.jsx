import Link from "next/link";

export default function Resume1() {
  const data = {
    title: "My Resume",
    subTitle:
      "I believe that working hard and trying to learn every day will make me improve in satisfying my customers.",
    button: "Get in Touch",
    link: "/#contact",
    items: {
      education: [
        {
          id: 1,
          year: "2024 - Present",
          title: "Masters of Science in Computer Science",
          university: "Dr. A.P.J. Abdul Kalam Technical University",
          percent: "70%",
        },
        {
          id: 2,
          year: "2019 - 2023",
          title: "Bachelor of Science in Computer Science",
          university: "Galgotias University",
          percent: "77%",
        },
        {
          id: 3,
          year: "2018 - 2019",
          title: "Higher Secondary",
          university: "GOVT INT College",
          percent: "78%",
        },
      ],
      experience: [
        {
          id: 1,
          year: "2024 - Present",
          title: "Full Stack Developer",
          employer: "Amarujala Web Services Pvt Ltd",
        },
        {
          id: 1,
          year: "2023 - 2024",
          title: "Full Stack Developer",
          employer: "Edyyo Digital Solutions Pvt Ltd",
        },
        {
          id: 1,
          year: "2022 - 2023",
          title: "Graphics Designer",
          employer: "Digital Janwar",
        },
      ],
    },
  };
  return (
    <>
      <section
        id="resume"
        className="section-resume-1 position-relative pt-150 overflow-hidden"
        data-background="assets/imgs/projects/projects-1/background.png"
      >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7 me-auto">
              <h3 className="ds-3 mt-3 mb-3 text-primary-1">{data.title}</h3>
              <span className="fs-5 fw-medium text-200">{data.subTitle}</span>
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
          <div className="row mt-6">
            <div className="col-lg-6 col-12">
              <div className="resume-card p-lg-6 p-4 mb-lg-0 mb-6">
                <div className="resume-card-header d-flex align-items-end">
                  <img
                    className="border-linear-1 border-3 pb-2 pe-2"
                    src="/assets/imgs/resume/resume-1/icon-1.svg"
                    alt=""
                  />
                  <h3 className="fw-semibold mb-0 border-bottom border-600 border-3 pb-2 w-100">
                    Education
                  </h3>
                </div>
                <div className="resume-card-body">
                  {data.items.education.map((item, index) => (
                    <div className="resume-card-item px-4 py-3 mt-5" key={index}>
                      <div className="d-flex align-items-end">
                        <div>
                          <p className="fw-extra-bold text-linear-1 mb-2">
							{item.year}
                          </p>
                          <h5>{item.title}</h5>
                          <p className="text-300 mb-0">
							{item.university}
                          </p>
                        </div>
                        {/* <h3 className="text-linear-1 ms-auto fw-semibold">
                          <span className="fs-4 fw-bold">{item.percent}</span>
                        </h3> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="resume-card p-lg-6 p-4 h-100">
                <div className="resume-card-header d-flex align-items-end">
                  <img
                    className="border-linear-1 border-3 pb-2 pe-2"
                    src="/assets/imgs/resume/resume-1/icon-2.svg"
                    alt=""
                  />
                  <h3 className="fw-semibold mb-0 border-bottom border-600 border-3 pb-2 w-100">
                    Experience
                  </h3>
                </div>
                <div className="resume-card-body">
                 {data.items.experience.map((item, index) => (
					 <div className="resume-card-item px-4 py-3 mt-5" key={index}>
                    <p className="fw-extra-bold text-linear-1 mb-2">
					  {item.year}
                    </p>
                    <h5>{item.title}</h5>
                    <p className="text-300 mb-0">{item.employer}</p>
                  </div>
					))}
                 
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-move-right position-relative pb-160 pt-lg-150">
          <div className="d-flex align-items-center gap-5 wow img-custom-anim-top position-absolute top-50 start-50 translate-middle">
            <h3 className="stroke fs-150 text-uppercase text-white">
			Education • Experience
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
