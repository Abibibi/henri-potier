import styled from 'styled-components';
import { SCREEN } from '../../styles/theme';

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.color.black};
`;

export const HeaderStyled = styled.div`
  font-size: ${({ theme }) => theme.font.XXS};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  margin: 0 auto;
  max-width: 1140px;
  height: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  h1, a:first-child {
    display: flex;
    align-items: center;
  }

  img {
    width: 7rem;
  }

  a:last-child {
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    div:first-child {
      font-size: ${({ theme }) => theme.font.S};
    }

    ${SCREEN.MOBILE_AND_TABLET} {
      div:last-child {
        display: none;
      }
    }

    ${SCREEN.DESKTOP} {
      div:first-child {
        margin-right: .6rem;
      }
    }
  }

  form {
    label {
      font-size: 1rem;
    }

    div {
      height: 42px;
      width: 100%;
      position: relative;
    }

    input {
      height: 100%;
      border: none;
    }

    button {
      background: ${({ theme }) => theme.color.orange};
      border: none;
      height: 100%;
      width: ${({ theme }) => theme.spacing.L};
      position: absolute;
      right: 0;
      bottom: 0; 

      &:hover {
        background: ${({ theme }) => theme.color.darkerOrange};
      }
    }

    ${SCREEN.MOBILE_AND_TABLET} {
      width: 100%;

      div {
        margin-top: .3rem;
      }
      
      input {
        width: 100%;
      }
    }

    ${SCREEN.DESKTOP} {
      width: 71%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      display: flex;
      align-items: center;

      label {
        width: 72%;
      }

      input {
        display: block;
        width: 42rem;
      }
    }
  }

  @media only screen and (max-width: 1139px) {
    padding: 1rem ${({ theme }) => theme.spacing.S};
  }

  ${SCREEN.DESKTOP} {
    height: 70px;
    font-size: ${({ theme }) => theme.font.XS};

    div:first-child {
      height: 100%;
    }

    img {
      width: 8rem;
    }
  }

  ${SCREEN.BIGGER_DESKTOP} {
    max-width: 1340px;
    height: 75px;
    font-size: ${({ theme }) => theme.font.S};
  }
`;
