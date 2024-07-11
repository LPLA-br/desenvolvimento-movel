import React from "react";
import { Text, View } from "react-native";
import { TCabecalho } from "../types";

import { estiloCabecalho } from "@/src/styles/cabecalho";

export default function Cabecalho( props: TCabecalho )
{
  return (
    <View style={estiloCabecalho.area}>
      <Text > { props.tituloPrincipal } </Text>
    </View>
  );
};

