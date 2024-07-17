import { View, Pressable, Text } from 'react-native';

import QuadBotao from './Quadbotao';
import Tribotao from './Tribotao';
import estiloTeclado from '@/src/styles/teclado';
import Botao from './Botao';

export default function Teclado()
{
  //ausência de "delta" quebra o wrap para renderização condicional.
  return (
    <View style={estiloTeclado.teclado}>
      <QuadBotao alpha="C" beta="**" gama="%" delta="/"></QuadBotao>
      <QuadBotao alpha="7" beta="8" gama="9" delta="*"></QuadBotao>
      <QuadBotao alpha="4" beta="5" gama="6" delta="-"></QuadBotao>
      <View style={estiloTeclado.segregacaoSomaEDemais}>
        <View style={estiloTeclado.tribotoes}>
          <Tribotao alpha="1" beta="2" gama="3"></Tribotao>
          <Tribotao alpha="0" beta="." gama="="></Tribotao>
        </View>
        <Botao titulo={'+'}/>
      </View>
    </View>
  );
}

