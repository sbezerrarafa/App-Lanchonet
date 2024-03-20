import { SafeAreaView } from 'react-native';
import { Slot } from 'expo-router';
import * as S from './styles';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { Loading } from '../components/Loading';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  if (!fontsLoaded) {
    <Loading />;
  }
  return (
    <S.ContainerGeral>
      <Slot />
    </S.ContainerGeral>
  );
}
