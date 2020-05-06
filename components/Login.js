import React from 'react';
import { View, StyleSheet, Image, Dimensions,KeyboardAvoidingView } from 'react-native'

import MyForm from './MyForm'

const Login = props => {

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('./images/lcologo.png')}></Image>
            </View>
            <View style={styles.myForm}>
                <MyForm></MyForm>
            </View>
        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282830',
        width: Dimensions.get('window').width
    },
    logoContainer: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    logo: {

        width: 100,
        height: 100
    },
    myForm: {
        flex: 1
    }
});


export default Login