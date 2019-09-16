import React from 'react';
import { Button } from 'components/UI';

const Modeueli1 = () => (
  <div>
    <section className="moduel1head">
      <h1>Complete Investor Account SetUp</h1>
    </section>
    <section className="moduel1list">
      <h2>
        You are curruently at<span style={{ color: '#1473bf' }}> 0% </span>
        Completed
      </h2>
      <h2>1.Add your Credit Card On File</h2>
      <h3>How To : Drop Down Menu > Payment Setting / Bank</h3>
      <h2>2.Transfer Money To Your WePitch Bank</h2>
      <h3>How To : Drop Down Menu > Bank</h3>
      <h2>3.SetUp Your Profile Photo & About Me</h2>
      <h3>How To : Close This Popup > Upload A Photo & About Me</h3>
      <h2>4.SetUp All Investor Settings</h2>
      <h3>How To : Close This Menu > My Settings</h3>
    </section>
    <section className="module1foot">
      <li>
        <h1>Have A Question?</h1>
      </li>
      <li>
        <Button>Visit Support</Button>
      </li>
    </section>
  </div>
);

export default Modeueli1;
