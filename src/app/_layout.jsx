import './global.css';
import { Slot } from 'expo-router';
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';

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
