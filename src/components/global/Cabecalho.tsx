import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
import { TCabecalho } from "../types";

import estiloCabecalho from "@/src/styles/cabecalho";

SplashScreen.preventAutoHideAsync();

export default function Cabecalho( props: TCabecalho )
{

  const [loaded, error] = useFonts({
      'Inter-Black': require('../../assets/fonts/MartianMono.ttf'),
    });

    React.useEffect(() =>
      {
        if (loaded || error)
        {
          SplashScreen.hideAsync();
        }
      }, [loaded, error]
    );

    if (!loaded && !error)
    {
      return null;
    }

  return (
    <View style={estiloCabecalho.area}>
      <Text style={estiloCabecalho.texto}> { props.tituloPrincipal } </Text>
    </View>
  );
};

