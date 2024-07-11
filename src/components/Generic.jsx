import { Text, View } from "react-native";
import { Button } from "react-native";
import { TextInput } from "react-native";
import React from "react";

export default function Tribotao( { a, b, c } )
{
    return (
        <>
            <Button title={a}></Button>
            <Button title={b}></Button>
            <Button title={c}></Button>
        </>
    );
}

export function InputComTexto( { texto } )
{
    return (
        <View>
            <Text> {texto} </Text>
            <TextInput></TextInput>
        </View>
    );
}
