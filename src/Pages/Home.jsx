import { Link, Outlet } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{ paddingLeft: '10px' }}>
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to={'/'}><strong>Evanjalin Joshva K</strong></Link>
          <button className="navbar-toggler bg-white" style={{ border: 'none' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto"> 
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to={'/about'}>
                  <strong>About</strong>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav"> 
              <li className="nav-item">
                <Link className="nav-link active text-light" to={'/skills'}>
                  <strong>Skills</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light" to={'/project'}>
                  <strong>Project</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light" to={'/education'}>
                  <strong>Education</strong>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
