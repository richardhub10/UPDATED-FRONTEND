import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles";

export default function Homepage({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>HomePage</Text>
            <View style={styles.button}>
                <Button style={styles.buttonText} title="Register" onPress={()=>navigation.navigate("Register")}
                color={"#3054caff"}/>

            </View>

            <View>
                <Button 
    title="View User" 
    onPress={() => navigation.navigate("UserList")}
    
    color={"#3054caff"} 
/>
            </View>
        </View>

    );
}