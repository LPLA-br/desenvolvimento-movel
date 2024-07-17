import { View, Text } from "react-native";
import { useContext } from "react";

import estiloDisplay from "@/src/styles/display";
import { CharList } from "./Contexto";

export default function Display()
{

  const [ charList, setCharlist ] = useContext( CharList );

  return (
    <View style={estiloDisplay.tela}>
      <Text> { charList } </Text>
    </View>
  );
}

