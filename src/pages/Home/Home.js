import styled from 'styled-components';
import { SCREEN } from '../../styles/theme';


const HomeStyled = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  
  ${SCREEN.DESKTOP} {
    flex-flow: row wrap;
  }
`;

export default HomeStyled;
