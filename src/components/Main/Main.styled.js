import styled from '@emotion/styled';
import BCGImageTopTablet from '../../images/TopLogoTablet.png';
import BCGImageTopDesk from '../../images/TopLogoDesk.png';
import BCGImageBottomMob from '../../images/HeroImg_mob.png';
import BCGImageBottom from '../../images/BottomLogo.png';
import BCGImageTopMob from '../../images/HeroImg_mob.png';

export const HeroWrapper = styled.section`
  position: relative;
  min-height: 286px;
  background-color: #f5f6fb;
  border-bottom-left-radius: 80px;
  overflow: hidden;
  ::after {
    position: absolute;
    content: '';
    top: 104px;
    left: 85%;
    width: 83px;
    height: 89px;
    transform: rotate(180deg);
    background: url(${BCGImageTopMob});
  }
  @media screen and (min-width: 768px) {
    min-height: 526px;
    border-bottom-left-radius: 180px;
    ::after {
      top: 28px;
      left: 10px;
      width: 100%;
      height: 232px;
      background: url(${BCGImageTopTablet});
      background-repeat: repeat-x;
    }
  }
  @media screen and (min-width: 1200px) {
    border-bottom-left-radius: 110px;
    ::after {
      background: url(${BCGImageTopDesk});
    }
  }
`;

export const HeroTitleBox = styled.div`
  position: absolute;
  z-index: 1000;
  top: 86px;
  left: 20px;
  @media screen and (min-width: 767px) {
    top: 80px;
    left: 171px;
  }
  @media screen and (min-width: 1199px) {
    top: 308px;
    left: 229px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 46px;
  margin-bottom: 5px;

  @media screen and (min-width: 767px) {
    font-size: 80px;
    margin-bottom: 4px;
  }
  @media screen and (min-width: 1199px) {
    font-size: 100px;
    margin-bottom: 2px;
  }
`;

export const HeroText = styled.p`
  padding-left: 11px;
  font-family: 'Roboto' sans-serif;
  font-style: 700px;
  font-size: 13px;
  line-height: 1.15;
  letter-spacing: 15%;
  text-transform: uppercase;
  @media screen and (min-width: 767px) {
    padding-left: 54px;
    font-size: 16px;
    line-height: 1.19;
    letter-spacing: 18%;
  }
  @media screen and (min-width: 1199px) {
    padding-left: 72px;
  }
`;

export const BottomWrapper = styled.div`
  position: relative;
  min-height: 514px;
  ::after {
    position: absolute;
    content: '';
    bottom: 0px;
    left: 35px;
    width: 83px;
    height: 89px;
    background: url(${BCGImageBottomMob});
    background-repeat: no-repeat;
    background-size: contain;
  }
  @media screen and (min-width: 768px) {
    min-height: 442px;
    ::after {
      position: absolute;
      content: '';
      bottom: 56px;
      left: 103px;
      width: 183px;
      height: 142px;
      background: url(${BCGImageBottom});
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  @media screen and (min-width: 1199px) {
    min-height: 268px;
    ::after {
      position: absolute;
      content: '';
      bottom: 50px;
      left: 230px;
    }
  }
`;
