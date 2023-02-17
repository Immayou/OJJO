import { TopWrapper, BottomWrapper, Box, BoxInner } from './MainHome.styled';
import { MainWrapper } from '../MainWrapper/MainWrapper';
import s from './MainHome.module.css';
import MediaQuery from 'react-responsive';
import imgText from '../../images/Kapusta.svg';

export const MainHome = () => {
  return (
    <MainWrapper>
      <TopWrapper></TopWrapper>
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '20%',
          minHeight: '100vh',
          backgroundColor: 'transparent',
        }}
      >
        <div
          style={{
            width: '500px',
            height: '500px',
            backgroundColor: 'black',
            marginBottom: '20px',
          }}
        ></div>
        <div
          style={{
            width: '500px',
            height: '500px',
            backgroundColor: 'black',
          }}
        ></div>
      </div>
      {/* <Box></Box> */}
      {/* <BottomWrapper></BottomWrapper> */}
    </MainWrapper>
  );
};

{
  /* <div
          style={{
            width: '100%',
            minHeight: '100hv',
            position: 'absolute',
            top: '0',
            left: '0',
            backgroundColor: 'transparent',
          }}
        > */
}
{
  /* <div
            style={{
              width: '500px',
              height: '500px',
              backgroundColor: 'black',
              marginBottom: '20px',
            }}
          ></div>
          <div
            style={{
              width: '500px',
              height: '500px',
              backgroundColor: 'black',
              marginBottom: '20px',
            }}
          ></div> */
}
{
  /* </div> */
}
