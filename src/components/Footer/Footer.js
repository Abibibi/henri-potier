import styled from 'styled-components';
import { SCREEN } from '../../styles/theme';


const FooterStyled = styled.footer`
  background: ${({ theme }) => theme.color.black};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.font.XS};

  @media only screen and (max-width: 1139px) {
    padding: ${({ theme }) => theme.spacing.L};
  }
`;

export default FooterStyled;
