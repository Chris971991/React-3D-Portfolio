import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 87.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .625rem 0;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 3.125rem;
`;

const Logo = styled.img`
  height: 3.125rem;
`;

const List = styled.ul`
  display: flex;
  gap: 1.25rem;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 3.125rem;
`;

const Icon = styled.img`
  width: 1.25rem;
  cursor: pointer;
`;

const Button = styled.button`
  width: 6.25rem;
  padding: .625rem;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: .3125rem;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Logo src="./img/logo.png"/>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Studio</ListItem>
                <ListItem>Works</ListItem>
                <ListItem>Contact</ListItem>
            </List>
            </Links>
            <Icons>
                <Icon src="./img/search.png"/>
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar