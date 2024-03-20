import React, { useState } from 'react';
import { Header } from '@/src/components/Header';
import { ProductCartProps, useCartStore } from '@/src/stores/cart-store';
import { View, Text, ScrollView, Alert, Linking } from 'react-native';
import { Product } from '@/src/components/Product';
import * as S from './style';
import { formatCurrency } from '@/src/utils/functions/format-currency';
import { Input } from '@/src/components/Input';
import { ButtonCarrinho } from '@/src/components/Button';
import { Feather } from '@expo/vector-icons';
import { LinkButton } from '@/src/components/LinkButton';
import { useNavigation } from 'expo-router';

const PHONE_NUMBER = '5581988610310';

export default function Cart() {
  const navigation = useNavigation();
  const [address, setAddress] = useState('');
  const cartStore = useCartStore();
  const total = formatCurrency(
    cartStore.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    ),
  );

  function handleProductRemove(product: ProductCartProps) {
    Alert.alert('Remover', `Deseja remover ${product.title}`, [
      { text: 'Cancelar' },
      {
        text: 'Remover',
        onPress: () => cartStore.remove(product.id),
      },
    ]);
  }

  function handleOrder() {
    if (address.trim().length === 0) {
      return Alert.alert('Pedido', 'Informe os dados da entrega');
    }

    const products = cartStore.products
      .map((product) => `\n ${product.quantity} ${product.title}`)
      .join('');

    const message = `
    🍔NOVO PEDIDO 
      \n Entregar em: ${address}

      ${products}

      \n valor total : ${total}
      `;
    Linking.openURL(
      `http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`,
    );
    cartStore.clear();
    navigation.goBack();
  }

  return (
    <S.ContainerCarrinhoGeral>
      <Header title="Seu Carrinho" />
      <ScrollView>
        {cartStore.products.length > 0 ? (
          <S.ContainerProdutosCarrinho>
            {cartStore.products.map((product) => (
              <Product
                key={product.id}
                data={product}
                onPress={() => handleProductRemove(product)}
              />
            ))}
          </S.ContainerProdutosCarrinho>
        ) : (
          <S.InfoSemItensNoCarrinho>
            Seu Carrinho está vazio.
          </S.InfoSemItensNoCarrinho>
        )}
      </ScrollView>
      <S.FooterCarrinho>
        <S.ContainerTotal>
          <S.TotalInfo>Total:</S.TotalInfo>
          <S.TotalSoma> {total}</S.TotalSoma>
        </S.ContainerTotal>
        <Input
          onChangeText={setAddress}
          placeholder="informe seu endereço de entrega"
          onSubmitEditing={handleOrder}
          blurOnSubmit={true}
          returnKeyType="next"
        />
      </S.FooterCarrinho>
      <View>
        <ButtonCarrinho onPress={handleOrder}>
          <ButtonCarrinho.Text>Enviar Pedido</ButtonCarrinho.Text>
          <ButtonCarrinho.Icon>
            <Feather name="arrow-right-circle" size={20} />
          </ButtonCarrinho.Icon>
        </ButtonCarrinho>
        <LinkButton href="/" title="Voltar ao cardápio" />
      </View>
    </S.ContainerCarrinhoGeral>
  );
}
