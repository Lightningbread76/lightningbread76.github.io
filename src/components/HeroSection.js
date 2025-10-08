import React, { useEffect, useState } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// Helper to detect Instagram in-app browser
function isInstagramBrowser() {
  const ua = navigator.userAgent || window.opera;
  return /Instagram/i.test(ua);
}

function HeroSection() {
  const [disableVideo, setDisableVideo] = useState(false);

  useEffect(() => {
    if (isInstagramBrowser()) {
      setDisableVideo(true);
    }
  }, []);
  return (
    <div
      className='hero-container'
      style={disableVideo ? { background: "url('/images/statichero.png') center/cover no-repeat" } : {}}
    >
      {!disableVideo && (
        <video src='/videos/video-2.mp4' autoPlay loop muted />
      )}
      <h1>Kevin Guo</h1>
      <p>Software Engineer, Web Developer and Visionary</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Contact <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}
export default HeroSection;
