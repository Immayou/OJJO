import styled from '@emotion/styled';
import BCGImageTopTablet from '../../images/TopLogoTablet.png';
import BCGImageBottom from '../../images/BottomLogo.png';

export const TopWrapper = styled.section`
  position: relative;
  min-height: 258px;
  background-color: #f5f6fb;
  border-bottom-left-radius: 80px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    min-height: 526px;
    border-bottom-left-radius: 180px;
  }
  @media screen and (min-width: 1199px) {
    border-bottom-left-radius: 110px;
  }
`;

export const BottomWrapper = styled.div`
  position: relative;
  min-height: 215px;

  @media screen and (min-width: 768px) {
    min-height: 378px;
    background-image: url(${BCGImageBottom});
    background-position: 85% 85%;
    background-repeat: no-repeat;
    background-size: 183px 146px;
  }
  @media screen and (min-width: 1199px) {
    min-height: 268px;
    background-image: url(${BCGImageTopTablet});
    background-position: 50% 140%;
    background-repeat: repeat-x;
    background-size: auto 70%;
  }
`;
