import React from 'react';
import * as S from './styles';
import { View, Text, Pressable, PressableProps } from 'react-native';

type CategoryProps = PressableProps & {
  title: string;
  isSelected?: boolean;
};

export function CategoryButtons({ title, isSelected, ...rest }: CategoryProps) {
  return (
    <>
      {isSelected ? (
        <S.ButtonCategoryClicado {...rest}>
          <S.TextButtonCategoty>{title}</S.TextButtonCategoty>
        </S.ButtonCategoryClicado>
      ) : (
        <>
          <S.ButtonCategory {...rest}>
            <S.TextButtonCategoty>{title}</S.TextButtonCategoty>
          </S.ButtonCategory>
        </>
      )}
    </>
  );
}
