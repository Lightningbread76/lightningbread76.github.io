import React from 'react'
import './Cards.css';
import Card from 'react-bootstrap/Card'
//import CardItem from './CardItem';
import Project from './Project';
function Projects() {
    return (
      
           <div className='cards'>
             <Card className="category-title">
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="card-title">Projects</Card.Title>
                <hr />
                <Card.Text className="card-text">
          <div className='projects__container'>
            <Project
              src='images/checkmate_logo.png'
              text='Checkmate - a Note taking android app'
              label='Checkmate'
              path='https://www.youtube.com/watch?v=zKhZutb--Yc'
            />
            <Project
              src='images/fractalist.png'
              text='Fractalist - Generate unique fractals with spotify playlists'
              label='Fractalist'
              path='https://quence-dev.github.io/fractalist/index.html'
            />
            <Project
              src='images/melspec.png'
              text='Social Sentiment Project - using machine learning to analyze sentiment in audio clips'
              label='Social Sentiment Project'
              path='https://github.com/ksapru/BU-SocialSentiment583'
            />
            <Project
              src='images/beahero.png'
              text='Be a Hero - a choose your own adventure book website'
              label='Be a Hero'
              path='https://kmi.eshuwu.net/'
            />
            <Project
              src='images/mathworks.png'
              text='Mathworks - Dark Mode in Simulink feature'
              label='Company Project'
              path='https://www.mathworks.com/help/simulink/slref/simulationdatainspector.html'
            />
            <Project
              src='images/mathworks.png'
              text='Mathworks - Bug fix Matlab testpoints & testing code base maintenance + lean componentization'
              label='Company Project'
              path='https://www.mathworks.com/help/simulink/slref/simulationdatainspector.html'
            />
            <Project
              src='images/mathworks.png'
              text='Mathworks - C++ to Matlab code testpoints'
              label='Company Project'
              path='https://www.mathworks.com/help/simulink/slref/simulationdatainspector.html'
            />
            <Project
              src='images/mathworks.png'
              text='Mathworks - Javascript unit testing and system to unit test conversion'
              label='Company Project'
              path='https://www.mathworks.com/help/simulink/slref/simulationdatainspector.html'
            />
            <Project
              src='images/mathworks.png'
              text='Mathworks - Test Documentation'
              label='Company Project'
              path='https://www.mathworks.com/help/simulink/slref/simulationdatainspector.html'
            />
            <Project
              src='images/mathworks.png'
              text='Mathworks - Update Save, import, export, preferences, dialog features'
              label='Company Project'
              path='https://www.mathworks.com/help/simulink/slref/simulationdatainspector.html'
            />
            <Project
              src='images/mathworks.png'
              text='Mathworks - Facilitated build operations for team cluster'
              label='Company Project'
              path='https://www.mathworks.com/help/simulink/slref/simulationdatainspector.html'
            />
        </div>
                  </Card.Text>
              </Card.Body>
            </Card>
          
      </div> 

    )
}

export default Projects
