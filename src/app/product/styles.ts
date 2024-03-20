import styled from 'styled-components/native';
import theme from '@/src/styles/theme';

export const ContainerProdutoDetail = styled.View`
  flex: 1;
`;

export const ImgPrincipal = styled.Image`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ContentProdutoDetail = styled.View`
  flex: 1;
  padding: 20px;
  margin-top: 12px;
`;
export const Preco = styled.Text`
  color: ${theme.colors.bgLine400};
  font-family: ${theme.fontFamily.heading};
  margin-bottom: 8px;
  font-size: 24px;
`;
export const DescriptionDetail = styled.Text`
  color: ${theme.colors.slate400};
  font-family: ${theme.fontFamily.body};
  font-size: 14px;
  margin-bottom: 15px;
`;
export const Ingredientes = styled.Text`
  color: ${theme.colors.slate400};
  font-family: ${theme.fontFamily.body};
`;

export const TituloProduto = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.fontFamily.heading};
  font-size: 20px;
`;
