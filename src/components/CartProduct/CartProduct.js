import styled from 'styled-components';
import { SCREEN } from '../../styles/theme';


const CartProductStyled = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 6rem;
  margin-bottom: ${({ theme }) => theme.spacing.XL};

  & > div:first-child {
    width: 7rem;
    min-height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 100%;
    }
  }

  & > div:nth-child(2) {
    margin-left: .8rem;
    font-size: 1rem;
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${SCREEN.TABLET_AND_DESKTOP} {
      flex-direction: row;
    }

    & > div:first-child {
      h3 {
        font-weight: 600;
        line-height: 1.5rem;
        width: 100%;
      }
    
      p {
        display: none;
  
        ${SCREEN.TABLET_AND_DESKTOP} {
          display: block;
          color: ${({ theme }) => theme.color.gray};

          &:last-child {
            margin-top: ${({ theme }) => theme.spacing.S};
          }
        }
      }
    }

    div:last-child {
      font-weight: 700;

      ${SCREEN.TABLET_AND_DESKTOP} {
        font-size: ${({ theme }) => theme.font.S};
      }
    }
  }

  button {
    position: absolute;
    bottom: -${({ theme }) => theme.spacing.M};
  }
`;

export default CartProductStyled;
