import {View, Text, FlatList, Button, Alert} from "react-native";
import axios from "axios";
import {useState, useEffect} from "react";
import styles from "../styles";

export default function UserListPage({navigation}){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/registration/api/users/")
        .then((res) => {
            setUsers(res.data);
        })
        .catch((err) =>{
            console.error(err);
        })
    },[]
    );

    const handleEdit = (user) => {
        navigation.navigate("EditUser", {user});
    };

    const handleDelete = (id) => {
        // Alert.alert(
        //     "Confirm Deletion",
        //     "Are you sure you want to delete this user?",
        //     (
        //         { text: "Cancel", style: "cancel" },
        //         {
        //             text: "Delete",
        //             style: "destructive",
        //             onPress: () => {
        //                 axios.delete(`http://127.0.0.1:8000/registration/api/users/${id}/`)
        //                 .then(() =>{
        //                     Alert.alert("Success", "User deleted successfully");
        //                 })
        //                 .catch((err)=>{
        //                     Alert.alert("Error", "Failed to delete user");
        //                 });
        //             },
        //         }
        //     )
        // );
        axios.delete(`http://127.0.0.1:8000/registration/api/users/${id}/`)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registered Users</Text>
            <FlatList 
                data={users} 
                style={styles.flatListContainer}
                keyExtractor={(item) => item.id.toString()} 
                renderItem={({item}) => (
                    <View style={styles.userCard}>
                        <Text style={styles.userInfo}>
                            <Text style={styles.userLabel}>First Name: </Text>
                            {item.first_name}
                        </Text>
                        <Text style={styles.userInfo}>
                            <Text style={styles.userLabel}>Last Name: </Text>
                            {item.last_name}
                        </Text>
                        <Text style={styles.userInfo}>
                            <Text style={styles.userLabel}>Email: </Text>
                            {item.email}
                        </Text>
                        <View>
                            <Button title="Edit" color="#088cf8ff"
                            onPress={() => handleEdit(item)}></Button>
                            <Button title="Delete" onPress={() => handleDelete(item.id)}
                            color="red"></Button>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}