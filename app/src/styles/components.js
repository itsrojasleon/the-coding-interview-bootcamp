import styled from 'styled-components';
import { Link } from 'gatsby';

export const Text = styled.p`
  color: lightcoral;
  font-size: 30px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  margin: auto;
  @media (max-width: 769px) {
    width: 100%;
  }
`;
export const Logo = styled(Link)`
  font-size: 20px;
  color: lightcoral;
`;
