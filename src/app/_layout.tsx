import './global.css';
import { Slot } from 'expo-router';
import { ImageBackground } from "react-native";

import Cabecalho from '../components/global/Cabecalho';
import Rodape from '../components/global/Rodape';

import estiloMain from '@/src/styles/index';

const images = 
[
  {uri: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Pia24622-curiosity_1-1041.jpg"},
  {uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Arsia_Mons_Cloud_-_Mars_Express_-_Flickr_-_jccwrt.png/800px-Arsia_Mons_Cloud_-_Mars_Express_-_Flickr_-_jccwrt.png"},
  {uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Dust_storm_co.tif/lossy-page1-1920px-Dust_storm_co.tif.jpg"},
  {uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/North_Pole_-_Mars_-_Flickr_-_jccwrt.png/1920px-North_Pole_-_Mars_-_Flickr_-_jccwrt.png"},
  {uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Clouds_in_Solis_Planum_-_Mars_Express_%2827216164023%29.png/1920px-Clouds_in_Solis_Planum_-_Mars_Express_%2827216164023%29.png"},
  {uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Clouds_Over_Tempe_Terra_%2834076340151%29.png/1920px-Clouds_Over_Tempe_Terra_%2834076340151%29.png"},
  {uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Clouds_over_Charitum_Montes_-_2004-04-29_%2850353782473%29.png/1920px-Clouds_over_Charitum_Montes_-_2004-04-29_%2850353782473%29.png"}
];

export default function HomeLayout()
{

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomIntInclusive(min: number, max: number): number
  {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }


  return (
      <ImageBackground source={images[getRandomIntInclusive(0,(images.length-1))]} style={estiloMain.imagem}>
        <div className='layout'>
          <Cabecalho tituloPrincipal={"Calculadora Marciana"} />
          <Slot />
          <Rodape/>
        </div>
      </ImageBackground>
  );
}
