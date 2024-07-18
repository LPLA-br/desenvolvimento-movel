/* ESTILIZAÇÃO DA TELA INICIAL */
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const estiloRodape = StyleSheet.create(
{
  area:
  {
    backgroundColor: Colors.avermelhado,
    padding: 10,
    alignContent: "center",
  },
  texto:
  {
    fontFamily: 'MartianMono',
    fontSize: "100%",
    textAlign: 'center',
  }
});

export default estiloRodape;
