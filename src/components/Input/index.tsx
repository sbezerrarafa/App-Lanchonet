import React from 'react';
import * as S from './style';
import { TextInput, TextInputProps } from 'react-native';
import theme from '@/src/styles/theme';

export function Input({ ...rest }: TextInputProps) {
  return (
    <S.InputEndereco
      multiline
      textAlignVertical="top"
      placeholderTextColor={theme.colors.slate400}
      {...rest}
    />
  );
}
