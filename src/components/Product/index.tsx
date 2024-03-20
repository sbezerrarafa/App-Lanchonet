import { forwardRef } from 'react';
import * as S from './styles';
import {
  TouchableOpacityProps,
  ImageProps,
  TouchableOpacity,
} from 'react-native';

type ProductDataProps = {
  title: string;
  description: string;
  thumbnail: ImageProps;
  quantity?: number;
};

type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps;
};
export const Product = forwardRef<TouchableOpacity, ProductProps>(
  ({ data, ...rest }, ref) => {
    return (
      <S.ContainerProduto ref={ref} {...rest}>
        <S.ImageProduto source={data.thumbnail} alt={data.description} />
        <S.ContainerDescProduto>
          <S.ContentTitleProduto>
            <S.TitleProduto>{data.title}</S.TitleProduto>
            {data.quantity && (
              <S.QtdProdutosCarrinho>x {data.quantity}</S.QtdProdutosCarrinho>
            )}
          </S.ContentTitleProduto>
          <S.DescProduto>{data.description}</S.DescProduto>
        </S.ContainerDescProduto>
      </S.ContainerProduto>
    );
  },
);
