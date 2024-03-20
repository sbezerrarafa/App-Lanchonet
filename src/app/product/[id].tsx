import { View, Image, Text } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import * as S from './styles';
import { PRODUCTS } from '@/src/utils/data/products';
import { formatCurrency } from '@/src/utils/functions/format-currency';
import { ButtonCarrinho } from '@/src/components/Button';
import { Feather } from '@expo/vector-icons';
import { LinkButton } from '@/src/components/LinkButton';
import { useCartStore } from '@/src/stores/cart-store';

export default function Product() {
  const cartStore = useCartStore();
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const product = PRODUCTS.filter((item) => item.id === id)[0];

  function handleAddToCart() {
    cartStore.add(product);
    navigation.goBack();
  }

  return (
    <S.ContainerProdutoDetail>
      <S.ImgPrincipal source={product.cover} />
      <S.ContentProdutoDetail>
        <S.TituloProduto>{product.title}</S.TituloProduto>
        <S.Preco>{formatCurrency(product.price)}</S.Preco>
        <S.DescriptionDetail>{product.description}</S.DescriptionDetail>
        {product.ingredients.map((i) => (
          <S.Ingredientes key={i}>
            {'\u2022'} {i}
          </S.Ingredientes>
        ))}
      </S.ContentProdutoDetail>
      <View>
        <ButtonCarrinho onPress={handleAddToCart}>
          <ButtonCarrinho.Icon>
            <Feather name="plus-circle" size={20} />
          </ButtonCarrinho.Icon>
          <ButtonCarrinho.Text>Adicionar ao pedido</ButtonCarrinho.Text>
        </ButtonCarrinho>
        <LinkButton href="/" title="Voltar ao cardápio" />
      </View>
    </S.ContainerProdutoDetail>
  );
}
