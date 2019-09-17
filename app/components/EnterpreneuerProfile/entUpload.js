import React from 'react';
import { Button } from 'components/UI';
import Star from '../../images/Star.png';

const Entupload = () => (
  <div className="Modeuel1border">
    <section className="enthead">
      <h2>Username Here</h2>
    </section>
    <section className="mainCnt">
      <div className="picUpload">
        <h2>
          Add Your Profile photo <br /> Or <br /> Choose From Our Photos
        </h2>
        <div>
          {' '}
          <Button>Upload Your Photo</Button>
        </div>
      </div>
      <div>
        <Button className="rightBtn">Save Profile</Button>
      </div>
      <div className="StarCount">
        <h2 style={{ float: 'left' }}>My Star Count</h2>{' '}
        <h2 style={{ float: 'right' }}>
          <img src={Star} alt="" /> 0
        </h2>
      </div>
      <div className="aboutInput">
        <h2>About Me</h2>
        <textarea rows="4" cols="40">
          {' '}
        </textarea>
      </div>
    </section>
  </div>
);

export default Entupload;
