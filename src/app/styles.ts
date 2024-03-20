import styled from 'styled-components/native';
import theme from '../styles/theme';

// estilo de todo app

export const ContainerGeral = styled.SafeAreaView`
  background-color: #0d172a;
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding-top: 30px;
`;

export const ContainerCategorias = styled.FlatList`
  margin-top: 15px;
`;
export const TitleSection = styled.Text`
  color: ${theme.colors.white};
  margin-bottom: 12px;
  font-size: 20px;
  font-family: ${theme.fontFamily.bold};
`;
