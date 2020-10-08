import styled from 'styled-components';
import { SCREEN } from '../../styles/theme';


export const HomeAllContentStyled = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing.S};

  h2 {
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacing.S};
  }
`;

export const HomeProductsContentStyled = styled.div`
  width: 100%;
  min-height: 22rem;
  display: flex;
  flex-direction: column;
  
  ${SCREEN.TABLET_AND_DESKTOP} {
    flex-flow: row wrap;
  }


`;
