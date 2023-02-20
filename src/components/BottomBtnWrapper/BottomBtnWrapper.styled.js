import styled from '@emotion/styled';
export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  @media screen and (min-width: 768px) {
    /* top: 0;
    left: 0; */
    display: none;
  }
`;

export const BtnList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BtnItem = styled.li`
  display: flex;
  width: 100%;
  font-size: 23px;
  background-color: #f5f6fb;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :not(:last-child) {
    margin-right: 2px;
  }
  &:hover {
    background-color: #ff751d;
  }
`;
export const BtnLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 53px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000000;
  font-family: 'Roboto', sans-serif;
  font-style: bold;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 2%;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: #ff751d;
    color: #ffffff;
  }
`;
