import { View, Pressable, Text } from 'react-native';

import QuadBotao from './Quadbotao';
import Tribotao from './Tribotao';
import { estiloTeclado } from '@/src/styles/teclado';
import { estiloCalculadora } from '@/src/styles/calculadora';

export default function Teclado()
{
  //ausência de delta quebra o wrap
  return (
    <View style={estiloCalculadora.corpo}>
      <QuadBotao alpha="off" beta="√" gama="%" delta="/"></QuadBotao>
      <QuadBotao alpha="7" beta="8" gama="9" delta="X"></QuadBotao>
      <QuadBotao alpha="4" beta="5" gama="6" delta="-"></QuadBotao>
      <View style={estiloTeclado.descontinuidade} >
        <View style={estiloTeclado.tribotoesDaDescontinuidade}>
          <Tribotao alpha="1" beta="2" gama="3"></Tribotao>
          <Tribotao alpha="0" beta="." gama="="></Tribotao>
        </View>
        <Pressable style={estiloTeclado.botaoSoma}>
          <Text> + </Text>
        </Pressable>
      </View>
    </View>
  );
}

