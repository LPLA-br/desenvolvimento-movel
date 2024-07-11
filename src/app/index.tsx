/* Calculadora */
import { SafeAreaView } from 'react-native';

import Teclado from '../components/calculadora/Teclado';
import Display from '../components/calculadora/Display';

export default function Calculadora()
{
  return (
    <SafeAreaView>
      <Display/>
      <Teclado/>
    </SafeAreaView>
  );
}
