import { FormControl, useTheme } from "native-base";
import { useState } from "react";
import { Dimensions, KeyboardTypeOptions, Pressable, Text, TextInput, TextStyle, View, ViewStyle } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Feather from 'react-native-vector-icons/Feather';
import { BLACK_COLOR, LIGHT_GRAY, TEXT_BLACK, WHITE } from '../utils/colors';


type TextInputParams = {
    value: string,
    onchangeValue: (e: string) => void,
    requiredError?: boolean,
    label?: string,
    placeholder: string,
    styleContainer?: ViewStyle,
    styleInputContainer?: ViewStyle,
    styleInput?: TextStyle,
    styleLabel?: TextStyle,
    isTextArea?: boolean,
    type?: string; // Change the type to string
}


type TextInputPasswordParams = {
    value: string,
    onchangeValue: (e:string) => void,
    requiredError?: boolean,
    label?: string,
    placeholder: string,
    styleContainer?: ViewStyle,
    styleInputContainer?: ViewStyle,
    styleInput?: TextStyle,
    styleLabel?: TextStyle,
    isTextArea?: string,
}


export const TextInputComp = ({ value, onchangeValue, requiredError = false, label, placeholder = "", styleContainer, 
    styleInputContainer, styleInput, styleLabel, isTextArea, type="default" }: TextInputParams) => {
    const theme = useTheme();

    return (
        <FormControl style={{ ...styleContainer }}>
            
            <FormControl.Label style={{...styleLabel,}}>
            <Text style={{fontSize:15, fontWeight:'300'}}>
                    {label}
                </Text>
            </FormControl.Label>
            
            <View style={{ ...styleInputContainer }}>
                {isTextArea ? (
                    <TextInput
                        keyboardType={type as KeyboardTypeOptions}
                        value={value}
                        onChangeText={onchangeValue}
                        placeholder={placeholder}
                        style={{minHeight:100, ...styleInput }} // Adjust height as needed
                        multiline={true}
                    />
                ) : (
                    <TextInput
                        keyboardType={type as KeyboardTypeOptions}
                        value={value}
                        onChangeText={onchangeValue}
                        placeholder={placeholder}
                        style={{ ...styleInput}}
                    />
                )}
            </View>

           
        </FormControl>
    );
};

export const TextInputPassword = ({
    value, 
    onchangeValue, 
    requiredError=false, 
    label="", 
    placeholder="", 
    styleContainer,
    styleInputContainer, 
    styleLabel,
    styleInput}:TextInputPasswordParams) => {

        const theme = useTheme();
        const [isShow, setisShow] = useState(true)

        return(
            <FormControl style={{...styleContainer}}>
                <FormControl.Label style={{...styleLabel,}}>
                <Text style={{fontSize:15, fontWeight:'300'}}>
                    {label}
                </Text>
            </FormControl.Label>
                <View style={{...styleInputContainer}}>
                    <TextInput value={value} onChangeText={onchangeValue} placeholder={placeholder} secureTextEntry={isShow} style={{...styleInput}}/>

                    <Pressable onPress={() => setisShow(!isShow)} style={{marginLeft: 20, justifyContent: "center"}}>
                        {isShow ? (<Feather name="eye-off" size={24} color={BLACK_COLOR} />) : (<Feather name="eye" size={24} color={BLACK_COLOR} />)}
                    </Pressable>
                </View>
                
            </FormControl>
        )
}

export const PhoneInputComp = ({styleContainer, label,phoneInput, placeHolder, phone, setPhone, setFormattedValue, width}:any) => {
    return(
        
        <FormControl style={{...styleContainer}}>
            <FormControl.Label>{label}</FormControl.Label>
            <PhoneInput
                
                ref={phoneInput}
                defaultValue={phone}
                defaultCode="TR"
                placeholder={placeHolder}
                layout="second"
                onChangeText={(text:String) => {
                    setPhone(text);
                }}
                onChangeFormattedText={(text:String) => {
                    setFormattedValue(text);
                }}
                containerStyle={{
                    flexDirection: "row",
                    backgroundColor: WHITE,
                    width: Dimensions.get('screen').width*0.89,
                    alignSelf: "center",
                    paddingLeft:10,
                    borderWidth:2, 
                    borderRadius:10, 
                    borderColor:LIGHT_GRAY
                }}

                textInputStyle={{
                    color: TEXT_BLACK, 
                    fontSize: 16 
                }}
                flagButtonStyle={{
                    borderWidth:0,
                    width:"15%"
                }}
                textContainerStyle={{
                    backgroundColor:WHITE,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 8,

                }}
            />
            </FormControl>
    )
}