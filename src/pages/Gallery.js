import React from "react";

const Gallery = () => {
  let mystyle = {
    height: "500px",
    width: "100px",
    // display: "flex",
    // flexWrap: "wrap",
    // alignItem: "fit-Content",
    padding: "0px",
    border: "5px solid purple",
    borderRadius: "45px",
    opacity: 1,
  };
  let mstyle = {
    color: "black",
    fontWeight: "600",
    fontSize: "xx-large",
    fontFamily: "Edu Australia VIC WA NT Hand",
    marginTop: "-10px",
    marginBottom: "-10px",
    padding: "0px",
    opacity: 2,
    backdropFilter: "blur(2px)",
  };
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "linear-gradient(to right bottom ,crimson, skyblue)",
        border: "4px solid blue",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          textDecoration: "underline 3px dotted violet",
          color: "black",
          marginBottom: "2%",
          fontWeight: "bold",
          fontSize: "700",
          fontFamily: "Teko",
        }}
        className="text-center"
      >
        Gallery
      </h2>
      <hr style={{ border: "3px solid black" }} />
      <h3
        className="text-center"
        style={{
          fontFamily: "PT serif",
          textDecoration: "underline 2px Black",
        }}
      >
        Photos
      </h3>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img
              src="https://2.bp.blogspot.com/_oQyz1sQbo-o/TO5FMvcd2ZI/AAAAAAAAHEo/JB2L9S2gyl8/s1600/Children_participating_in_Sack_race_on_the_Annual_Sports_Day_of_APS.JPG"
              style={mystyle}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3 style={mstyle}>Sports Day</h3>
              <p style={mstyle}>
                Students participating in various sports events.
              </p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="5000">
            <img
              src="https://assets.telegraphindia.com/telegraph/9jamscience36c.jpg"
              style={mystyle}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3 style={mstyle}>Science Exhibition</h3>
              <p style={mstyle}>Students presenting their science projects</p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="5000">
            <img
              src="https://dikshant.org/school/wp-content/uploads/61007173_2430368367198624_6936276383794462720_n-3-960x409.jpg"
              style={mystyle}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3 style={mstyle}>Cultural Fest</h3>
              <p style={mstyle}>Students performing in the cultural fest</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="500000">
            <img
              src="https://img.freepik.com/premium-photo/technology-classroom-teacher-is-using-tablet-interactive-whiteboard-teaching-geography-students_1029476-88922.jpg"
              style={mystyle}
              className="d-block w-100"
              alt="..."
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ backdropFilter: "blur(5px)" }}
            >
              <h3 style={mstyle}>Interactive Classromm</h3>
              <p style={mstyle}>A glimpse of our interactive classrooms</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img
              src="https://dikshant.org/school/wp-content/uploads/61007173_2430368367198624_6936276383794462720_n-3-960x409.jpg"
              style={mystyle}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3 style={mstyle}>Cultural Fest</h3>
              <p style={mstyle}>A glimpse of our interactive classrooms</p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <hr className="text-decoration-underline" />
      <h3
        className="text-center mt-5"
        style={{
          fontFamily: "PT serif",
          textDecoration: "underline 2px Black",
        }}
      >
        Videos
      </h3>
      <div className="row mt-5">
        <div className="col-sm-6 mb-3 mb-sm-0 p-1">
          <div className="card text-center">
            <div className="card-body p-1">
              <iframe
                width="100%"
                height="400px"
                src="https://www.youtube.com/embed/hTjB5tl63MY"
                title="Springlife at Springdales school Jaipur"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-sm-0 p-1">
          <div className="card text-center">
            <div className="card-body p-1">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/hTjB5tl63MY"
                title="Springlife at Springdales school Jaipur"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
