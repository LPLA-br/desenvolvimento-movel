import { StyleSheet } from "react-native";
import { estiloCalculadora } from "./calculadora";

const estiloTeclado = StyleSheet.create(
{
  camada:
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    //alignContent: 'justifyContent',
    flexWrap: 'nowrap',
  },
  botao:
  {
    backgroundColor: '#b5bf9f',
    borderColor: "#0f0f0f",
    borderWidth: 1,
    height: 32,
    width: 32
  },
  botaoSoma:
  {
    backgroundColor: '#b5bf9f',
    borderColor: "#0f0f0f",
    borderWidth: 1,
    height: 64,
    width: 32
  },
  descontinuidade:
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'nowrap'
  },
  tribotoesDaDescontinuidade:
  {
    display: 'flex',
    flexDirection: 'column',
  }
});

export { estiloTeclado };
