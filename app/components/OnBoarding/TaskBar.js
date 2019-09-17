import React from 'react';
import { Link } from 'react-router-dom';

export default function TaskBar(props) {
  let view = '';
  debugger;

  switch (props.status) {
    case 'login':
      view = (
        <nav className="navbar fixed-bottom navbar-light bg-dark d-flex justify-content-between">
          <Link className="btn btn-info btn-sm" to={`/why/${props.type}`}>
            <i className="fas fa-question" />
          </Link>

          <Link className="btn btn-sm text-white" to="/">
            <i className="fab fa-facebook-square fa-2x" />
          </Link>

          <Link className="btn btn-sm text-white" to="/">
            <i className="fab fa-twitter-square fa-2x" />
          </Link>

          <Link className="btn btn-sm text-white" to="/">
            <i className="fab fa-youtube fa-2x" />
          </Link>

          <Link className="btn btn-sm text-white" to="/">
            <i className="fab fa-instagram fa-2x" />
          </Link>

          <Link className="btn btn-info btn-sm" to="/">
            <i className="fas fa-key" />
          </Link>
        </nav>
      );

      break;

    case 'OnBoarding':
      view = (
        <nav className="navbar fixed-bottom navbar-light bg-dark d-block">
          <div className="mb-2">
            <Link className="btn btn-sm text-white col-2" to="/">
              <i className="fab fa-facebook-square fa-2x" />
            </Link>
            <Link
              className="btn btn-primary rounded-0 col-8"
              to="/login/entrepreneur"
            >
              <i className="far fa-handshake" /> For Entrepreneur
            </Link>
            <Link className="btn btn-sm text-white col-2 " to="/">
              <i className="fab fa-twitter-square fa-2x" />
            </Link>
          </div>
          <div className="">
            <Link className="btn btn-sm text-white col-2 " to="/">
              <i className="fab fa-youtube fa-2x" />
            </Link>
            <Link
              className="btn btn-primary rounded-0 col-8"
              to="/login/investor"
            >
              <i className="fas fa-piggy-bank" /> For Investors
            </Link>
            <Link className="btn btn-sm text-white col-2 " to="/">
              <i className="fab fa-instagram fa-2x" />
            </Link>
          </div>
        </nav>
      );

      break;

    case 'entrepreneur':
      view = (
        <nav
          style={{
            height: 60,
            verticalAlign: 'middle',
            backgroundColor: '#555555',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            textAlign: 'center',
          }}
          className="navbar fixed-bottom navbar-light bg-dark d-block"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              padding: 14,
            }}
            className="my-1 d-flex justify-content-around"
          >
            <a className="btn btn-sm text-white col-2" href="/broadcaster/">
              <i className="fas fa-camera fa-2x" />
            </a>

            <Link className="btn btn-sm text-white col-2" to="/grid/">
              <i className="fas fa-video fa-2x" />
            </Link>

            <a className="btn btn-sm text-white col-2" href="/broadcaster/">
              <i className="fas fa-podcast fa-2x" />
            </a>
          </div>
        </nav>
      );

      break;
    case 'investor':
      view = (
        <nav className="navbar fixed-bottom navbar-light bg-dark d-block" />
      );

      break;

    default:
      break;
  }

  return view;
}
