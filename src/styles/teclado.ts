import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const margem: number = 2;

const estiloTeclado = StyleSheet.create(
{
  camada:
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  botao:
  {
    backgroundColor: Colors.azulEsverdeadoFinado,
    borderColor: "#0f0f0f",
    borderWidth: 1,
    height: 32,
    width: 32,
    margin: margem,
    fontFamily: "MartianMono",
    textAlign: 'center'
  },
  botaoSoma:
  {
    backgroundColor: Colors.azulEsverdeadoFinado,
    borderColor: "#0f0f0f",
    borderWidth: 1,
    height: '95%',
    width: 32,
    margin: margem,
    fontFamily: "MartianMono",
    textAlign: 'center'
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
