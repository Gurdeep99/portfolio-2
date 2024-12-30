"use client";
import CountUp from "react-countup";

export default function Static1() {
  const data = [
    {
      id: 1,
      count: 2,
      text: "Year of",
      subText: "Experience",
    },
    {
      id: 2,
      count: 100,
      text: "Total",
      subText: "Projects",
    },
    {
      id: 3,
      count: 12,
      text: "Year of",
      subText: "Experience",
    },
    {
      id: 4,
      count: 62,
      text: "Year of",
      subText: "Experience",
    },
  ];

  return (
    <>
      <div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-900">
        <div className="container">
          <div className="inner">
            <div className="row align-items-center justify-content-between">
              {data?.map((item, index) => (
                <div className="col-lg-auto col-md-6" key={index}>
                  <div className="counter-item-cover counter-item">
                    <div className="content text-center mx-auto d-flex align-items-center">
                      <span className="ds-3 count text-primary-1 fw-medium my-0">
                        +
                        <CountUp
                          enableScrollSpy={true}
                          end={item.count}
                          className="odometer ds-1 text-dark fw-semibold"
                        />
                      </span>
                      <div className="text-start ms-2">
                        <p className="fs-5 mb-0 text-300">{item.text}</p>
                        <p className="fs-5 mb-0 fw-bold">{item.subText}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
