import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FundoAnimado from '../components/FundoAnimado';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [perfil, setPerfil] = useState<'aluno' | 'professor' | null>(null);
  const [cadastro, setCadastro] = useState<'usuario' | null>(null);

  function realizarLogin() {
    if (!perfil) {
      alert('Selecione Aluno ou Professor');
      return;
    }
  
    if (perfil === 'aluno') {
      navigation.navigate('HomeAluno');
    } else {
      navigation.navigate('HomeProfessor');
    }
  
    
    
    if (cadastro === 'usuario') {
      navigation.navigate('CadastroScreen');
      return;
    }
    
   
  }

  return (
    <View style={styles.container}>
     
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



        

        
      
 <Text style={styles.titulo}>Login</Text>
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
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CadastroScreen')}>
  <Text style={{ color: '#2563ff', marginTop: 12 }}>Criar conta</Text>
</TouchableOpacity>

  <View style={styles.row}>
  <TouchableOpacity
    style={[styles.roleBtn, perfil === 'aluno' && styles.roleBtnActive]}
    onPress={() => setPerfil('aluno')}
  >
    <Text style={[styles.roleText, perfil === 'aluno' && styles.roleTextActive]}>Aluno</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[styles.roleBtn, perfil === 'professor' && styles.roleBtnActive]}
    onPress={() => setPerfil('professor')}
  >
    <Text style={[styles.roleText, perfil === 'professor' && styles.roleTextActive]}>Professor</Text>
  </TouchableOpacity>
</View>
      </View>

      <StatusBar style="auto" />
    </View>


  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topContainer: {
    height: '28%',
    width: '100%',
    backgroundColor: '#0a7bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: { width: 500, height: 500 },
  card: {
    flex: 1,
    marginHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: -9, 
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563ff',
    textAlign: 'center',
   
  },
  toplogo: {
    width: '100%',
    alignItems: 'center'
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
    marginTop: 50,
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
