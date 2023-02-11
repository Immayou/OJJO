import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  margin: 0;
`;

export const Container = styled.div`
  padding: 0 20px;
`;

export const HeroWrapper = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 142px 20px;
  background-color: #f5f6fb;
  border-bottom-left-radius: 40%;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    padding: 136px 171px 368px 171px;
  }
`;

export const LogoImg = styled.img`
  position: absolute;
`;

export const HeroLogoImg = styled.img`
  position: absolute;
  top: 160px;
  left: 85%;
  bottom: 93px;
  transform: rotate(180deg);
`;

export const HomeLogoImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 35px;
  @media screen and (min-width: 768px) {
    left: 103px;
    bottom: 90px;
  }
`;

export const HomeLogoImg2 = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    left: 197px;
    bottom: 115px;
    transform: rotate(-90deg);
  }
`;

export const HomeShadowLogoImg = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    left: 108px;
    bottom: 56px;
  }
`;

export const HomeShadowLogoImg2 = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    left: 219px;
    bottom: 72px;
  }
`;

export const HeroTitle = styled.img`
  @media screen and (min-width: 768px) {
    width: 307px;
    height: 101px;
  }
`;

export const ProductsListButton = styled.button`
  display: inline-block;
  width: 261px;
  height: 51px;
  background-color: #000000;
  border: 1px solid #ffffff;
  color: #ffffff;
  text-transform: uppercase;
  font-family: 'Duru sans', 'Roboto', serif;
  font-size: 18px;
  line-height: 1;
`;
