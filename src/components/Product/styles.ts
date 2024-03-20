import React from 'react';
import styled from 'styled-components/native';
import theme from '@/src/styles/theme';

export const ContainerProduto = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-bottom: 16px;
`;

export const ImageProduto = styled.Image`
  width: 92px;
  height: 92px;
  border-radius: 6px;
`;
export const ContainerDescProduto = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const TitleProduto = styled.Text`
  color: ${theme.colors.slate100};
  font-family: ${theme.fontFamily.subtitle};
  flex: 1;
`;
export const DescProduto = styled.Text`
  color: ${theme.colors.slate400};
  font-family: ${theme.fontFamily.body};
  font-size: 12px;
  letter-spacing: 1px;
`;

export const QtdProdutosCarrinho = styled.Text`
  color: ${theme.colors.slate400};
  font-size: ${theme.fontFamily.subtitle};
  font-size: 12px;
`;

export const ContentTitleProduto = styled.View`
  flex-direction: row;
  align-items: center;
`;
