import { View, Button, Image } from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';

export default function Teclado()
{
  return (
    <View>
        <View style={styles.teclado}>
            <Button>{'%'}</Button>
            <Button>{'CE'}</Button>
            <Button>{"<"}</Button>
            <Button>{'+'}</Button>
        </View>
        <View>
            <Button>{"7"}</Button>
            <Button>{"8"}</Button>
            <Button>{"9"}</Button>
            <Button>{'-'}</Button>
        </View>
        <View>
            <Button>{"4"}</Button>
            <Button>{"5"}</Button>
            <Button>{"6"}</Button>
            <Button>{'x'}</Button>
        </View>
        <View>
            <Button>{"1"}</Button>
            <Button>{"2"}</Button>
            <Button>{'3'}</Button>
            <Button>{'/'}</Button>
        </View>
        <View>
            <Button>{","}</Button>
            <Button>{"0"}</Button>
            <Button>{"="}</Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    teclado:
    {
        backgroundColor: '#a0a0a0'
    }
  }
);
