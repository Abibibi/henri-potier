import styled from 'styled-components';
import { SCREEN } from '../styles/theme';


const InnerLayout = styled.div`
  width: 100%;
  min-height: 30rem;
  max-width: 1140px;
  margin: ${({ theme }) => theme.spacing.L} 0;

  ${SCREEN.DESKTOP} {
    margin: ${({ theme }) => theme.spacing.M} 0;
  }

  ${SCREEN.BIGGER_DESKTOP} {
    max-width: 1340px;
  }

  @media only screen and (max-width: 1139px) {
    padding: 0 ${({ theme }) => theme.spacing.S};
  }
`;

export default InnerLayout;
