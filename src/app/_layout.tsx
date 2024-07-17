import './global.css';
import { Slot } from 'expo-router';
import { ImageBackground } from "react-native";

import Cabecalho from '../components/global/Cabecalho';
import Rodape from '../components/global/Rodape';

import estiloMain from '@/src/styles/index';

const image = {uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Arsia_Mons_Cloud_-_Mars_Express_-_Flickr_-_jccwrt.png/800px-Arsia_Mons_Cloud_-_Mars_Express_-_Flickr_-_jccwrt.png"};

export default function HomeLayout()
{
  return (
      <ImageBackground source={image} style={estiloMain.imagem}>
        <div className='layout'>
          <Cabecalho tituloPrincipal={"Calculadora Marciana"} />
          <Slot />
          <Rodape/>
        </div>
      </ImageBackground>
  );
}
