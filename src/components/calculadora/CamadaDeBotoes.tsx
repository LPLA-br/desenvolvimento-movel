import { Button } from 'react-native';

import { LinhaBotoes } from '../types';

export default function CamadaDeBotoes( props: LinhaBotoes )
{
  if ( typeof props.delta == "string" )
    return (
        <>
          <Button>{props.alpha}</Button>
          <Button>{props.beta}</Button>
          <Button>{props.gama}</Button>
          <Button>{props.delta}</Button>
        </>
    );
  else 
    return (
        <>
          <Button>{props.alpha}</Button>
          <Button>{props.beta}</Button>
          <Button>{props.gama}</Button>
        </>
  );
}
