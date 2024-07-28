import React from "react";

const Faculty = () => {
  let mystyle = {
    fontFamily: "Roboto"
    };
  return (
    <div
      className="container-fluid"
      style={{ background: "linear-gradient(to right bottom, skyblue,black)" }}
    >
      <h2
        style={{
          textDecoration: "underline 2px ",
          color: "pink",
          marginBottom: "35px",
          paddingTop: "25px",
          fontFamily: "Roboto",
        }}
        className="text-center fw-bold"
      >
        Faculties
      </h2>
      <hr style={{ border: "3px solid black" }} />

      <div className="row">
        <h3
          className="text-center"
          style={{ fontSize: "50px", fontFamily: "Roboto" }}
        >
          Profiles of Management
        </h3>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <h4 className="text-center fs-2 fw-bold" style={mystyle}>
              John Doe
            </h4>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrggIP1tphFNHqBURDu-6QY1TiSJVXQy0Uuw&s"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p
                className="card-text fs-3 text-center"
                style={{ fontWeight: "501" }}
              >
                <span
                  style={{
                    textDecoration: "underline solid 4px",
                    color: "blue",
                    fontFamily: "Roboto",
                  }}
                >
                  Principal
                </span>
                , M.Ed, 20 years of experience in educational administration.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <h4 className="text-center fs-3 fw-bold" style={mystyle}>
              Jane Smith
            </h4>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKrBY_uO59pV25BhuYRG_uTwzb5XtSJlXXqSwL1y8TFCBavl8C_QjmuMpsfd3xZSXiFGM&usqp=CAU"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text fs-4">
                <span
                  style={{
                    textDecoration: "underline solid 4px",
                    color: "violet",
                    fontFamily: "Roboto",
                  }}
                >
                  Vice Principal
                </span>
                , M.Sc. in Physics, 15 years of teaching experience.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <h4 className="text-center fs-4 fw-bold" style={mystyle}>
              Emily Johnson
            </h4>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDquyhSKJEztzBOIcGaeCndF5dKKmLDCyePoVA7gK4eDKKXYW7sPYF7M0va5eGkfNr24&usqp=CAU"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text fs-5" style={mystyle}>
                English Teacher, M.A. in English, 10 years of teaching
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <h4 className="text-center fs-4 fw-bold" style={mystyle}>
              Michael Brown
            </h4>
            <img
              src="https://img.freepik.com/free-photo/young-male-teacher-wearing-glasses-holding-sponge-smiling-confident-standing-near-blackboard-with-mathematical-formulas-classroom_141793-102144.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text fs-5" style={mystyle}>
                Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <h4 className="text-center fs-4 fw-bold" style={mystyle}>
              Sophia Davis
            </h4>
            <img
              src="https://watermark.lovepik.com/photo/20211202/large/lovepik-foreign-teacher-board-teaching-picture_501383551.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text fs-5" style={mystyle}>
                Science Teacher, M.Sc. in Chemistry, 12 years of teaching
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <h4 className="text-center fs-4 fw-bold" style={mystyle}>
              David Wilson
            </h4>
            <img
              src="https://www.shutterstock.com/image-photo/male-english-teacher-pointing-whiteboard-260nw-2195080539.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text fs-5" style={mystyle}>
                Computer Science Teacher, B.Tech in Computer Science, 5 years of
                teaching experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
