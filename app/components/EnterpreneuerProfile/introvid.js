import React from 'react';
import { Button } from 'components/UI';

const IntroVid = () => (
  <div className="introVid">
    <div onClick={alert} className="cancel">
      x
    </div>
    <h2>Entice your Fan With An Introduction Video</h2>
    <div className="btn">
      <Button>Replace Currunt Video</Button>
      <Button>Upload An Intro Video</Button>
    </div>
    <h2 style={{ lineHeight: 'normal' }}>
      Max Video Length <br />
      10 Minutes
    </h2>
  </div>
);

export default IntroVid;
