import styled from 'styled-components';
import { SCREEN } from '../../styles/theme';


const ProductButtonStyled = styled.button`
  height: ${({ theme }) => theme.spacing.XS};
  background: ${({ theme }) => theme.color.orange};
  border: none;

  &:hover {
    background: ${({ theme }) => theme.color.darkerOrange};
  }
`;

export default ProductButtonStyled;
