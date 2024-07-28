import React from 'react'

const Addmissions = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right bottom ,skyblue, lightYellow)",
        height: "110vh",
        border: "4px solid blue",
        padding:'11px',
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
        Addmissions
      </h2>
      <hr style={{ border: "3px solid black" }} />
      <div className="accordion " id="accordionExample" style={{}}>
        <div className="accordion-item text-center">
          <h2 className="accordion-header">
            <button
              className="accordion-button fs-5 fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Process :
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body fs-5">
              Admission forms are available for download. Submit the completed
              form along with required documents at the school office.
            </div>
          </div>
        </div>
        <div className="accordion-item text-center">
          <h2 className="accordion-header text-center">
            <button
              className="accordion-button fs-5 fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              Criteria :
            </button>
          </h2>
          <div
            id="collapseTwo"
            text-center
            className="accordion-collapse collapse show text-center"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body fs-5">
              Admission is based on merit and availability of seats. Entrance
              tests may be conducted for certain grades.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button fs-5 fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              Important Dates :
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse show text-center list-style-square"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body fs-5"
              style={{
                listStyleType: "square",
                marginLeft: "1em",
              }}
            >
              <li>Admission Form Availability: March 1st</li>
              <li>Last Date for Submission: March 31st</li>
              <li>Entrance Test: April 15th</li>
              <li>Announcement of Results: April 30th</li>
            </div>
          </div>
        </div>
      </div>
      <br />
      <a
        style={{
          display: "flex",
          marginTop: "10px",
          // alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          marginLeft:'30%',
          marginRight:'30%'
        }}
        href="/path/to/admission-form.pdf"
        download
        className="btn btn-primary mt-3 text-center"
      >
        Download Admission Form
      </a>
    </div>
  );
}

export default Addmissions;
