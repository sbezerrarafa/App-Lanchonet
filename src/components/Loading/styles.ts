import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.darkBlack};
`;

export const Loading = styled.ActivityIndicator`
  color: ${theme.colors.white};
`;
