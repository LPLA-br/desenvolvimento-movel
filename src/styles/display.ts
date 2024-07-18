import StyleSheet from "react-native-media-query";
import Colors from "../constants/Colors";

import { BOTAOBORDA, BOTAOMARGEM } from "./CONSTANTES";

const { ids, styles } = StyleSheet.create(
{
  tela:
  {
    backgroundColor: Colors.azulEsverdeadoFinado,
    color: Colors.marrom,
    width: ((96*4)+(BOTAOMARGEM*6)+(BOTAOBORDA*6)),
    '@media (max-width: 1024px) and (min-width: 768px)':
    {
      width: ((96*4)+(BOTAOMARGEM*6)+(BOTAOBORDA*6)),
      height: 48
    },
    '@media (max-width: 768px) and (min-width: 376px)': 
    {
      width: ((80*4)+(BOTAOMARGEM*6)+(BOTAOBORDA*6)),
      height: 48+16
    },
    '@media (max-width: 376px)': 
    {
      width: ((48*4)+(BOTAOMARGEM*6)+(BOTAOBORDA*6)),
      height: 48
    },
    border: ('2px solid '.concat(Colors.avermelhado))
  },
  textoDinamico:
  {
    fontSize: '4vh'
  }
});

export { ids, styles };
