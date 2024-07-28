import React from "react";

const Students = () => {
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
    <>
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
          Students
        </h2>
        <hr style={{ border: "3px solid black" }} />
        <h3
          className="text-center"
          style={{
            fontFamily: "PT serif",
            textDecoration: "underline 2px Black",
          }}
        >
          Life At SpringDale
        </h3>
        <h3 className="text-decoration-underline">
          Extracurricular Activities
        </h3>
        <div
          id="carouselExampleAutoplaying1"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active p-3" data-bs-interval="5000">
              <img
                src="https://theteenagertoday.com/wp/wp-content/uploads/2019/08/band-it-festival.jpg"
                style={mystyle}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-md-block">
                <h3 style={mstyle}>Music Art Drama </h3>
                <p style={mstyle}>Creative and expressive arts.</p>
              </div>
            </div>
            <div className="carousel-item p-3" data-bs-interval="5000">
              <img
                src="https://internationaljournalofresearch.com/wp-content/uploads/2020/06/img_20200608_004940-2.jpg?w=720"
                style={mystyle}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h3 style={mstyle}>Cultural Fest</h3>
                <p style={mstyle}>Embracing Diversity and Creativity</p>
              </div>
            </div>
            <div className="carousel-item p-3" data-bs-interval="5000">
              <img
                src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-ib7AlIlhOcIQTQypda9EC4XV6Kg8hLUwQ&s"
                style={mystyle}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h3 style={mstyle}>Robotics</h3>
                <p style={mstyle}>Innovative and Technical Creativity</p>
              </div>
            </div>
            <div className="carousel-item p-3" data-bs-interval="500000">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6SUDirUrXppka5klDXNvHodWllMZbPIFkA&s"
                style={mystyle}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h3 className="text-white" style={mstyle}>
                  Debate Club
                </h3>
                <p className="text-white" style={mstyle}>
                  {" "}
                  Public speaking and critical thinking
                </p>
              </div>
            </div>
            <div className="carousel-item p-3" data-bs-interval="5000">
              <img
                src="https://northengland.madscience.org/uploads/images/d71c6c4b-af68-4a7c-8e36-53d42e1300fa.jpg"
                style={mystyle}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h3 style={mstyle}>Science Club</h3>
                <p style={mstyle}>Experimentation and discovery.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying1"
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
            data-bs-target="#carouselExampleAutoplaying1"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <h3 className="fs-2 text-decoration-underline">Clubs and Societies:</h3>
        <div
          id="carouselExampleAutoplaying2"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active p-3" data-bs-interval="5000">
              <img
                src="https://www.joinpaperplanes.com/wp-content/uploads/2023/06/Madras-Literary-Society-%E2%80%94-Header.png"
                style={mystyle}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-md-block">
                <h3 style={mstyle}>Literary Society</h3>
                <p style={mstyle}>Reading and writing enthusiasts</p>
              </div>
            </div>
            <div className="carousel-item p-3" data-bs-interval="5000">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQn7qMUhwlgGudlbuaN5ycyQhC4OlwQZRZA&s"
                style={mystyle}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h3 style={mstyle}>Environmental Club</h3>
                <p style={mstyle}>Eco-friendly initiatives and awareness</p>
              </div>
            </div>
            <div className="carousel-item p-3" data-bs-interval="5000">
              <img
                src="https://lh3.googleusercontent.com/proxy/EjEhe03RTm7MZacNBJjrLnrV7G_m_Er4IXWrIbvCJOlnZrLFtpdpVjodJlXtwCg3dZNS1_9c4-DwoaL-7nP0WWCtPmTZ-ig7cNcmbFc"
                style={mystyle}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h3 style={mstyle}>Astronomy Club</h3>
                <p style={mstyle}>Exploring the universe and stargazing</p>
              </div>
            </div>
            <div className="carousel-item p-3" data-bs-interval="5000">
              <img
                src="https://coachart.org/wp-content/uploads/2019/02/19-02-codingclub-e1550262070987.png"
                style={mystyle}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h3 className="text-white" style={mstyle}>
                  Coding Club
                </h3>
                <p className="text-white" style={mstyle}>
                  Programming and software development
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying2"
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
            data-bs-target="#carouselExampleAutoplaying2"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card mb-4 p-1 mt- bg-secondary">
          <div className="card-body">
            <h4 className="card-title bg-dark text-white text-center fw-bold">Achievements</h4>
            <ul className="list-group mt-4">
              <li className="list-group-item bg-info p-3 m-1">
                John Smith - National Level Math Olympiad Winner
              </li>
              <li className="list-group-item bg-info p-3 m-1">
                Sarah Lee - Gold Medalist in State Swimming Championship
              </li>
              <li className="list-group-item bg-info p-3 m-1">
                Tech Innovators Club - Winners of Inter-School Robotics
                Competition
              </li>
            </ul>
          </div>
        </div>

        <div className="card mb-4 p-1 mt- bg-secondary">
          <div className="card-body">
            <h4 className="card-title bg-dark text-white text-center fw-bold">Student Council</h4>
            <ul className="list-group mt-4">
              <li className="list-group-item bg-info">
                <strong>President:</strong> Amy Parker, Grade 12
              </li>
              <li className="list-group-item bg-info">
                <strong>Vice President:</strong> Rajiv Mehta, Grade 11
              </li>
              <li className="list-group-item bg-info">
                <strong>Secretary:</strong> Lisa Wong, Grade 10
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
