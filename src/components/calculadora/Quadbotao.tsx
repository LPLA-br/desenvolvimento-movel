import { View } from 'react-native';

import { TLinhaBotoes } from '../types';
import Botao from './Botao';
import estiloTeclado from '@/src/styles/teclado';

/** Subcomponente de Teclado agregador de Botao
 * para quatro instâncias em linha.
* */
export default function QuadBotao( props: TLinhaBotoes )
{
  return (
      <View style={estiloTeclado.quadbotao}>
        <Botao titulo={props.alpha}></Botao>
        <Botao titulo={props.beta}></Botao>
        <Botao titulo={props.gama}></Botao>
        <Botao titulo={props.delta}></Botao>
      </View>
  );
}
