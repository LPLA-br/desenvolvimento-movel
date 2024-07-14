import { View, TextInput } from "react-native";

import { estiloDisplay } from "@/src/styles/display";

export default function Display()
{
  return (
    <View style={estiloDisplay.tela}>
      <TextInput></TextInput>
    </View>
  );
}

