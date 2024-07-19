import { Pressable, Text } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from 'react';

import { useContext } from 'react';
import { CharList } from './Contexto';

import { ids, styles } from '@/src/styles/botao';
import estiloReservado from '@/src/styles/segregados'; 

import { TBotao } from '../types';

SplashScreen.preventAutoHideAsync();

/** SubComponente de Botao para emprego nas subestruturas
 *  do Teclado: Quadbotao e Tribotao. Atua como entrada
 *  para construção de expressões matemáticas avaliáveis
 *  por eval()
* */
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

  /** Subcomponente que recebe: funcao de ação do botao,
  * presionavel e texto contendo styles e ids. Definição de tipos
  * não existente.
  * @param { any } fn - funcionalidade aplicada ao botao.
  * @param { any } styles - estilos.
  * @param { any } ids - ids dos estilos.
  * @param { boolean | undefined } soma - é o botao de soma.
  * @param { boolean | undefined } segregado - é um botão segregado.
  * */
  function gerarBotao( fn: any, styles: any, ids: any, soma?: boolean, segregado?: boolean )
  {

    if ( soma == true ) return (
      <Pressable style={ [styles.botaoSoma, estiloReservado.botaoSegregado] } dataSet={{ media: ids.botaoSoma }} onPress={fn}>
        <Text selectable={false} style={styles.botaoTexto} dataSet={{ media: ids.botaoTexto }}> {props.titulo} </Text>
      </Pressable>
    );
    else if ( segregado == true ) return (
      <Pressable style={[styles.botao, estiloReservado.botaoSegregado]} dataSet={{ media: ids.botao }} onPress={fn}>
        <Text selectable={false} style={styles.botaoTexto} dataSet={{ media: ids.botaoTexto }}> {props.titulo} </Text>
      </Pressable>
    );

    return (
      <Pressable style={styles.botao} dataSet={{ media: ids.botao }} onPress={fn}>
        <Text selectable={false} style={styles.botaoTexto} dataSet={{ media: ids.botaoTexto }}> {props.titulo} </Text>
      </Pressable>
    );
  }

  switch ( props.titulo )
  {
    case "C":
      return gerarBotao( limparDisplay, styles, ids, false, true );
    case "+":
      return gerarBotao( adicionarCaractereACharList, styles, ids, true );
    case "=":
      return gerarBotao( avaliarStringDeExpressaoMatematica, styles, ids );
    case "**":
    case "*":
    case "+":
    case "-":
    case "%":
    case "/":
      return gerarBotao( adicionarCaractereACharList, styles, ids, false, true );
    default:
      return gerarBotao( adicionarCaractereACharList, styles, ids );
  }
};

