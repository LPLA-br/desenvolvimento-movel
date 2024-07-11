import { View, Button, Image } from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';
import Tribotao from '../components/Generic';
import { InputComTexto } from '../components/Generic';
import { Link } from 'expo-router';

export default function Page()
{
  return (
    <SafeAreaProvider style={styles.AreaSegura}>
      <View style={styles.ViewPrincipal}>
        <View>
          <ScrollView>
            <Image source={require("../assets/mars.jpg")}>
            </Image>
          </ScrollView>
          <Button title='none' style={styles.Botao} />
        </View>
      </View>
      <View>
        <Link href="/calculadora"> calculadora </Link>
        <Tribotao a={"alpha"} b={"beta"} c={"gama"}></Tribotao>
        <InputComTexto style={styles.Entrada} texto={"Teu nome SIGMA:"}></InputComTexto>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create(
  {
    "AreaSegura":
    {
      "backgroundColor": '#00ff00',
      "height": "900em"
    },
    "ViewPrincipal":
    {
      "paddingBotton": "2em",
      "paddingTop": "2em"
    },
    "Entrada":
    {
      "backgroundColor": '#ffffff',
    }
  }
);
