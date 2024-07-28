import React from "react";

const About = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(to right bottom ,aqua,lightYellow)",
          border: "4px solid blue",
        }}
      >
        <h2
          style={{
            textDecoration: "underline 5px dotted violet",
            color: "purple",
            marginBottom: "35px",
            marginTop: "25px",
          }}
          className="text-center fw-bold"
        >
          About Us
        </h2>
        <hr style={{ border: "3px solid black" }} />
        <div
          className="text-center card text-white bg-dark mb-3"
          style={{ maxWidth: "98rem" }}
        >
          <div
            style={{ textDecoration: "underline solid red 2px" }}
            className="fw-bold fs-2 card-header"
          >
            History
          </div>
          <div className="card-body">
            <h5 className="card-title fs-3">Legendry History of Springdale</h5>
            <p className="card-text fs-5 ">
              "Founded in 1985, Springdale Public School has been dedicated to
              providing quality education and holistic development to students."
            </p>
          </div>
        </div>
        <div
          className="text-center card text-white bg-dark mb-3"
          style={{ maxWidth: "98rem" }}
        >
          <div
            style={{ textDecoration: "underline solid red 2px" }}
            className="fw-bold fs-2 card-header"
          >
            Vision
          </div>
          <div className="card-body">
            <h5 className="card-title fs-3">
              Historical and Clear Vision of Springdale Towards Future
            </h5>
            <p className="card-text fs-5 ">
              To create a learning environment that fosters academic excellence,
              critical thinking, and ethical values.
            </p>
          </div>
        </div>
        <div
          className="text-center card text-white bg-dark mb-3"
          style={{ maxWidth: "98rem" }}
        >
          <div
            style={{ textDecoration: "underline solid red 2px" }}
            className="fw-bold fs-2 card-header"
          >
            Mission
          </div>
          <div className="card-body">
            <h5 className="card-title fs-3">
              Appropriate Mission of Springdale Towards Future
            </h5>
            <p className="card-text fs-5 ">
              To empower students with the knowledge, skills, and values needed
              to thrive in a dynamic world.
            </p>
          </div>
        </div>
        <div
          className="text-center card text-white bg-dark mb-3"
          style={{ maxWidth: "98rem" }}
        >
          <div
            style={{ textDecoration: "underline solid red 2px" }}
            className="fw-bold fs-2 card-header"
          >
            Principal's Message
          </div>
          <div className="card-body">
            <h5 className="card-title fs-3">
              Our Leaders Call On the School Environment and students future
            </h5>
            <p className="card-text fs-5 ">
              At Springdale, we believe in nurturing the potential of every
              student and guiding them towards a successful future.
            </p>
          </div>
        </div>
        <div
          className="text-center card text-white bg-dark mb-3"
          style={{ maxWidth: "98rem" }}
        >
          <div
            style={{ textDecoration: "underline solid red 2px" }}
            className="fw-bold fs-2 card-header"
          >
            Infrastructure and Facilities:
          </div>
          <div className="card-body">
            <h5 className="card-title fs-3">
              Visit our Campus to see World Class Facilities and Infra.
            </h5>
            <p className="card-text fs-5 ">
              <li>"State-of-the-art science and computer labs"</li>
              <li>"Spacious and well-equipped classrooms"</li>
              <li>
                "Library with a vast collection of books and digital resources"
              </li>
              <li>
                "Sports facilities including a playground, gymnasium, and
                swimming pool"
              </li>
            </p>
          </div>
        </div>

        <h3 className="mx-5 my-3 fw-bold text-center"> </h3>
        <ul
          className="my-3 fw-bold text-center"
          style={{ fontWeight: 600, listStyle: "in inside", padding: "5px" }}
        ></ul>
      </div>
    </>
  );
};

export default About;
