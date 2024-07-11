/* Calculadora */
import { View, Button, Image } from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';
import Teclado from '../../components/Teclado';

export default function Calculadora()
{
  return (
    <SafeAreaView>
        <Teclado/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {}
);
