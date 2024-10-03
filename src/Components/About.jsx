import { Link } from "react-router-dom";

const About = () => {
    
  return (
    <div className='bg-dark' style={{height:'100vh'}}>
      <div className="card mb-3 offset-md- bg-dark" style={{ width: 'auto', height:'100vh', border:'none' }}>
        <div className="card-body">
            
          <p className="card-text text-light" style={{marginTop:'100px'}}>
          <strong>I am Evanjalin Joshva K, a certified MERN stack developer with a strong passion for creating dynamic web applications. I have 3 years of experience in non-IT jobs, which has given me a unique perspective and valuable problem-solving skills. As I begin my career in full-stack development, I’m eager to use my skills to contribute to exciting projects and grow as a developer.</strong>
          </p>
          <div className='text-center mt-5'>
            <Link
              to={"https://drive.google.com/file/d/1pjQiD2L1BPJU13T9z3e96I_xZ8Jx0Wcw/view?usp=sharing"}
              className="btn btn-light mb-3">
             <strong> Show Resume</strong>
            </Link>
          </div>
          <div className='card bg-dark' style={{ width: '100%', border:'none' }}>
            <div className='card-body text-center'>
              <p>
                <br />
                <Link to={"https://www.linkedin.com/in/evanjalin-joshva-k-652b21186/"} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin" style={{color: 'white' }}></i>
                </Link>
                <Link to={"https://mail.google.com/"} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '30px' }}>
                  <i className="fas fa-envelope" style={{ color: 'white' }}></i>
                </Link>
                <Link to={"https://github.com/Evanjalin-K"} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '30px' }}>
                  <i className="fab fa-github" style={{ color: 'white' }}></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
