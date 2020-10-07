import styled from 'styled-components';
import { SCREEN } from '../styles/theme';


const InnerLayout = styled.div`
  width: 100%;
  max-width: 1140px;
  background: ${({ theme }) => theme.color.white};

  ${SCREEN.BIGGER_DESKTOP} {
    max-width: 1340px;
  }

  @media only screen and (max-width: 1139px) {
    padding: ${({ theme }) => theme.spacing.L} ${({ theme }) => theme.spacing.L} 0;
  }
`;

export default InnerLayout;
