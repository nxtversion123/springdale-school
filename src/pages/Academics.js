import React from 'react'

const Academics = () => {

  let mystyle = {
    fontSize: "larger",
    fontWeight: "600",
    marginLeft: "12%",
  };
   let mystyle2 = {
    fontSize: "larger",
    fontWeight: "700",
    marginLeft:'8%'
  };

  return (
    <div className='academics'
      style={{
        backgroundImage: "linear-gradient(to right bottom ,crimson, skyblue)",
        border: "4px solid blue",
        padding : '2rem', 
               boxSizing: "border-box",
               
      }}
    >
      <h2
        style={{
          textDecoration: "underline 5px dotted violet",
          color: "black",
          marginBottom: "35px",
          marginTop: "25px",
        }}
        className="text-center fw-bold"
      >
        Academics
      </h2>
      <hr style={{ border: "3px solid black" }} />
      <h3
        className="fw-bold my-4 text-center"
        style={{ textDecoration: "underline solid 4px"}}
      >
        Curriculum:
      </h3>
      <h4 className='my-1 fw-bold' style={{marginLeft:'6%'}}>Primary (Grades 1-5):</h4>
      <p className='' style={mystyle}>
        English, Mathematics, Science, Social Studies, Art, Physical Education
      </p>
      <h4 className='my-1 fw-bold' style={{marginLeft:'6%'}}>Secondary (Grades 6-10):</h4>
      <p className='' style={mystyle}>
        English, Mathematics, Science (Physics, Chemistry, Biology), Social
        Studies, Computer Science, Physical Education, Art
      </p>
      <h4 className='my-1 fw-bold ' style={{marginLeft:'6%'}}>Senior Secondary (Grades 11-12):</h4>
      <span className='' style={mystyle2}>Science Stream:</span>
      <p className='' style={{fontSize: "large",fontWeight: "600",marginLeft: "12%"}}>Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
      <span className='' style={mystyle2}>Commerce Stream:</span>
      <p className='' style={{fontSize: "large",fontWeight: "600",marginLeft: "12%"}}>Accountancy, Business Studies, Economics, Mathematics, English</p>
      <h3 className='my-1 fw-bold ' style={{marginLeft:'6%'}}>Teaching Methodologies:</h3>
      <p className='' style={mystyle}>
      We use a blend of traditional and modern teaching techniques to cater
      to different learning styles.
      </p>
      <h3 className='my-1 fw-bold ' style={{marginLeft:'6%'}}>Educational Resources:</h3>
      <p className='' style={mystyle}>
      Digital classrooms, interactive learning modules, and access to online
      educational platforms.
      </p>
    </div>
  );
}

export default Academics
