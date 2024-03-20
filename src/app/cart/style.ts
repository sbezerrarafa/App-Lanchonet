import styled from 'styled-components/native';
import theme from '@/src/styles/theme';

export const ContainerCarrinhoGeral = styled.View`
  flex: 1;
  padding-top: 20px;
`;

export const ContainerProdutosCarrinho = styled.View`
  padding: 20px;
  margin-top: 12px;
`;
export const InfoSemItensNoCarrinho = styled.Text`
  font-family: ${theme.fontFamily.body};
  color: ${theme.colors.slate400};
  text-align: center;
  margin-top: 450px;
`;

export const ContainerTotal = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const TotalInfo = styled.Text`
  font-size: 18px;
  font-family: ${theme.fontFamily.subtitle};
  color: ${theme.colors.white};
`;
export const TotalSoma = styled.Text`
  font-size: 20px;
  font-family: ${theme.fontFamily.heading};
  color: ${theme.colors.bgLine400};
`;

export const FooterCarrinho = styled.View`
  margin: 20px;
  border-top-width: 1px;
  border-top-color: ${theme.colors.slate700};
`;
