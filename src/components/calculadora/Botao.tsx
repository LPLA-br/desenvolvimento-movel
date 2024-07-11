import { Pressable, Text } from 'react-native';

import { estiloTeclado } from '@/src/styles/teclado';
import { TBotao } from '../types';

export default function Botao( props: TBotao )
{

  return (
    <Pressable style={estiloTeclado.botao}>
      <Text> {props.titulo} </Text>
    </Pressable>
  );
};

