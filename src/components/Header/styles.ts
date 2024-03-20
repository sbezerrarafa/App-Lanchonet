import styled from 'styled-components/native';
import theme from '@/src/styles/theme';

export const Logo = styled.Image`
  width: 124px;
  height: 24px;
`;

export const ContainerHeader = styled.View`
  margin: 20px 20px 0 20px;
  padding-bottom: 20px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.slate700};
`;

export const TextoHeader = styled.Text`
  font-size: 20px;
  font-family: ${theme.fontFamily.heading};
  color: ${theme.colors.white};
`;
export const ContentHeaderLeft = styled.View`
  flex: 1;
  gap: 8px;
`;

export const IconCarrinho = styled.View`
  background-color: ${theme.colors.bgLine300};
  width: 14px;
  height: 14px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -2;
  z-index: 10;
  right: -3.5;
`;
export const QtdCarrinho = styled.Text`
  color: ${theme.colors.slate900};
  font-family: ${theme.fontFamily.bold};
  font-size: 10px;
`;

export const ContainerBag = styled.TouchableOpacity`
  position: relative;
`;
