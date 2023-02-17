import styled from '@emotion/styled';
import BCGImageTopTablet from '../../images/TopLogoTablet.png';
import BCGImageBottom from '../../images/BottomLogo.png';

export const TopWrapper = styled.section`
  position: relative;
  padding: 0 20px;
  min-height: 258px;
  background-color: #f5f6fb;
  border-bottom-left-radius: 80px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    padding: 0 32px;
    min-height: 526px;
    border-bottom-left-radius: 180px;
  }
  @media screen and (min-width: 1199px) {
    padding: 0 91px;
    border-bottom-left-radius: 110px;
  }
`;

export const BottomWrapper = styled.div`
  position: relative;
  height: 215px;
  @media screen and (min-width: 768px) {
    height: 378px;
    background-image: url(${BCGImageBottom});
    background-position: 85% 85%;
    background-repeat: no-repeat;
    background-size: 183px 146px;
  }
  @media screen and (min-width: 1199px) {
    height: 268px;
    background-image: url(${BCGImageTopTablet});
    background-position: 50% 140%;
    background-repeat: repeat-x;
    background-size: auto 70%;
  }
`;

export const Box = styled.div`
  min-height: 258px;
  background-color: #f5f6fb;
  border-bottom-left-radius: 80px;
  overflow-y: visible;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    height: 526px;
    border-bottom-left-radius: 180px;
  }
  @media screen and (min-width: 1199px) {
    padding: 0 91px;
    border-bottom-left-radius: 110px;
  }
`;

// export const TopWrapper = styled.section`
//   position: relative;
//   background-color: transparent;
//   min-height: 100vh;
//   width: 100%;

//   @media screen and (min-width: 768px) {
//     width: 100%;
//     height: 146px;
//     background: url(${BCGImageBottom});
//     background-position: 85% 85%;
//     background-repeat: no-repeat;
//     background-size: 183px 146px;
//   }
//   @media screen and (min-width: 1199px) {
//     height: 268px;
//     background: url(${BCGImageTopTablet});
//     background-position: 0 100%;
//     background-repeat: repeat-x;
//     background-size: 50%;
//   }
// `;

//  @media screen and (min-width: 768px) {
//     ::before {
//       content: '';
//       position: absolute;
//       /* left: 0;
//       bottom: 0; */
//       width: 100%;
//       height: 146px;
//       background: url(${BCGImageBottom});
//       background-position: 85% 85%;
//       background-repeat: no-repeat;
//       background-size: 183px 146px;
//     }
//   }
//   @media screen and (min-width: 1199px) {
//     ::before {
//       height: 268px;
//       background: url(${BCGImageTopTablet});
//       background-position: 0 100%;
//       /* background-position: 50% 140%; */
//       background-repeat: repeat-x;
//       /* background-size: auto 70%; */
//       background-size: auto 70%;
//     }
//   }

/* @media screen and (min-width: 768px) {
    padding: 0 32px;
    height: 526px;
    border-bottom-left-radius: 180px;
  }
  @media screen and (min-width: 1199px) {
    padding: 0 91px;
    border-bottom-left-radius: 110px;
  } */

// export const BottomWrapper = styled.div`
//   position: relative;
//   min-height: 215px;
//   @media screen and (min-width: 768px) {
//     min-height: 378px;
//     background-image: url(${BCGImageBottom});
//     /* background-position: bottom; */
//     background-repeat: no-repeat;
//     background-size: 183px 146px;
//   }
//   @media screen and (min-width: 1199px) {
//     min-height: 268px;
//     background-image: url(${BCGImageTopTablet});
//     background-position: 0 100%;
//     /* background-position: 50% 140%; */
//     background-repeat: repeat-x;
//     /* background-size: auto 70%; */
//     background-size: auto 70%;
//   }
// `;
