"use client";
import Link from "next/link";
import CountUp from "react-countup";
export default function Skills1() {
  const data = {
    title: "My Skills",
    subTitle:
      "I thrive on turning complex problems into simple, beautiful solutions that enhance user satisfaction.",
    skills: [
      {
        id: 1,
        name: "Figma",
        icon: "/assets/imgs/skills/skills-1/icon-1.png",
        percentage: 90,
      },
      {
        id: 2,
        name: "Adobe XD",
        icon: "/assets/imgs/skills/skills-1/icon-2.png",
        percentage: 80,
      },
	  {
        id: 3,
        name: "Adobe",
        icon: "/assets/imgs/skills/skills-1/icon-3.png",
        percentage: 80,
      },
	  {
        id: 3,
        name: "Diamond",
        icon: "/assets/imgs/skills/skills-1/icon-4.png",
        percentage: 80,
      },
	  {
        id: 3,
        name: "photoshop",
        icon: "/assets/imgs/skills/skills-1/icon-5.png",
        percentage: 80,
      },
    ],
    additional: [
      {
        id: 1,
        name: "html",
        link: "https://www.example.com",
      },
      {
        id: 1,
        name: "css",
        link: "https://www.example.com",
      },
      {
        id: 1,
        name: "js",
        link: "https://www.example.com",
      },
    ],
  };
  return (
    <>
      <section className="section-skills-1 position-relative section-padding bg-900">
        <div className="container">
          <div className="row">
            <div className="text-center mb-7">
              <h3 className="ds-3 mt-3 mb-3 text-primary-1">{data.title}</h3>
              <span className="fs-5 fw-medium text-200">{data.subTitle}</span>
            </div>
            <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-3 mb-7 px-6">
              {data.skills.map((item, index) => (
                <div className="skills" key={index}>
                  <div className="skills-icon mb-5">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="skills-ratio text-center">
                    <h3 className="count fw-semibold my-0">
                      <CountUp
                        className="odometer fw-semibold"
                        enableScrollSpy={true}
                        end={item.percentage}
                      />
                      %
                    </h3>
                    <p className="text-400 fw-medium text-uppercase">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="fs-5 text-200 mb-0">
                In addition, I have some programming knowledge such as:{" "}
              </p>
              <div className="d-flex justify-content-center gap-1">
				{data.additional.map((item, index) => (
					<Link href={item.link} className="fs-5 fw-bold" key={index}>
						{item.name}
                </Link>
				))}
                
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
