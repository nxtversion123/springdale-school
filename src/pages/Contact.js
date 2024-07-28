import React,{useState} from "react";

const ContactUs = () => {
    const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);

    // Hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5 fw-bold">Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <h5 className="fw-bold fs-4">Address:</h5>
          <p>
            Springdale Public School, 123 Education Lane, Cityville, State, ZIP
            Code
          </p>

          <h5>Phone:</h5>
          <p>+1 (123) 456-7890</p>

          <h5>Email:</h5>
          <p>info@springdale.edu</p>

          <h5>Location:</h5>
          <div className="embed-responsive embed-responsive-16by9 mb-4">
            <iframe
              title="location"
              className="embed-responsive-item"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.2224689282784!2d-122.0842496841076!3d37.42199977982521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba3e2c7c3e27%3A0x96b6a845e1b1df69!2sGoogleplex!5e0!3m2!1sen!2sus!4v1582280118983!5m2!1sen!2sus"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>

        <div className="col-md-6">
          <h5 className="fw-bold fs-4">Contact Form:</h5>
          {showAlert && (
            <div className="alert" style={{ color: "red" , fontSize:'large'}}>
              Form submitted successfully!
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div className="mb-1">
        <h3 className="mx-3 d-inline-flex">Mail Us:</h3>
        <h4 className="d-inline">
          <a href="mailto:info@springdale.edu">Here</a>
        </h4>
      </div>
      <div className="mb-5">
        <h3 className="mx-3 d-inline-flex">Mail Me:</h3>
        <h4 className="d-inline">
          <a className="" href="mailto:nxtversionnv007@gmail.com">
            Here
          </a>
        </h4>
      </div>
      <hr />
    </div>
  );
};

export default ContactUs;
