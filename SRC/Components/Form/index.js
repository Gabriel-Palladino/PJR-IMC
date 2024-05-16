import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha seu peso e sua altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("IMC")

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
        if (weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é =  ")
            setTextButton("Calcular Novamente")
            return
        }

        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha Peso e Altura")
    }


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

                <Button
                title={textButton}
                />
                
            </View>
        </View>
        );
}
