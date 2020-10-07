import styled from 'styled-components';
import { SCREEN } from '../../styles/theme';


const HeaderStyled = styled.header`
  background: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.XXS};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  max-width: 1140px;
  height: 80px;
  top: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media only screen and (max-width: 1139px) {
    padding: 0 ${({ theme }) => theme.spacing.S};
  }

  ${SCREEN.DESKTOP} {
    height: 70px;
    font-size: ${({ theme }) => theme.font.XS};
  }

  ${SCREEN.BIGGER_DESKTOP} {
    max-width: 1340px;
    height: 75px;
    font-size: ${({ theme }) => theme.font.S};
  }

  form {

    label {
      font-size: 1rem;
    }

    div {
      width: 100%;
      position: relative;
    }

    button {
      position: absolute;
      right: 0;
      bottom: 0;
    }

    ${SCREEN.MOBILE_AND_TABLET} {
      width: 100%;

      input {
        width: 100%;
        height: 20px;
      }

      button {
        height: 20px;
      }
    }

    ${SCREEN.DESKTOP} {
      width: 29%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;

      label {
        width: 100%;
      }

      input {
        display: block;
      }
    }
  }
`;

export default HeaderStyled;
