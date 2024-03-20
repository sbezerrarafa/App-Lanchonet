import React, { ReactNode } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import * as S from './styles';

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode;
};
type ButtonTextProps = {
  children: ReactNode;
};
type ButtonIconProps = {
  children: ReactNode;
};
function ButtonCarrinho({ children, ...rest }: ButtonProps) {
  return (
    <S.Button activeOpacity={0.7} {...rest}>
      {children}
    </S.Button>
  );
}

function ButtonText({ children }: ButtonTextProps) {
  return <S.TextButton>{children}</S.TextButton>;
}

function ButtonIcon({ children }: ButtonIconProps) {
  return children;
}

ButtonCarrinho.Text = ButtonText;
ButtonCarrinho.Icon = ButtonIcon;

export { ButtonCarrinho };
