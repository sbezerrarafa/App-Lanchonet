import styled from 'styled-components/native';
import theme from '@/src/styles/theme';
import { StyleSheet } from 'react-native';
// style={selecionado === item ? styles.check : styles.checked}
export const styles = StyleSheet.create({
  styleLink: {
    fontFamily: theme.fontFamily.body,
    color: theme.colors.slate300,
    textAlign: 'center',
    marginBottom: 32,
    fontSize: 16,
  },
});
