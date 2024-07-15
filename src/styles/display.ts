import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const estiloDisplay = StyleSheet.create(
{
  tela:
  {
    backgroundColor: "#f0f0f0",
    color: "#ffffff",
    width: 128,
    margin: 10,
    border: ('2px solid '.concat(Colors.avermelhado))
  }
});

export { estiloDisplay };
