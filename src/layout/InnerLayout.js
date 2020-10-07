import styled from 'styled-components';
import { SCREEN } from '../styles/theme';


const InnerLayout = styled.div`
  width: 100%;
  max-width: 1140px;

  ${SCREEN.BIGGER_DESKTOP} {
    max-width: 1340px;
  }

  @media only screen and (max-width: 1139px) {
    padding: 0 ${({ theme }) => theme.spacing.S};
  }
`;

export default InnerLayout;
