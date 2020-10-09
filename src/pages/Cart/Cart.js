import styled from 'styled-components';
import { SCREEN } from '../../styles/theme';


export const CartStyled = styled.div`
  max-width: 100%;
  min-height: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.S};

  & > p:first-child {
    font-size: ${({ theme }) => theme.spacing.XS};

    a {
      text-decoration: underline;
    }
  }
`;

export const TotalCartStyled = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.S} ${({ theme }) => theme.spacing.S};
  font-size: ${({ theme }) => theme.font.XXS};
  
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &:first-child {
      border-top: 1px solid ${({ theme }) => theme.color.lightGray};
      padding-top: ${({ theme }) => theme.spacing.S};
    }

    &:nth-child(2) {
      margin: ${({ theme }) => theme.spacing.XXXS} 0 ${({ theme }) => theme.spacing.S};
    }

    &:last-child {
      font-size: ${({ theme }) => theme.font.XS};
      font-weight: 700;

      div:last-child {
        font-size: ${({ theme }) => theme.font.S};
        color: ${({ theme }) => theme.color.green};
      }
    }
  }
`;

