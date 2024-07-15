import { View } from "react-native";
import { useState, createContext } from "react";


import Display from "./Display";
import Teclado from "./Teclado";

import { estiloCalculadora } from '@/src/styles/calculadora';

import Calc from "@/src/classes/Calc";

const CharList = createContext();

function Contexto()
{
  const [ charlist, setCharlist ] = useState<string>(''); 

  return (
      <View style={ estiloCalculadora.corpo }>
        <CharList.Provider value={ [ charlist, setCharlist ] }>
          <Display />
          <Teclado />
        </CharList.Provider>
      </View>
  );
}

export { Contexto, CharList };
