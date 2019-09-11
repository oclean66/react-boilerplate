/**
 *
 * WhyPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectWhyPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import BlackBg from 'components/BlackBg';
import Logo from 'components/Logo';
import {H2, ScrolledDiv} from 'components/UI'

const StyledH2 = styled(H2)`
  text-align: center;
  font-size: 28px;
`

export function WhyPage() {
  useInjectReducer({ key: 'whyPage', reducer });
  useInjectSaga({ key: 'whyPage', saga });

  return (
    <BlackBg>
      <Logo/>
      <StyledH2>Why Become An Entrepreneur?</StyledH2>
      <ScrolledDiv>
        <ul className="list">
          <li>75% Starting Payout With Potential To 85%</li>
          <li>Rewards Program To Make Extra Money</li>
          <li>The Ability To Sell Your Products</li>
          <li>Life Time Memberships & Multiple Sub Options</li>
          <li>Free Album, Video Previews, Photo Blurring</li>
          <li>Dozen Profile Themes</li>
          <li>24 Hour Support Team</li>
          <li>How To Video Tutorials For Entire Site</li>
          <li>Live Streaming With Archive System & Tips</li>
          <li>Email Notifications</li>
          <li>Send Discounts To All Expired Users At Once</li>
          <li>Goals For Fans To Unlock As A Group</li>
          <li>Watermark Ability For All Photos & Videos</li>
          <li>Reviews & Ratings</li>
        </ul>
      </ScrolledDiv>
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
