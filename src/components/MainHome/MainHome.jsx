import { TopWrapper, BottomWrapper, Box, BoxInner } from './MainHome.styled';
import { MainWrapper } from '../MainWrapper/MainWrapper';
import s from './MainHome.module.css';
import MediaQuery from 'react-responsive';
import imgText from '../../images/Kapusta.svg';

const Container = ({ children }) => {
  return (
    <>
      <MediaQuery maxWidth={767}>
        <div className={s.container}>{children}</div>
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={1279}>
        <div className={s.containerTablet}>{children}</div>
      </MediaQuery>
      <MediaQuery minWidth={1280}>
        <div className={s.containerDesktop}>{children}</div>
      </MediaQuery>
    </>
  );
};

export const MainHome = () => {
  return (
    <MainWrapper>
      <TopWrapper></TopWrapper>
      <BottomWrapper></BottomWrapper>
    </MainWrapper>
  );
};
