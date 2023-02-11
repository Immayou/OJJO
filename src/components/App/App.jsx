import {
  HeroWrapper,
  Container,
  HeroTitle,
  ProductsListButton,
  HeroLogoImg,
  HomeLogoImg,
  HomeLogoImg2,
  HomeShadowLogoImg,
  HomeShadowLogoImg2,
  Wrapper,
  LogoMotto,
} from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <HeroLogoImg
          src={require('../../images/hero_img_mob.png')}
          alt="Logo"
          width={83}
          height={89}
        ></HeroLogoImg>
        <HeroTitle
          src={require('../../images/HeroLogo.png')}
          alt="Logo Kapusta"
          width={183}
          height={63}
        ></HeroTitle>
      </HeroWrapper>
      <HomeLogoImg
        src={require('../../images/hero_img_mob.png')}
        alt="Logo"
        width={83}
        height={89}
      ></HomeLogoImg>
      <HomeShadowLogoImg
        src={require('../../images/ellipse.png')}
        alt="Ellipse"
        width={67}
        height={14}
      ></HomeShadowLogoImg>
      <HomeLogoImg2
        src={require('../../images/hero_img_mob.png')}
        alt="Logo"
        width={83}
        height={89}
      ></HomeLogoImg2>
      <HomeShadowLogoImg2
        src={require('../../images/ellipse.png')}
        alt="Ellipse"
        width={67}
        height={14}
      ></HomeShadowLogoImg2>
    </Wrapper>
  );
};
