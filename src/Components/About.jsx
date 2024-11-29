import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="bg-dark" style={{height: '130vh' }}>
      <div className="card mb-3 offset-md- bg-dark" style={{ marginLeft: '100px', width: 'auto', height: '100vh', border: 'none' }}>
        <div className="row g-0" style={{ marginTop: '100px' }}>
          <div className="col-md-6">
            <div className="card-body">
              <p className="card-text text-light paragraph" style={{ marginRight: '50px'}}>
                <h4><strong>Hello !</strong></h4>  <br />
                <strong>

    I am Evanjalin Joshva K, a MERN stack developer with a strong passion for creating dynamic web
    applications. I have 3 years of experience in non-IT jobs. <br />
    As I begin my career in full-stack development, I’m eager to use my skills to
    contribute to exciting projects and grow as a developer.
                </strong>
              </p>

              <div className="text-center mt-5">
                <a
                  href="https://drive.google.com/file/d/1Z3URrjH2GqAI0TLuZ-Wkig1oOJr7zFGl/view?usp=sharing"
                  className="btn btn-light mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Show Resume</strong>
                </a>
              </div>

              <div className="card bg-dark" style={{ width: '100%', border: 'none' }}>
                <div className="card-body text-center">
                  <p>
                    <Link to={"https://www.linkedin.com/in/evanjalin-joshva-k-652b21186/"} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin" style={{ color: 'white', fontSize: '2rem' }}></i>
                    </Link>
                    <Link to={"https://mail.google.com/"} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '30px' }}>
                      <i className="fas fa-envelope" style={{ color: 'white', fontSize: '2rem' }}></i>
                    </Link>
                    <Link to={"https://github.com/Evanjalin-K"} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '30px' }}>
                      <i className="fab fa-github" style={{ color: 'white', fontSize: '2rem' }}></i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5" style={{ paddingRight: '30px' }}> 
            <img
              src="https://www.thoughtco.com/thmb/rdCRO7PTQYLr8SSrciIEWdKxMfw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-453316791-56d9ce413df78c5ba029d700.jpg"
              className="img-fluid"
              alt="MERN stack"
              style={{ height: '70vh', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
