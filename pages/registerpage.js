
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles";
import {TextInput} from 'react-native-web';

export default function RegisterPage({navigation}){
const[formData, setFormData]=useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    date_registration:"",
    gender:"",
});
const handleChange =(field, value) => {
    setFormData({...formData, [field]: value});
};
    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Registration</Text>
       
            <TextInput
                style={styles.input} 
                placeholder="First name" 
                value={formData.first_name} 
                onChangeText={(text) => handleChange("first_name", text)}
            />
            <TextInput 
                style={styles.input}
                placeholder="Last name" 
                value={formData.last_name} 
                onChangeText={(text) => handleChange("last_name", text)}
            />
            <TextInput
                style={styles.input} 
                placeholder="Email" 
                value={formData.email} 
                onChangeText={(text) => handleChange("email", text)}
            />
            <TextInput 
                style={styles.input}
                placeholder="Password" 
                secureTextEntry
                value={formData.password} 
                onChangeText={(text) => handleChange("password", text)}
            />
            <TextInput 
                style={styles.input}
                placeholder="Gender" 
                value={formData.gender} 
                onChangeText={(text) => handleChange("gender", text)}
            />

            <View>
                <Button title="Review and Submit" 
                onPress={() => navigation.navigate("Review", {formData})}></Button>
            </View>

         </View>
    
    );
}