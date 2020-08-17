import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, CheckBox, Button } from 'react-native-elements';
import { TouchableOpacity} from 'react-native-gesture-handler';
import firebase from "../firebase/firebase";
import "firebase/firestore"

export default function LoginScreen({navigation}) {
    
    const [password, setPassword] = useState('')
    const [correo, setCorreo] = useState('')
    const [check, setCheck] = useState(false)
    const [setOne] = useState();
    
    const oneDocument = () => {

        firebase.firestore().collection('users').where('email', '==', correo).get()
            .then((snapshot) => {
                if(snapshot.size==0){
                    Alert.alert('No valido')
                }
                snapshot.forEach((doc) => {
                   let item=doc.data()
                   if(item.password==password){
                    console.log({item});
                    navigation.navigate('Inicio')
                   }else{
                    console.log("error");
                   }
                })
            }
            )
            .catch((err) => {
                console.log('Error getting documents', err);
            });
        firebase.firestore().collection('users').doc('1').get()
            .then(snapshot => {
                setOne(snapshot.data())
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={{ height: 20.0 }} />
                <Input
                    title='Correo Electrónico'
                    placeholder='Correo'
                    onChangeText={changeCorreo => setCorreo(changeCorreo)}
                    rightIcon={
                        <Icon
                            name='envelope-o'
                            size={25}
                            color='#3B83BD'
                        />
                    }
                />
                <Input
                    title='Contraseña'
                    placeholder='Contraseña'
                    secureTextEntry={true}
                    onChangeText={changePass => setPassword(changePass)}
                    rightIcon={
                        <Icon
                            name='key'
                            size={25}
                            color='#3B83BD'
                        />
                    }
                />

                <CheckBox
                    center={false}
                    title='Recuerdame'
                    iconRight={false}
                    onIconPress={() => {
                        setCheck(!check);
                    }}
                    checked={check}
                />

                <View style={{ height: 30.0 }}>
                </View>
                <View style={styles.boton}>
                    <Text style={styles.forgot}>Olvidaste tu contraseña? </Text>

                    <View style={{ height: 10.0 }} />
                    <Button
                        title="Inicia Sesión"
                        onPress={oneDocument}
                        buttonStyle={{
                            width: 200.0,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    />
                    <View style={{ height: 10.0 }} />
                    <Text >------------ OR ------------ </Text>
                    <View style={{ height: 10.0 }} />
                    <Button
                        title="Inicia con Google"
                        backgroundColor={'red'}
                        buttonStyle={{
                            width: 200.0,
                            backgroundColor: "red"
                        }}
                    />
                    <View style={{ height: 20.0 }} />
                    <Text >No tienes una cuenta?</Text>

                    <View style={{ height: 10.0 }} />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Registro')}

                    >

                        <Text style={styles.forgot} >Registrate</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>

    );
}

LoginScreen.navigationOptions = {
    //poner un icono solo en drawer
    drawerIcon: ({ tintColor }) => {
        return <MaterialIcons name='account-circle' size={25} color={tintColor} />
    },

    //nombre pagina
    title: 'Inicio de Sesión',
    //edicion header individual
    // headerStyle:{
    //    backgroundColor:'#fe0',
    //  },

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CDCDCD',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "bold"
    },
    forgot: {

        fontSize: 17,
        textAlign: 'center',
        color: '#572364',
    },

    textPrimary: {
        paddingTop: 5.0,
        color: "white",
        alignItems: 'center',
        fontSize: 35,
        textAlign: 'center',
        fontWeight: "bold"
    },
    body: {
        paddingTop: 10.0,
        marginLeft: 25.0,
        marginRight: 25.0,
        flex: 1,
        alignItems: 'stretch',
        alignContent: 'space-around',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    boton: {
        justifyContent: 'center',
        alignItems: 'center'
    },

});

LoginScreen.navigationOptions = {
    title: 'Login'
}
