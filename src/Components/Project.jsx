import React from 'react'
import "./Project.css"

const Project = () => {
  return (
    
        <div className="bg-dark">
        <div className='card offset-md-2 bg-dark' style={{width:'auto', height:'100vh', border:'none'}}>
        <div className="row g-0" >
              <div className="col-md-4" style={{marginTop:'100px'}}>
                <img src="https://media.licdn.com/dms/image/v2/D4D12AQEQ9hWRCK1Acw/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1680746288444?e=1738195200&v=beta&t=2NHEOcEnVw3598cmfdfBhsD4zTtLiplMIWdN_Y2b9TI" className="img-fluid" alt="Image" style={{height:'30vh', width:'100%'}} />
              </div>
              <div className="col-md-8">
            <div className='card-body'>
                <h5 className='card-header text-white' style={{marginTop:'70px'}}> <strong> Job Board Platform ( Candidates Portal )
                Developed a job portal platform with key features:</strong>
                    
                   
                </h5>
          <div className="card-text" >
            <ul>
         <li className="text-white">User Profile Management: Dynamic profile creation and update</li>
         <li  className="text-white">Job Search: Advanced search and browse functionalities</li>
         <li  className="text-white">Application Tracking: Real-time status updates and history management</li>
         <li className="text-white"> Notifications: Email alerts for job updates and status changes </li>
         <li className="text-white">Direct Application: Streamlined application process.</li>
         </ul>
         <div className='mt-5' style={{marginLeft:"200px"}}>
            <a
             href="https://job-board-platform-frontend.netlify.app/" 
            className="btn btn-light mb-3"
            target='_blank'  
            rel="noopener noreferrer" >
            <strong> View Project </strong>
            </a>
         </div>
         </div>
         </div>
         </div>
         </div>
         </div>
         </div>
      )
    }

export default Project