import { Wrapper, Container, HeroTitle } from './App.styled';
import { BiAlignLeft } from 'react-icons/bi';

export const App = () => {
  return (
    <Wrapper>
      <Container>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '250px',
          }}
        >
          <img
            src={require('../../images/logo.png')}
            alt="Logo"
            width="216"
            height="52"
          ></img>
          <BiAlignLeft size={50} color="white"></BiAlignLeft>
        </div>
        <HeroTitle>Expensive and rich</HeroTitle>
        <div>product catalog</div>
      </Container>
    </Wrapper>
  );
};
