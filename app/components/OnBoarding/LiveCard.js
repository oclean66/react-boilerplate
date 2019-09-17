import React from 'react';
// import moment from 'moment';
import { Link } from 'react-router-dom';
export default props => (
  <Link
    key={props.sessionId}
    to={`/${props.sessionId}/live`}
    className="card bg-dark text-white"
  >
    <img
      src={`https://loremflickr.com/180/180/selfies?${props.sessionId}`}
      alt=""
      style={{ minHeight: 150, minWidth: 150 }}
      className="card-img-top"
    />
    <div className="card-img-overlay p-0 align-items-end flex-column">
      <small className="px-2 rounded text-truncate w-100 font-weight-bolder bg-success mt-auto">
        {props.sessionId}
      </small>
      {/* <small className='bg-dark p-0 m-0 w-100 mt-auto'> {moment(props.created_at).fromNow()}</small> */}
    </div>
  </Link>
);
