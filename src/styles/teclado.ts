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
    width: "90%",
  },
  tribotao:
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  quadbotao:
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    width: larguraTriQuadTeclas
  },
  segregacaoSomaEDemais:
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    width: larguraTriQuadTeclas
  },
  tribotoes:
  {
    display: 'flex',
    flexDirection: 'column',
  }
});

export default estiloTeclado;
