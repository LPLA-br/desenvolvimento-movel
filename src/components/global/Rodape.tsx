import React from 'react';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View, Text } from "react-native";

import estiloRodape from '@/src/styles/rodape';

SplashScreen.preventAutoHideAsync();

export default function Rodape()
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
    <View style={estiloRodape.area}>
      <Text style={estiloRodape.texto}> { "LPLA-br 2024" } </Text>
    </View>
  );
};
