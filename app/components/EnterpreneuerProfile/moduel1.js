import React from 'react';
import { Button } from 'components/UI';

const Modeuel1 = props => (
  <div className="Modeuel1border">
    <section className="moduel1head">
      <div onClick={() => props.setCountAction('second')} className="cancel">
        x
      </div>
      <h1>
        Complete The Six Steps Below In Order To Start Making Money On We
        <span style={{ color: '#1473bf' }}>P</span>itch Today!
      </h1>
    </section>
    <section className="moduel1list">
      <h2>
        You are curruently at<span style={{ color: '#1473bf' }}> 0% </span>
        Completed
      </h2>
      <h2>1.Fill Out Payment / Bank information</h2>
      <h3>How To : Drop Down Menu > Payout Setup</h3>
      <h2>2.Download & upload W9 To Get paid</h2>
      <h3>How To : Drop Down Menu > Payout Setup</h3>
      <h2>3.Send A Face Photo & Face Photo With ID</h2>
      <h3>How To : Drop Down Menu > Payout Setup</h3>
      <h2>4.Fill Out Your Stats Accurately</h2>
      <h3>How To : Close This Menu > My Stats</h3>
      <h2>5.Profile Photo & Upload 1 Photo/Video</h2>
      <h3>
        How To : Close This Menu > Add profile Photo <br />
        How To : Click The Camera/Vedio Icon > Click The Folder Icon
      </h3>
      <h2>6.Setup your Settings</h2>
      <h3>How To : Drop Down Menu > My SettinalCLOSEertgs</h3>
    </section>
    <section className="module1foot">
      <h1>Have A Question?</h1>
      <Button>Visit Support</Button>
    </section>
  </div>
);

export default Modeuel1;
