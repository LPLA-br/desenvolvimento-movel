import { View, Text } from "react-native";
import { useContext } from "react";

import { ids, styles } from "../../styles/display.ts";
import { CharList } from "./Contexto";

/* SubComponente de Contexto responsável
 * por apresentar as informações manipuladas pelos
 * componentes Botao.
 * */
export default function Display()
{

  const [ charList, setCharlist ] = useContext( CharList );

  return (
    <View style={styles.tela} dataSet={{ media: ids.tela }}>
      <Text style={styles.textoDinamico} dataSet={{ media: ids.textoDinamico }}> { charList } </Text>
    </View>
  );
}

