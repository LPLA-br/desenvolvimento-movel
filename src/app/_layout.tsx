import './global.css';
import { Slot } from 'expo-router';
import { View } from 'react-native';

import Cabecalho from '../components/global/Cabecalho';
import Rodape from '../components/global/Rodape';

export default function HomeLayout()
{
  return (
    <View>
      <Cabecalho tituloPrincipal={"Calculadora Marciana"} />
      <Slot />
      <Rodape/>
    </View>
  );
}
