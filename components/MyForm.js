import React from 'react';
import {
    View,
    StyleSheet
    , Text,
    TouchableOpacity,
    TextInput
} from 'react-native'

const MyForm = props => {

    return (
        <View style={styles.container}>
            <TextInput placeholder="Username" style={styles.input}></TextInput>
            <TextInput placeholder="Password" style={styles.input}></TextInput>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.8)',
        paddingLeft: 10,
        marginBottom: 15
    },

    buttonContainer: {
        backgroundColor: '#27ae60',
        paddingVertical:15

    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight:'bold'
    }
});

export default MyForm;