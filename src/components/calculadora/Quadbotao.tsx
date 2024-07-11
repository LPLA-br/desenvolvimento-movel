import { View } from 'react-native';

import { TLinhaBotoes } from '../types';
import Botao from './Botao';
import { estiloTeclado } from '@/src/styles/teclado';

export default function QuadBotao( props: TLinhaBotoes )
{
  return (
      <View style={estiloTeclado.camada}>
        <Botao titulo={props.alpha}></Botao>
        <Botao titulo={props.beta}></Botao>
        <Botao titulo={props.gama}></Botao>
        <Botao titulo={props.delta}></Botao>
      </View>
  );
}
