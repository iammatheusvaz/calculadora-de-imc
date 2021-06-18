import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { TextInput, Button } from 'react-native-paper';

export default class App extends React.Component {
  // valores globais
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: 'Indeterminado',
    cor: '#bdc3c7'
  };
  
  
  calcularIMC = () => {
    const imcResultado = this.state.peso / (this.state.altura * this.state.altura);

    this.setState({
      imc: imcResultado.toFixed(1)
    });

    if (imcResultado < 18.5) {
      this.setState({
        legenda: 'Abaixo do peso',
        cor: '#e74c3c'
      });
    } else if (imcResultado >= 18.5 && imcResultado < 25) {
      this.setState({
        legenda: 'Peso normal',
        cor: '#2ecc71'
      });
    } else if (imcResultado >= 25 && imcResultado < 30) {
      this.setState({
        legenda: 'Sobrepeso',
        cor: '#f1c40f'
      });
    } else if (imcResultado >= 30 && imcResultado < 35) {
      this.setState({
        legenda: 'Obesidade tipo I',
        cor: '#e67e22'
      });
    } else if (imcResultado >= 35 && imcResultado < 40) {
      this.setState({
        legenda: 'Obesidade tipo II',
        cor: '#e74c3c'
      });
    } else {
      this.setState({
        legenda: 'Obesidade mórbida',
        cor: '#c0392b'
      })
    }
  };
  
  render() {
  const legenda = 'Normal';

  return (
    <View style={styles.app}>
      <Text style={styles.titulo}>Seu IMC</Text>

      <View style={[styles.painel, {backgroundColor: this.state.cor}]}>
        <Text style={styles.resultado}>{this.state.imc}</Text>
        <Text style={styles.diagnostico}>{this.state.legenda}</Text>
      </View>

      <View>
        <TextInput
        label="Peso"
        style={styles.peso}
        onChangeText={valor => {
          this.setState({peso: valor.replace(',', '.')});
        }}
        />
        <TextInput
        label="Altura"
        style={styles.altura}
        onChangeText={(valor) => {
          this.setState({altura: valor.replace(',', '.')})
        }}
        />
        <Button mode="contained" onPress={this.calcularIMC}>
        Calcular IMC
        </Button>
      </View>
    </View>
  );
}
  }

const styles = StyleSheet.create({
  app: {
    padding: 20,
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  painel: {
    alignSelf: 'center',
    paddingVertical: 5,
    width: 160,
    height: 70,
    borderRadius: 5,
    textColor: 'white',
  },
  resultado: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600'
  },
  peso: {
    height: 60,
    marginTop: 150,
  },
  altura: {
    height: 60,
    marginVertical: 15,
  }
});
