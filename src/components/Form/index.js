import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './style';

export default function Form(){
    return(
    <View style={styles.formContext}>
        <View style={styles.form}>
        <Text>Login</Text>
        <TextInput placeholder="Email"/>
        <Text>Senha</Text>
        <TextInput placeholder="****"/>
        <Button title="Entrar"/>
        </View>
    </View>
    );
}