import {
  HeroWrapper,
  HeroLogoImg,
  HeroTitle,
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
        <HeroTitle
          src={require('../../images/HeroTitle_mob.png')}
          alt="Logo Kapusta"
          width={183}
          height={63}
        ></HeroTitle>
      </HeroWrapper>
      <BottomWrapper></BottomWrapper>
    </Wrapper>
  );
};
