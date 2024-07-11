/* Calculadora */
import { View, Button, Image } from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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
