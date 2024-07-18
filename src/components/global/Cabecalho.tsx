import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
import { TCabecalho } from "../types";

import { ids, styles } from "../../styles/cabecalho";

SplashScreen.preventAutoHideAsync();

/** Componente Cabecalho que contém o título do projeto
* em fundo monocor.*/
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
    <View style={styles.area} dataSet={{media: ids.area}}>
      <Text style={styles.texto} dataSet={{media: ids.texto}}> { props.tituloPrincipal } </Text>
    </View>
  );
};

