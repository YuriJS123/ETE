import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import HistoricoFaltas from './src/screens/HistoricoFaltas';
import CadastroScreen from './src/screens/CadastroScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeAluno from './src/screens/HomeAluno';
import HomeProfessor from './src/screens/HomeProfessor';
import PresencaAluno from './src/screens/PresencaAluno';
import BoletimAluno from './src/screens/BoletimAluno';
import Calendario from './src/screens/Calendario';
import Colegas from './src/screens/Colegas';
const Stack = createNativeStackNavigator();

// Função para criar um header com LinearGradient
const gradientHeader = (title: string): NativeStackNavigationOptions => ({
  headerTintColor: '#fff',
  headerTitle: title,
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
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Login */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
 <Stack.Screen
          name="Calendario"
          component={Calendario}
          options={gradientHeader('Calendário')}
        />
        {/* Home Aluno */}
        <Stack.Screen
          name="HomeAluno"
          component={HomeAluno}
          options={gradientHeader('Olá, Aluno!')}
        />

        {/* Home Professor */}
        <Stack.Screen
          name="HomeProfessor"
          component={HomeProfessor}
          options={{ title: 'Início - Professor' }}
        />

        {/* Presença Aluno */}
        <Stack.Screen
          name="PresencaAluno"
          component={PresencaAluno}
          options={gradientHeader('Minhas Disciplinas')}
        />

        {/* Cadastro */}
        <Stack.Screen
          name="CadastroScreen"
          component={CadastroScreen}
          options={{
            headerTransparent: true,
            headerTintColor: '#fff',
            headerTitle: '',
          }}
        />

        {/* Boletim Aluno */}
        <Stack.Screen
          name="BoletimAluno"
          component={BoletimAluno}
          options={gradientHeader('Boletim')}
        />
<Stack.Screen
          name="Colegas"
          component={Colegas}
          options={gradientHeader('Colegas da Turma')}
          
        />
        {/* Histórico de Faltas */}
        <Stack.Screen
          name="HistoricoFaltas"
          component={HistoricoFaltas}
          options={gradientHeader('Histórico de faltas')}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
