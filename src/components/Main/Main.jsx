import {
  HeroWrapper,
  HeroLogoImg,
  HomeLogoImg,
  HeroTitle,
  HeroLogoImgTablet,
  HeroLogoImgDesk,
  HomeLogoBottomImgTabletDesk,
  Wrapper,
  BottomWrapper,
} from './Main.styled';

export const Main = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <HeroLogoImg
          src={require('../../images/HeroImg_mob.png')}
          alt="Logo"
          width={83}
          height={89}
        ></HeroLogoImg>
        <HeroLogoImgTablet
          src={require('../../images/TopLogoTablet.png')}
          alt="Logo"
          height={232}
        ></HeroLogoImgTablet>
        {/* <HeroLogoImgDesk
          src={require('../../images/TopLogoDesk.png')}
          alt="Logo"
          height={232}
        ></HeroLogoImgDesk> */}
        {/* <HeroTitle
          src={require('../../images/HeroTitle_mob.png')}
          alt="Logo Kapusta"
          width={183}
          height={63}
        ></HeroTitle> */}
      </HeroWrapper>
      <BottomWrapper>
        <HomeLogoImg
          src={require('../../images/HeroImg_mob.png')}
          alt="Logo"
          width={83}
          height={89}
        ></HomeLogoImg>
        <HomeLogoBottomImgTabletDesk
          src={require('../../images/BottomLogo.png')}
          alt="Logo"
          width={183}
          height={142}
        ></HomeLogoBottomImgTabletDesk>
      </BottomWrapper>
    </Wrapper>
  );
};
