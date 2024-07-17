import { View } from "react-native";
import { useState, createContext } from "react";


import Display from "./Display";
import Teclado from "./Teclado";

import estiloCalculadora from "@/src/styles/calculadora";

const CharList = createContext();

function Contexto()
{
  const [ charlist, setCharlist ] = useState<string>(''); 

  return (
      <View style={ estiloCalculadora.areaCentral }>
        <CharList.Provider value={ [ charlist, setCharlist ] }>
          <Display />
          <Teclado />
        </CharList.Provider>
      </View>
  );
}

export { Contexto, CharList };
