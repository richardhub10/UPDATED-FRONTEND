import {View, Text, Button, TextInput} from "react-native";
import {useState} from "react";
import axios from "axios";
import styles from "../styles";

export default function EditUserPage({route, navigation}){
    const { user } = route.params;

    const [FirstName, setFirstName] = useState(user.first_name);
    const [LastName, setLastName] = useState(user.last_name);
    const [Email, setEmail] = useState(user.email);
    const [Gender, setUserGender] = useState(user.gender);
    const [Password, setPassword] = useState(user.password);

    const handleUpdate = () => {
        if (!FirstName || !LastName || !Email || !Gender || !Password) {
            window.alert("Error", "Please fill up all required fields");
            return;
        }
        axios
            .put(`http://127.0.0.1:8000/registration/api/users/${user.id}/`, {
                first_name: FirstName,
                last_name: LastName,
                email: Email,
                gender: Gender,
                password: Password,
            })
            .then(() => {
                window.alert("Success", "User updated successfully");
                navigation.goBack();
            })
            .catch((error) => {
                console.error(error);
                window.alert("Error", "Failed to update user");
            });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit User</Text>
            <TextInput value={FirstName} onChangeText={setFirstName} placeholder="First Name" style={styles.input}></TextInput>
            <TextInput value={LastName} onChangeText={setLastName} placeholder="Last Name" style={styles.input}></TextInput>
            <TextInput value={Email} onChangeText={setEmail} placeholder="Email" style={styles.input}></TextInput>
            <TextInput value={Gender} onChangeText={setUserGender} placeholder="Gender" style={styles.input}></TextInput>
            <TextInput value={Password} onChangeText={setPassword} placeholder="Password" style={styles.input}></TextInput>
            <View>
                <Button title="Update Record" onPress={handleUpdate}></Button>
            </View>
        </View>
    );
}