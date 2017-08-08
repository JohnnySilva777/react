import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import { StackNavigator } from 'react-navigation';


import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';
import CenaLogin from './src/components/CenaLogin';
import CenaCadastro from './src/components/CenaCadastro';

export default class app5 extends Component {
  render() {
    return (
      <Navigator
				initialRoute={{ id: 'login' }}
				renderScene={(route, navigator) => {
					switch (route.id) {
            case 'login':
							return (<CenaLogin navigator={navigator} />);

            case 'principal':
							return (<CenaPrincipal navigator={navigator} />);

            case 'cadastro':
              return (<CenaCadastro navigator={navigator} />);

						case 'cliente':
							return (<CenaClientes navigator={navigator} />);

						case 'contato':
							return (<CenaContatos navigator={navigator} />);

						case 'empresa':
							return (<CenaEmpresa navigator={navigator} />);

						case 'servico':
							return (<CenaServicos navigator={navigator} />);

						default:
							return false;
					}
				}}
      />
    );
  }
}
