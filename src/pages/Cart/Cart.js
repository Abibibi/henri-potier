import styled from 'styled-components';
import { SCREEN } from '../../styles/theme';


const CartStyled = styled.div`
  max-width: 100%;
  min-height: 22rem;
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

export default CartStyled;
