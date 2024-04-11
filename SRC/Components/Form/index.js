import React from "react";
import { View, Text, TextInput } from "react-native";

export default function Form(){
    return(
        <View>
            <View>

                <Text>Altura</Text>
                <TextInput
                placeholder=" Ex. 1.70"
                keyboardType="Numeric"
                />

                <Text>Peso</Text>
                <TextInput
                placeholder=" Ex. 70.7"
                keyboardType="Numeric"
                />
                
            </View>
        </View>
        );
}
