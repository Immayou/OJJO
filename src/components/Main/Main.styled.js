import styled from '@emotion/styled';

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
  }
  @media screen and (min-width: 1280px) {
    border-bottom-left-radius: 110px;
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

export const HeroLogoImgTablet = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 28px;
    left: 10px;
    width: 100%;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export const HeroLogoImgDesk = styled.img`
  @media screen and (max-width: 1279px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 28px;
    left: 10px;
    width: 100%;
  }
`;

export const HeroTitle = styled.img`
  position: absolute;
  top: 86px;
  left: 20px;

  @media screen and (min-width: 768px) {
    top: 80px;
    left: 72px;
    width: 307px;
    height: 101px;
  }
  @media screen and (min-width: 1280px) {
    top: 308px;
    left: 229px;
  }
`;

export const HomeLogoImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 35px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const HomeLogoBottomImgTabletDesk = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    left: 103px;
    bottom: 56px;
  }
  @media screen and (min-width: 1280px) {
    left: 230px;
    bottom: 50px;
  }
`;

export const BottomWrapper = styled.div`
  position: relative;
  min-height: 514px;
  @media screen and (min-width: 768px) {
    min-height: 442px;
  }
  @media screen and (min-width: 1280px) {
    min-height: 268px;
  }
`;
