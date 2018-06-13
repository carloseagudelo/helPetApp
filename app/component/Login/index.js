import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.markWrap}>
          <Image style={styles.mark} 
                 resizeMode="contain" 
                 source={{uri: 'https://helpet.com.co/wp-content/themes/twentyseventeen/assets/images/logo.png'}}
          />
        </View>

        <View style={styles.wrapper}>
          <View style={styles.inputWrap}>
            <TextInput 
              placeholder="Correo Electronico" 
              placeholderTextColor="gray"
              style={styles.input} 
            />
          </View>

          <View style={styles.inputWrap}>
            <TextInput 
              placeholder="Contraseña"
              placeholderTextColor="gray"                 
              style={styles.input} 
              secureTextEntry 
            />
          </View>

          <TouchableOpacity activeOpacity={.5}>
            <View>
              <Text style={styles.forgotPasswordText}>¿Olvisdaste tu contraseña?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.container}>

          <View style={styles.networkTitle}>          
            <Text style={styles.accountText}>Tambien puedes ingresar usando</Text>
          </View>

          <View style={styles.networkWrap}> 

            <TouchableOpacity style={styles.faceBookButton}>
              <Icon name="facebook" style={styles.socialButtonText}>
                <Text style={styles.socialButtonText}> Facebook</Text>
              </Icon>
            </TouchableOpacity>

            
            <TouchableOpacity style={styles.instagramButton}>
              <Icon name="instagram" style={styles.socialButtonText}>
                <Text style={styles.socialButtonText}> Instagram</Text>
              </Icon>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}