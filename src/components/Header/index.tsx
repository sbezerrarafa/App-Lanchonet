import { View, Image, Text, TouchableOpacity } from 'react-native';
import * as S from './styles';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';

type HeaderProps = {
  title: string;
  cartQuantityItems?: number;
};

export function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
  return (
    <S.ContainerHeader>
      <S.ContentHeaderLeft>
        <S.Logo source={require('../../assets/logo.png')} alt="logo" />
        <S.TextoHeader>{title}</S.TextoHeader>
      </S.ContentHeaderLeft>
      {cartQuantityItems > 0 && (
        <Link href="/cart/" asChild>
          <S.ContainerBag>
            <S.IconCarrinho>
              <S.QtdCarrinho>{cartQuantityItems}</S.QtdCarrinho>
            </S.IconCarrinho>
            <Feather size={24} name="shopping-bag" color={'#fff'} />
          </S.ContainerBag>
        </Link>
      )}
    </S.ContainerHeader>
  );
}
