import './global.css';
import { Slot } from 'expo-router';

import Cabecalho from '../components/global/Cabecalho';
import Rodape from '../components/global/Rodape';

export default function HomeLayout()
{
  return (
    <>
      <Cabecalho className={'cabecalho'} texto={"Desenvolvimento Móvel"} />
      <Slot />
      <Rodape className={'rodape'} />
    </>
  );
}
