import styled from 'styled-components';
import { SCREEN } from '../../styles/theme';


export const HomeAllContentStyled = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  min-height: 33rem;

  h2 {
    font-weight: 700;
  }

  h2, & > p {
    padding: ${({ theme }) => theme.spacing.S};
    font-size: ${({ theme }) => theme.spacing.XS};
  }

  & > p {
    text-align: center;
  }
`;

export const HomeProductsContentStyled = styled.div`
  width: 100%;
  min-height: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${SCREEN.TABLET_AND_DESKTOP} {
    flex-flow: row wrap;
    -webkit-box-pack: justify;

    &:after {
      content: "";
      flex: auto;
    }
  }


`;
