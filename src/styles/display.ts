import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const estiloDisplay = StyleSheet.create(
{
  tela:
  {
    backgroundColor: Colors.azulEsverdeadoFinado,
    color: "#ffffff",
    width: (64*4),
    margin: 10,
    border: ('2px solid '.concat(Colors.avermelhado))
  }
});

export default estiloDisplay;
