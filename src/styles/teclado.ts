import { StyleSheet } from "react-native";
import { DimensionValue } from "react-native";

const larguraTriQuadTeclas: DimensionValue = "100%";

const estiloTeclado = StyleSheet.create(
{
  teclado:
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: "3px solid green",
    width: "90%",
  },
  tribotao:
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    border: "1px solid red"
  },
  quadbotao:
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    border: "1px solid orange",
    width: larguraTriQuadTeclas
  },
  segregacaoSomaEDemais:
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    border: "1px solid purple",
    width: larguraTriQuadTeclas
  },
  tribotoes:
  {
    display: 'flex',
    flexDirection: 'column',
  }
});

export default estiloTeclado;
