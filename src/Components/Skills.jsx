const Skills = () => {
    return (
        <div className="bg-dark" style={{height:'100vh'}}>
      <div className='card mb-3 offset-md-3 bg-dark' style={{width:'auto', height:"100vh", border:"none"}}>
      <div className="row g-0" style={{marginTop:'100px'}}>
          <div className="col-md-4">
            <img src="public/Images/mern.jpg" className="img-fluid" alt="Image" style={{height:'50vh', width:'100%'}} />
          </div>
          <div class="col-md-8">

        <div className='card-body'>
          <div className='class-text' > 
            <ul>
            <li className="text-white"><strong>Frontend:</strong> HTML, CSS, JavaScript, React</li>
            <br />
            <li className="text-white"><strong>Backend:</strong> Node.js, Express</li>
            <br />

            <li className="text-white"><strong>Database:</strong> MongoDB</li>
            <br />

            <li className="text-white"><strong>Version Control:</strong> Git, GitHub</li> 
            <br />

            <li className="text-white"><strong>Tools:</strong> Postman, Visual Studio Code</li>
            <br />

            <li className="text-white"><strong>Other:</strong> RESTful API development</li>
            <br />

            </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    );
  }
  
  export default Skills;
  