import { Pressable, Text } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from 'react';

import { useContext } from 'react';
import { CharList } from './Contexto';

import { estiloTeclado } from '@/src/styles/teclado';
import { TBotao } from '../types';

SplashScreen.preventAutoHideAsync();

export default function Botao( props: TBotao )
{

  const [ charList, setCharlist ] = useContext( CharList );

  const [loaded, error] = useFonts({
      'Inter-Black': require('../../assets/fonts/MartianMono.ttf'),
    });

  useEffect(() =>
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

  const adicionarCaractereACharList = () =>
  {
    setCharlist( charList.concat( props.titulo ) );
  }

  const avaliarStringDeExpressaoMatematica = () =>
  {
    setCharlist( eval( charList ) );
  }

  const limparDisplay = () =>
  {
    setCharlist('');
  }

  if ( props.titulo == "=" )
  {
    return (
      <Pressable style={estiloTeclado.botao} onPress={avaliarStringDeExpressaoMatematica}>
        <Text> {props.titulo} </Text>
      </Pressable>
    );
  }
  else if ( props.titulo == "del" )
  {
    return (
      <Pressable style={estiloTeclado.botao} onPress={limparDisplay}>
        <Text> {props.titulo} </Text>
      </Pressable>
    );
  }
  else if ( props.titulo == "+" )
  {
    return (
      <Pressable style={estiloTeclado.botaoSoma} onPress={adicionarCaractereACharList}>
        <Text> {props.titulo} </Text>
      </Pressable>
    );
  }
  else
    return (
      <Pressable style={estiloTeclado.botao} onPress={adicionarCaractereACharList}>
        <Text> {props.titulo} </Text>
      </Pressable>
    );
};

