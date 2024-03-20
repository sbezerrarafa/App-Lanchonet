import React from 'react';
import * as S from './styles';
import { Link, LinkProps } from 'expo-router';
import { styles } from './styles';

type LinkButtonProps = LinkProps<string> & {
  title: string;
};

export function LinkButton({ title, ...rest }: LinkButtonProps) {
  return (
    <Link style={styles.styleLink} {...rest}>
      {title}
    </Link>
  );
}
