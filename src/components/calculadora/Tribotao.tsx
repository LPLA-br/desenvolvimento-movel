import { View } from 'react-native';

import { TLinhaBotoes } from '../types';
import Botao from './Botao';
import estiloTeclado from '@/src/styles/teclado';

export default function Tribotao( props: TLinhaBotoes )
{
  return (
    <View style={estiloTeclado.tribotao}>
      <Botao titulo={props.alpha}></Botao>
      <Botao titulo={props.beta}></Botao>
      <Botao titulo={props.gama}></Botao>
    </View>
  );
}

