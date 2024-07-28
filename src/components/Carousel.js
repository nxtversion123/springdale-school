import React from 'react'

const Carousel = () => {
let mystyle = {
  height: "500px",
  width: "100px",
  display: "flex",
  flexWrap: "wrap",
  alignItem: "fit-Content",
  padding: "0px",
  border:"5px solid purple",
  borderRadius:"45px",
  opacity:1,
  
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
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img
            src="https://images.unsplash.com/photo-1617170816391-ebe31dd5bdc0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={mystyle}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3 style={mstyle}>Annual Sports Day</h3>
            <p style={mstyle}>Celebrating Excellence in Sports</p>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="5000">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/1726134715/display_1500/stock-photo-biochemical-research-scientist-team-working-with-microscope-for-coronavirus-vaccine-development-in-1726134715.jpg"
            style={mystyle}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3 style={mstyle}>Science Exhibition</h3>
            <p style={mstyle}>Showcasing Students Innovations</p>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="5000">
          <img
            src="https://www.thestatesman.com/wp-content/uploads/2023/02/Untitled-design-54.jpg"
            style={mystyle}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3 style={mstyle}>Cultural Fest</h3>
            <p style={mstyle}>Embracing Diversity and Creativity</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
