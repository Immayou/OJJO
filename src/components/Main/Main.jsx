import { MainWrapper } from '../MainWrapper/MainWrapper';
import {
  HeroWrapper,
  HeroTitle,
  BottomWrapper,
  HeroTitleBox,
  HeroText,
} from './Main.styled';

export const Main = () => {
  return (
    <MainWrapper>
      <HeroWrapper>
        <HeroTitleBox>
          <HeroTitle>Kapu$ta</HeroTitle>
          <HeroText>Smart finance</HeroText>
        </HeroTitleBox>
      </HeroWrapper>
      <BottomWrapper />
    </MainWrapper>
  );
};
