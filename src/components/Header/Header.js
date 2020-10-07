import styled from 'styled-components';
import { SCREEN } from '../../styles/theme';

const HeaderStyled = styled.header`
  background: ${({ theme }) => theme.color.black};
  width: 100%;
  max-width: 1140px;
  height: 80px;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;

  ${SCREEN.DESKTOP} {
    height: 70px;
    font-size: ${({ theme }) => theme.font.XS};
  }

  ${SCREEN.BIGGER_DESKTOP} {
    max-width: 1340px;
    height: 75px;
    font-size: ${({ theme }) => theme.font.S};
  }

  @media only screen and (max-width: 1139px) {
    padding: 0 ${({ theme }) => theme.spacing.L};
  }
`;

export default HeaderStyled;
