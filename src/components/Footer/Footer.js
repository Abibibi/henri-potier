import styled from 'styled-components';


const FooterStyled = styled.footer`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.black};
  text-align: center;
  width: 100%;
  min-height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.spacing.XXXS};

  @media only screen and (max-width: 1139px) {
    padding: ${({ theme }) => theme.spacing.L};
  }
`;

export default FooterStyled;
