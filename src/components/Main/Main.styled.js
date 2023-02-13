import styled from '@emotion/styled';
import BCGimageTopTablet from '../../images/TopLogoTablet.png';
import BCGimageTopDesk from '../../images/TopLogoDesk.png';
import BCGimageBottomMob from '../../images/HeroImg_mob.png';
import BCGimageBottom from '../../images/BottomLogo.png';

export const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  margin: 0;
`;

export const HeroWrapper = styled.section`
  position: relative;
  min-height: 286px;
  background-color: #f5f6fb;
  border-bottom-left-radius: 80px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    min-height: 526px;
    border-bottom-left-radius: 180px;
    ::after {
      position: absolute;
      content: '';
      top: 28px;
      left: 10px;
      width: 100%;
      height: 40%;
      background: url(${BCGimageTopTablet});
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  @media screen and (min-width: 1200px) {
    border-bottom-left-radius: 110px;
    ::after {
      position: absolute;
      content: '';
      top: 28px;
      left: 10px;
      width: 100%;
      height: 40%;
      background: url(${BCGimageTopDesk});
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;

export const HeroLogoImg = styled.img`
  position: absolute;
  top: 104px;
  left: 85%;
  bottom: 93px;
  transform: rotate(180deg);
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const HeroTitle = styled.img`
  position: absolute;
  top: 86px;
  left: 20px;

  @media screen and (min-width: 767px) {
    top: 80px;
    left: 72px;
    width: 307px;
    height: 101px;
  }
  @media screen and (min-width: 1199px) {
    top: 308px;
    left: 229px;
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
    background: url(${BCGimageBottomMob});
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
      background: url(${BCGimageBottom});
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  @media screen and (min-width: 1200px) {
    min-height: 268px;
    ::after {
      position: absolute;
      content: '';
      bottom: 50px;
      left: 230px;
    }
  }
`;
