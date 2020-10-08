import styled from 'styled-components';
import { SCREEN } from '../../styles/theme';


const HomeProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 170px;
  font-size: ${({ theme }) => theme.font.XXS};
  margin: ${({ theme }) => theme.spacing.S};

  ${SCREEN.DESKTOP} {
    font-size: ${({ theme }) => theme.font.XS};
  }

  img {
    width: 100%;
    height: auto;
  }

  div {
    margin: ${({ theme }) => theme.spacing.S} 0;
  }

  h3 {
    font-size: 1rem;
  }

  button {
    height: 40px;
    margin: ${({ theme }) => theme.spacing.XXS} 0;
    background: ${({ theme }) => theme.color.orange};
    border: none;

    &:hover {
      background: ${({ theme }) => theme.color.darkerOrange};
    }
  }
`;

export default HomeProductStyled;
