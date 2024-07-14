/* Calculadora */
import { View } from "react-native";

import Teclado from '../components/calculadora/Teclado';
import Display from '../components/calculadora/Display';

import { estiloCalculadora } from '@/src/styles/calculadora';

export default function Calculadora()
{
  return (
        <View style={ estiloCalculadora.corpo }>
            <Display/>
            <Teclado/>
        </View>
  );
}
