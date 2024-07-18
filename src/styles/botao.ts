import StyleSheet from "react-native-media-query";
import Colors from "../constants/Colors";

import { BOTAOBORDA, BOTAOMARGEM } from "./CONSTANTES";

const { ids, styles } = StyleSheet.create(
  {
    botao:
    {
      backgroundColor: Colors.avermelhado,
      borderColor: "#0f0f0f",
      borderWidth: BOTAOBORDA,
      height: 96,
      width: 96,
      '@media (max-height: 725px)':
      {
        /*correção de altura para telas deitadas.
        * adota-se a quarta parte do tamanho normal
        * */
        height: (96/4)
      },
      '@media (max-width: 1024px) and (min-width: 768px)':
      {
        height: 96,
        width: 96,
      },
      '@media (max-width: 768px) and (min-width: 376px)': 
      {
        height: 80,
        width: 80,
      },
      '@media (max-width: 376px)': 
      {
        height: 48,
        width: 48,
      },
      margin: BOTAOMARGEM,
      fontFamily: "MartianMono",
      textAlign: 'center'
    },
    botaoSoma:
    {
      backgroundColor: Colors.avermelhado,
      borderColor: "#0f0f0f",
      borderWidth: BOTAOBORDA,
      height: ((96*2)+(BOTAOMARGEM*2)+(BOTAOBORDA*2)),
      width: 96,
      '@media (max-height: 725px)':
      {
        //quarta parte da altura normal do botão
        height: (((96/4)*2)+(BOTAOMARGEM*2)+(BOTAOBORDA*2))
      },
      '@media (max-width: 1024px) and (min-width: 768px)':
      {
        height: ((96*2)+(BOTAOMARGEM*2)+(BOTAOBORDA*2)),
        width: 96,
      },
      '@media (max-width: 768px) and (min-width: 376px)': 
      {
        height: ((80*2)+BOTAOMARGEM*2),
        width: 80,
      },
      '@media (max-width: 376px)': 
      {
        height: ((48*2)+BOTAOMARGEM*2),
        width: 48,
      },
      margin: BOTAOMARGEM,
      fontFamily: "MartianMono",
      textAlign: 'center'
    },
    botaoTexto:
    {
      textAlign: 'center',
      fontSize: "4vw",
      '@media (max-height: 725px)':
      {
        fontSize: "2vh"
      },
    }
  }
);

export { ids, styles };
