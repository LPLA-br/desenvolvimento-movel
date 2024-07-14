import './global.css';
import { Slot } from 'expo-router';
import { ImageBackground } from "react-native";

import Cabecalho from '../components/global/Cabecalho';
import Rodape from '../components/global/Rodape';
import { estiloCalculadora } from '@/src/styles/calculadora';

const image = {uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/800px-OSIRIS_Mars_true_color.jpg"};

export default function HomeLayout()
{
  return (
      <ImageBackground source={image} style={estiloCalculadora.imagem}>
        <div className='layout'>
          <Cabecalho tituloPrincipal={"Calculadora Marciana"} />
          <Slot />
          <Rodape/>
        </div>
      </ImageBackground>
  );
}
