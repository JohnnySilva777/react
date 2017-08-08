import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';
const logo = require('../imgs/logo.png');

export default class CenaCadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Coloque seu Nome',
      lastName: 'Coloque seu Sobrenome',
      phone: 'Coloque seu Telefone',
      adress: 'Coloque seu Endereço',
      age: 'Coloque sua Idade',
      email: 'Digite seu Email',
      senha: 'Digite sua Senha',
    };
  }
  render() {
    return (
			<View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar
            //hidden
            backgroundColor='#EC7148'
        />
        {/* Barra de cima das telas */}
        <BarraNavegacao />
        <ScrollView>
          {/*Logo */}
          <View style={styles.cabecalho}>
            <View style={styles.logo}>
              <Image source={logo} />
            </View>
          </View>
          {/* Inputs */}
          <View style={styles.inputs}>

            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10 }}
                      onChangeText={(text) => this.setState({text})} placeholder={this.state.name} />

            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10 }}
                      onChangeText={(text) => this.setState({text})} placeholder={this.state.lastName} />

            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10 }}
                      onChangeText={(text) => this.setState({text})} placeholder={this.state.phone} />

            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10 }}
                      onChangeText={(text) => this.setState({text})} placeholder={this.state.adress} />

            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10 }}
                      onChangeText={(text) => this.setState({text})} placeholder={this.state.age} />

            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10 }}
                      onChangeText={(text) => this.setState({text})} placeholder={this.state.email} />

            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10 }}
                      onChangeText={(text) => this.setState({text})} placeholder={this.state.senha} />
          </View>

          {/* Botoes */}
          <View style={styles.linhabotao}>
            <TouchableOpacity onPress={() => {
                {/* linha abaixo para fazer navegar entre as telas(id tem que ser o mesmo do App) */}
                this.props.navigator.push({ id: 'login' }); }}  style={styles.button1}>
                <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              this.props.navigator.push({ id: 'login' }); }}  style={styles.button2}>
                <Text style={styles.textButton}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

{/* CSS */}
const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20
  },
  logo: {
    flex: 2,
    marginTop: 30,
    alignItems: 'center'
  },
  inputs: {
    flex: 4,
    marginTop: 20,
    padding: 20
  },
  linhabotao: {
    flex: 2,
    padding: 20
  },
  button1: {
    backgroundColor: '#fff',
    padding: 10,
    borderColor: '#1d8eb8',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width:0, height: 2},
    shadowOpacity: 0.4,
  },
  button2: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    borderColor: '#1d8eb8',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width:0, height: 2},
    shadowOpacity: 0.4,
  },
  textButton: {
    color: '#48BBEC',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  txtEmpresa: {
    fontSize: 18
  }
});
