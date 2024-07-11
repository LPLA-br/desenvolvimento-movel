import { View, Button, Image } from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';

/* Retorna componente de quatro botões */
export default function QuadButton( props )
{
    return (
        <>
            <Button>{props.alpha}</Button>
            <Button>{props.beta}</Button>
            <Button>{props.gama}</Button>
            <Button>{props.delta}</Button>
        </>
    );
}
