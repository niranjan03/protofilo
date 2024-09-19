import React from 'react';

const work = () => {
  return (
    <div className='project'>
        <div className='container '>
        <div className='row'>
              <div className='col-6'>
                  <div className="project-description">
                      <h1>Project</h1>
                      <p>
                          A web app for visualizing personalized Spotify data. View your top
                          artists, top tracks, recently played tracks, and detailed audio
                          information about each track. Create and save new playlists of
                          recommended tracks based on your existing playlists and more.
                      </p>
                  </div>
              </div>
              <div className='col-6'>
                  <div className="project-preview">
                      <div class="iframe-container">
                          <iframe src="https://newjyotidecor.com"
                              title="New Jyoti Decor"
                              width="100%" height="400px">
                          </iframe>
                      </div>
                  </div>
              </div>
        </div>
    </div>
    </div>
  );
};

export default work;