import styled from 'styled-components';
import { SCREEN } from '../../styles/theme';

const HeaderStyled = styled.header`
  width: 100%;
  max-width: 1140px;
  height: 80px;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ${SCREEN.DESKTOP} {
    height: 70px;
  }

  ${SCREEN.BIGGER_DESKTOP} {
    max-width: 1340px;
    height: 75px;
  }
`;

export default HeaderStyled;
