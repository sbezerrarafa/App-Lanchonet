import styled from 'styled-components/native';
import theme from '@/src/styles/theme';

export const InputEndereco = styled.TextInput`
  height: 120px;
  background-color: ${theme.colors.slate800};
  border-radius: 6px;
  font-family: ${theme.fontFamily.body};
  color: ${theme.colors.white};
  padding: 12px 16px;
`;
