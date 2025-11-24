import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient'; // ⬅ IMPORTAR AQUI!

import CadastroScreen from './src/screens/CadastroScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeAluno from './src/screens/HomeAluno';
import HomeProfessor from './src/screens/HomeProfessor';
import PresencaAluno from './src/screens/PresencaAluno';
import BoletimAluno from './src/screens/BoletimAluno';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="HomeAluno"
          component={HomeAluno}
          options={{
            headerTransparent: true,
            headerTintColor: '#fff',
            headerTitle: 'Olá, Aluno!',
            headerTitleStyle: {
              fontSize: 22,
              fontWeight: 'bold',
              color: '#fff',
            },
            headerBackground: () => (
              <LinearGradient
                colors={['#14B454', '#14308C']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            ),
          }}
        />

        <Stack.Screen 
          name="HomeProfessor" 
          component={HomeProfessor}
          options={{ title: 'Início - Professor' }}
        />

        <Stack.Screen
          name="PresencaAluno"
          component={PresencaAluno}
          options={{ title: '' }}
        />

        <Stack.Screen
          name="CadastroScreen"
          component={CadastroScreen}
          options={{
            headerTransparent: true,
            headerTintColor: '#fff',
            headerTitle: '',
          }}
        />

        <Stack.Screen
          name="BoletimAluno"
          component={BoletimAluno}
          options={{ title: 'Boletim' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
