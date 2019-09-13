/**
 *
 * WhyPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import BlackBg from 'components/BlackBg';
import Logo from 'components/Logo';
import { H2 } from 'components/UI';
import OverflowScrolling from 'react-overflow-scrolling';

import makeSelectWhyPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import EntrepreneuerWhy from "components/Why/entrepreneuerWhy";
import InvestorWhy from "components/Why/investorWhy";

const StyledH2 = styled(H2)`
  text-align: center;
  font-size: 28px;
`;

export function WhyPage(props) {
  useInjectReducer({ key: 'whyPage', reducer });
  useInjectSaga({ key: 'whyPage', saga });

  return (
    <BlackBg>
      <Logo />
      <StyledH2>Why Become An {props.match.params.type}</StyledH2>
      <OverflowScrolling className='overflow-scrolling'>
        {props.match.params.type === "entrepreneur" ? <EntrepreneuerWhy/> : <InvestorWhy/>}
      
        
      </OverflowScrolling>
      
    </BlackBg>
  );
}

WhyPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  whyPage: makeSelectWhyPage(),
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

export default compose(withConnect)(WhyPage);
