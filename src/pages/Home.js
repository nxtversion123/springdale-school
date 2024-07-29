import React from 'react'
import Carousel from '../components/Carousel';
import {Link} from "react-router-dom";

const Home = () => {

  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(to right , skyblue, pink)",
        }}
      >
        <h1
          className="text-center my-1"
          style={{
            color: "red",
          }}
        >
          Springdales Public School
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "300px",
          }}
        >
          <img
            src="https://www.springdalesdubai.com/wp-content/uploads/2020/04/logo_sticky.png"
            alt=""
          />
        </div>
        <h2 className="text-center fw-bold fs-xl">
          Where we nurture young minds for a brighter future.
        </h2>
        <Carousel />
      </div>
      <div
        className="quick-links"
        style={{
          backgroundImage: "linear-gradient(to right , aqua, pink)",
        }}
      >
        <h3
          className="text-center my-2"
          style={{
            textDecoration: "underline 2px",
            color: "black",
            fontWeight: "600",
          }}
        >
          Quick Links
        </h3>
        <ul className="button-group">
          <div style={{ marginRight: "20px" }} className="text-center">
            <button
              type="button"
              className="btn btn-danger d-inline-block mx-2 my-4"
            >
              <Link to="/about">About Us</Link>
            </button>
            <button
              type="button"
              className="btn btn-danger d-inline-block mx-2 my-4"
            >
              <Link to="/addmissions">Addmissions</Link>
            </button>
            <button
              type="button"
              className="btn btn-danger d-inline-block mx-2 my-4"
            >
              <Link to="/academics">Academics</Link>
            </button>
            <button
              type="button"
              className="btn btn-danger d-inline-block mx-2 my-4"
            >
              <Link to="/department">Department</Link>
            </button>
            <button
              type="button"
              className="btn btn-danger d-inline-block mx-2 my-4"
            >
              <Link to="/calender">Calender</Link>
            </button>
            <button
              type="button"
              className="btn btn-danger d-inline-block mx-2 my-4"
            >
              <Link to="/contact">Contact Us</Link>
            </button>
            <button
              type="button"
              className="btn btn-danger d-inline-block mx-2 my-4"
            >
              <Link to="/faculty">Faculty</Link>
            </button>
            <button
              type="button"
              className="btn btn-danger d-inline-block mx-2 my-4"
            >
              <Link to="/library">Library</Link>
            </button>
            <button
              type="button"
              className="btn btn-danger d-inline-block mx-2 my-4"
            >
              <Link to="/gallery">Gallery</Link>
            </button>
            <button
              type="button"
              className="btn btn-danger d-inline-block mx-2 my-4"
            >
              Faq
            </button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Home
