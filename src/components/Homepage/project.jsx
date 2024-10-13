import React from 'react';

const project = () => {
  return (
    <div className='project bg-image'>
        <div className='container '>
            <div className='row'>
            <div class="col-md-12 text-center">
                <h4 cla>Projects</h4>
                <span></span>
            </div>
            </div>
        <div className='row'>
              <div className='col-6'>
                  <div className="project-description">
                      <h1>New Jyoti Decor</h1>
                      <p>
                      "New Jyoti Decor" is a website designed to showcase a wide range of window blinds. The site aims to provide users with a seamless browsing experience, highlighting the decor options and features of the blinds. The project involved creating a fully responsive, fast-loading website optimized for both desktop and mobile users.
                      </p>
                      <p><span>Role: </span>
                      Full-stack Developer – responsible for designing the front-end, ensuring mobile responsiveness, and integrating hosting and domain management.</p>
                  </div>
              </div>
              <div className='col-6'>
                  <div className="project-preview">
                      <div class="iframe-container">
                          <iframe src="https://newjyotidecor.com"
                              title="New Jyoti Decor"
                              width="100%" height="300px"
                               >  
                          </iframe>
                      </div>
                  </div>
              </div>
        </div>
    </div>
    </div>
  );
};

export default project;