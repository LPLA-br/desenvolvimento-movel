import StyleSheet from "react-native-media-query";
import Colors from "../constants/Colors";

const margem: number = 4;

const { ids, styles } = StyleSheet.create(
  {
    botao:
    {
      backgroundColor: Colors.avermelhado,
      borderColor: "#0f0f0f",
      borderWidth: 1,
      height: 96,
      width: 96,
      '@media (max-width: 1024px) and (min-width: 768px)': {
        height: 96,
        width: 96,
      },
      '@media (max-width: 768px) and (min-width: 376px)': {
        height: 80,
        width: 80,
      },
      '@media (max-width: 376px)': {
        height: 48,
        width: 48,
      },
      margin: margem,
      fontFamily: "MartianMono",
      textAlign: 'center'
    },
    botaoSoma:
    {
      backgroundColor: Colors.avermelhado,
      borderColor: "#0f0f0f",
      borderWidth: 1,
      height: ((96+margem)*2),
      width: "100%",
      '@media (max-width: 1024px) and (min-width: 768px)': {
        height: ((96+margem)*2),
        width: 96,
      },
      '@media (max-width: 768px) and (min-width: 376px)': {
        height: ((80+margem)*2),
        width: 80,
      },
      '@media (max-width: 376px)': {
        height: ((48+margem)*2),
        width: 48,
      },
      margin: margem,
      fontFamily: "MartianMono",
      textAlign: 'center'
    },
    botaoTexto:
    {
      textAlign: 'center'
    }
  }
);

export { ids, styles };
