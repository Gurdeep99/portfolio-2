import Link from "next/link";
import SvgIcons from "../SvgIcons";

export default function Home1() {

  const data = {
    name: "Gurdeep Singh",
    heading: "Crafting Intuitive",
    subHeading: "Digital Experiences",
    description:
      "I assist individuals and brands in achieving their objectives by creating and developing user-focused digital products and interactive experiences.",
    button_one: {
      label: "Download CV",
      url: "/assets/resume-14-02-2024.pdf",
      icon: "Download",
    },
    button_two: {
      label: "Hire Me",
      url: "/#contact",
      icon: "RightArrowNoTail",
    },
    subDescription: "+2 years with Full Stack Developer",
    skills: [
      {
        name: "NextJS",
        icon: "NextJS",
      },
      {
        name: "React",
        icon: "React",
      },
      {
        name: "NodeJs",
        icon: "NodeJs",
      },
      {
        name: "MongoDB",
        icon: "MongoDB",
      },
      {
        name: "Laravel",
        icon: "Laravel",
      },
      {
        name: "PHP",
        icon: "PHP",
      },
    ],
    image: "/assets/imgs/hero/hero-1/man.png",
    backgeound: "/assets/imgs/hero/hero-1/decorate.png",
  };
  return (
    <>
      <section className="section-hero-1 position-relative pt-200 pb-120 overflow-hidden">
        <div className="container position-relative z-3">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <span className="text-dark">👋 Hi there, I'm {data.name}</span>
              <h1 className="ds-2 mb-3">
                {data.heading}{" "}
                <span className="text-primary-1">{data.subHeading}</span>
              </h1>
              <p className="text-300 mb-6">{data.description}</p>
              <Link
                href={data.button_one.url}
                className="btn btn-gradient me-2"
                target="_blank"
              >
                {data.button_one.label}
                {/* <i className="ri-download-line ms-2" /> */}
                <SvgIcons
                  icon={data.button_one.icon}
                  size={"25"}
                  stroke={"#fff"}
                  fill={"#fff"}
                />
              </Link>
              <Link
                href={data.button_two.url}
                className="btn btn-outline-secondary d-inline-flex align-items-center"
              >
                <span>{data.button_two.label}</span>
                {/* <i className="ri-arrow-right-line ms-2" /> */}
                <SvgIcons
                  icon={data.button_two.icon}
                  size={"25"}
                  stroke={"#fff"}
                />
              </Link>
              <p className="text-400 mt-6 mb-3">{data.subDescription}</p>
              <div className="d-flex gap-3">
                {data.skills.map((skill, index) => (
                  <div
                    className="brand-logo icon-xl icon-shape rounded-3 bg-900"
                    key={index}
                  >
                    <SvgIcons icon={skill.icon} size={"40"} fill={"#fff"} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="shape-1 position-absolute bottom-0 start-50 z-1 ms-10 d-none d-md-block">
          <img
            className="position-relative z-1 filter-gray"
            src={data.image}
            alt="man"
          />
          <div className="position-absolute top-50 start-0 translate-middle z-0 mt-8 ms-10 ps-8">
            <img className="ribbonRotate" src={data.backgeound} alt="" />
          </div>
        </div>
        <div
          className="position-absolute top-0 start-0 w-100 h-100 filter-invert"
          data-background="assets/imgs/hero/hero-1/background.png"
        />
      </section>
    </>
  );
}
