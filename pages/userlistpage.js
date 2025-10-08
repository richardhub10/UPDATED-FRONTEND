import {View, Text, FlatList} from "react-native";
import axios from "axios";
import {useState, useEffect} from "react";
import styles from "../styles";

export default function UserListPage(){
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
                    </View>
                )}
            />
        </View>
    )
}