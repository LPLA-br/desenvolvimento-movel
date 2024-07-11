import { View, Button } from 'react-native';

import CamadaDeBotoes from './CamadaDeBotoes';

export default function Teclado()
{
  return (
    <View>
      <CamadaDeBotoes alpha="off" beta="√" gama="%" delta="/"></CamadaDeBotoes>
      <CamadaDeBotoes alpha="7" beta="8" gama="9" delta="X"></CamadaDeBotoes>
      <CamadaDeBotoes alpha="4" beta="5" gama="6" delta="-"></CamadaDeBotoes>
      <View>
        <View>
          <CamadaDeBotoes alpha="1" beta="2" gama="3"></CamadaDeBotoes>
          <CamadaDeBotoes alpha="0" beta="." gama="="></CamadaDeBotoes>
        </View>
        <Button>+</Button>
      </View>
    </View>
  );
}

