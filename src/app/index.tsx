import { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, SectionList } from 'react-native';
import * as S from './styles';
import { Header } from '../components/Header';
import { CategoryButtons } from '../components/CategoryButtons';
import { CATEGORIES, MENU, ProductProps } from '../utils/data/products';
import { Product } from '../components/Product';
import { Link } from 'expo-router';
import { useCartStore } from '../stores/cart-store';

export default function Home() {
  const cartStore = useCartStore();
  const [category, setCategory] = useState(CATEGORIES[0]);

  const sectionListRef = useRef<SectionList<ProductProps>>(null);
  const CartQuantityItem = cartStore.products.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory);
    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === selectedCategory,
    );
    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      });
    }
  }
  return (
    <S.Container>
      <Header title="Faça seu pedido" cartQuantityItems={CartQuantityItem} />
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButtons
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 12,
          paddingHorizontal: 20,
          marginTop: 15,
          paddingBottom: 30,
        }}
      />
      <SectionList
        ref={sectionListRef}
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 80,
        }}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <Product data={item} />
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <S.TitleSection>{title}</S.TitleSection>
        )}
      />
    </S.Container>
  );
}
