import React from 'react';
import { View, Text } from "react-native";

import { estiloRodape } from '@/src/styles/rodape';

export default function Rodape()
{
  return (
    <View style={estiloRodape.area}>
      <Text> { "LPLA-br 2024" } </Text>
    </View>
  );
};
