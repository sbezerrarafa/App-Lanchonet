import styled from 'styled-components/native';
import theme from '@/src/styles/theme';

export const ButtonCategory = styled.Pressable`
  background-color: ${theme.colors.slate800};
  justify-content: center;
  border-radius: 6px;
  height: 34px;
  padding-left: 16px;
  padding-right: 16px;
`;
export const TextButtonCategoty = styled.Text`
  color: ${theme.colors.slate100};
  font-family: ${theme.fontFamily.subtitle};
  font-size: 14px;
`;

export const ButtonCategoryClicado = styled.Pressable`
  background-color: ${theme.colors.slate800};
  justify-content: center;
  border-radius: 6px;
  height: 34px;
  padding-left: 16px;
  padding-right: 16px;
  border-width: 1px;
  border-color: ${theme.colors.bgLine400};
`;
