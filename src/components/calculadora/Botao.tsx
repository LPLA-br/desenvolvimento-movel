import { Pressable, Text } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from 'react';

import { useContext } from 'react';
import { CharList } from './Contexto';

import { ids, styles } from '@/src/styles/botao';
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

  //subcomponente
  function gerarBotao( fn: Function )
  { }

  if ( props.titulo == "=" )
  {
    return (
      <Pressable style={styles.botao} dataSet={{ media: ids.botao }} onPress={avaliarStringDeExpressaoMatematica}>
        <Text selectable={false} style={styles.botaoTexto} dataSet={{ media: ids.botaoTexto }}> {props.titulo} </Text>
      </Pressable>
    );
  }
  else if ( props.titulo == "C" )
  {
    return (
      <Pressable style={styles.botao} dataSet={{ media: ids.botao }} onPress={limparDisplay}>
        <Text selectable={false} style={styles.botaoTexto} dataSet={{ media: ids.botaoTexto }}> {props.titulo} </Text>
      </Pressable>
    );
  }
  else if ( props.titulo == "+" )
  {
    return (
      <Pressable style={styles.botaoSoma} dataSet={{ media: ids.botaoSoma }} onPress={adicionarCaractereACharList}>
        <Text selectable={false} style={styles.botaoTexto} dataSet={{ media: ids.botaoTexto }}> {props.titulo} </Text>
      </Pressable>
    );
  }
  else
    return (
      <Pressable style={styles.botao} dataSet={{ media: ids.botao }} onPress={adicionarCaractereACharList}>
        <Text selectable={false} style={styles.botaoTexto} dataSet={{ media: ids.botaoTexto }}> {props.titulo} </Text>
      </Pressable>
    );
};

