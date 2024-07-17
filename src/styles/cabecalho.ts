import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const estiloCabecalho = StyleSheet.create(
{
  area:
  {
    backgroundColor: Colors.avermelhado,
    padding: 10,
  },
  texto:
  {
    fontFamily: 'MartianMono',
    fontSize: 30,
    textAlign: 'center'
  }
});

export default estiloCabecalho;

