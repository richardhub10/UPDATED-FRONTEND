import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4fb', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },

    title: {
        fontSize: 26, 
        fontWeight: '700', 
        color: '#2c3e50', 
        marginBottom: 28, 
        textAlign: 'center',
        letterSpacing: 0.6,
    },

   
    button: {
        backgroundColor: '#062049ff', 
        padding: 18,
        width: '20%', 
        color: '#ffffff',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#3054caff', 
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 4,
        marginTop: 16,
        marginBottom: 10, 
    },
    

    viewUserButton: {
        backgroundColor: '#000000ff', 
        padding: 20,
        width: '10%', 
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#000000ff', 
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 4,
        marginTop: 25, 
    },

    
    viewUserButtonText: {
        color: '#000000ff', 
        fontSize: 14,
        fontWeight: '600',
    },

    input: {
        width: '20%', 
        padding: 14, 
        marginVertical: 12, 
        borderColor: '#0e1d31ff', 
        backgroundColor: '#ffffff', 
        borderWidth: 1.5, 
        borderRadius: 12, 
        fontSize: 16,
        color: '#000000ff', 
        shadowColor: '#00000033',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 2,
    },

    list_user:{
        padding: 10,
        marginVertical: 8,
        borderColor: '#0f0f0fff',
        backgroundColor: '#96ffff71',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 16,
        color: '#000000ff',
    },

    userCard: {
        backgroundColor: '#ffffff',
        margin: 90,
        padding: 40,
        borderRadius: 60,
        shadowColor: '#000',
        shadowOffset: {
            width: 50,
            height: 30,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },

    userInfo: {
        fontSize: 15,
        marginBottom: 6,
        color: '#333',
    },

    userLabel: {
        fontWeight: 'bold',
        color: '#666',
    },

    flatListContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 8,
    }
});

export default styles;