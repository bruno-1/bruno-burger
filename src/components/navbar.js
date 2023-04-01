import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Hamburguer from './../assets/hamburger-60x60.png';

const Header = styled.header`
  background-color: #280B45;
`;

const Container = styled.div`
  display: flex;
  padding: 1rem 0 1rem;
  align-items: center;
`;

const ContainerAppName = styled.div`
  width: 50%;
  padding-left: 1rem;
`;

const AppLink = styled(Link)`
  margin: 0;
  font-family: 'Alkatra', cursive;
  font-weight: 400;
  font-size: 2.25rem;
  color: #FFF;

  &:link { text-decoration: none; }
  
  &:visited { text-decoration: none; }
  
  &:hover { text-decoration: none; }
  
  &:active { text-decoration: none; }
`;


const Nav = styled.nav`
  width: 50%;
`

const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0;
  justify-items: center;
  align-items: center;
  font-family: 'Delicious Handrawn', cursive;
  font-weight: 400;
  font-size: 1.5rem;
`;

const LinkStyled = styled(Link)`
  color: #FFF;
  
  &:link { text-decoration: none; }
  
  &:visited { text-decoration: none; }
  
  &:hover {
    text-decoration: none;
    color: #FFE98A;
  }
  
  &:active { text-decoration: none; }
`;

const Navbar = () => {
  return (
    <Header>
      <Container>
        <ContainerAppName>
          <AppLink href="#">
            <Image src={Hamburguer} alt='Burger icon' style={{ verticalAlign: 'middle' }} />
            <span style={{ marginLeft: '.5rem' }}>Bruno Burger</span>
          </AppLink>
        </ContainerAppName>
        <Nav>
          <List>
            <li><LinkStyled href='#'>Promoções do dia</LinkStyled></li>
            <li><LinkStyled href='#'>Carrinho</LinkStyled></li>
            <li><LinkStyled href='#'>Login</LinkStyled></li>
          </List>
        </Nav>
      </Container>
    </Header>
  );
};

export default Navbar;