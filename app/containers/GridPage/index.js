/**
 *
 * GridPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectGridPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import LiveCard from '../../components/OnBoarding/LiveCard';
import { fetchLiveUsers } from './actions';
import TaskBar from '../../components/OnBoarding/TaskBar';

export function GridPage(props) {
  useInjectReducer({ key: 'gridPage', reducer });
  useInjectSaga({ key: 'gridPage', saga });

  useEffect(() => {
    props.dispatch(fetchLiveUsers());
  }, []);

  const { online } = props.gridPage && props.gridPage;
  const user = { type: 'entrepreneur' };

  const liveUsers =
    online &&
    online.length &&
    online.map(item => (
      <LiveCard
        key={item.sessionId}
        sessionId={item.sessionId}
        created_at={item.created_at}
      />
    ));

  return (
    <>
      {online && online.length > 0 && (
        <h3
          className="alert bg-success"
          style={{
            textAlign: 'center',
            padding: 14,
            backgroundColor: '#62c462',
            borderRadius: 5,
            color: 'white',
          }}
        >
          Live Session
        </h3>
      )}
      {/* <div className="card-columns">{online && online[0].sessionId}</div>
      <div className="d-none alert bg-success mt-3">Recording</div> */}
      {liveUsers && liveUsers.length ? (
        <div
          className="d-none card-columns"
          style={{ display: 'flex', justifyContent: 'space-around' }}
        >
          {liveUsers}
        </div>
      ) : (
        <h1 style={{ textAlign: 'center', color: 'red' }}>
          No Live User found
        </h1>
      )}
      <TaskBar status={user ? user.type : ''} />
    </>
  );
}

GridPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  gridPage: makeSelectGridPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GridPage);

// import React from 'react';
// import TaskBar from '../Layout/TaskBar';
// import BroadcastServices from '../../Services/BroadcastServices';

// class Grid extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       index: [],
//       live: [],
//     };
//   }
//   componentDidMount() {
//     this.fetch();
//     setInterval(() => {
//       this.fetch();
//     }, 5000);
//   }
//   fetch() {
//     BroadcastServices.index().then(index => {
//       this.setState({ index });
//     });
//     BroadcastServices.live().then(live => {
//       let result = live.content;
//       result = result.filter(i => {
//         return i.connections.numberOfElements > 0;
//       });
//       this.setState({ live: result });
//     });
//   }
//   render() {
//     const { index, live } = this.state;
//     const { user } = this.props;

//     const grid = index.map(item => {
//       return (
//         <LiveCard
//           key={item._id}
//           sessionId={item._id}
//           created_at={item.created_at}
//         />
//       );
//     });

//     const online = live.map(item => {
//       return (
//         <LiveCard
//           key={item.sessionId}
//           sessionId={item.sessionId}
//           created_at={item.created_at}
//         />
//       );
//     });

//     return (
//       <>
//         {online.length > 0 && (
//           <div className="alert bg-success">Live Session</div>
//         )}
//         <div className="card-columns">{online}</div>
//         <div className="d-none alert bg-success mt-3">Recording</div>
//         <div className="d-none card-columns">{grid}</div>
//         <TaskBar status={user?user.type:''} />
//       </>
//     );
//   }
// }
// export default Grid;
