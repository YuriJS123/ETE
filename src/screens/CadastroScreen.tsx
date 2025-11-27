import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import FundoAnimado from '../components/FundoAnimado';

export default function CadastroScreen({ navigation }: any) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function realizarLogin() {
    if (!email || !senha) {
      alert("Preencha email e senha");
      return;
    }

    navigation.goBack();
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topContainer}>
        <FundoAnimado />
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.card}>
        <View style={styles.toplogo}>
          <Image
            source={require('../../assets/logo-app.png')}
            style={styles.logoApp}
            resizeMode="contain"
          />
        </View>

        <View style={styles.container}>
        <Text style={styles.titulo}>Cadastro</Text>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="seu@email.com"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="********"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity style={styles.btn} onPress={realizarLogin}>
            <Text style={styles.btnText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingHorizontal: 20,
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563ff',
    textAlign: 'center',
  },
  topContainer: {
    height: '28%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logo: { width: 500, height: 500 },
  card: {
    flex: 1,
    width: '100%',
    
    marginTop: -40,         
    alignSelf: 'center',
    borderRadius: 18,
    paddingVertical: 30,
   
   
  },
  
  toplogo: {
    width: '100%',
    alignItems: 'center',
  },
  logoApp: {
    width: 180,
    height: 180,
  },
  title: { fontSize: 22, fontWeight: '700', color: '#1f1f1f', marginTop: 4 },
  subtitle: { color: '#666', marginBottom: 20 },

  label: { width: '100%', marginTop: 14, fontSize: 14, color: '#444' },

  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginTop: 6,
  },

  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },

  roleBtn: {
    flex: 1,
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#2563ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  roleBtnActive: {
    backgroundColor: '#2563ff',
  },

  roleText: { color: '#2563ff', fontWeight: '600' },
  roleTextActive: { color: '#fff', fontWeight: '700' },

  btn: {
    width: '100%',
    height: 45,
    backgroundColor: '#2563ff',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
  },
  btnText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
