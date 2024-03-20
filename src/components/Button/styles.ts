import styled from 'styled-components/native';
import theme from '@/src/styles/theme';

export const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.bgLine400};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 48px;
  margin: 20px;
  gap: 8px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: ${theme.colors.black};
  font-family: ${theme.fontFamily.heading};
`;
