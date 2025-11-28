import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import HistoricoFaltas from './src/screens/Alunos/HistoricoFaltasAlunos';
import CadastroScreen from './src/screens/CadastroScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeAluno from './src/screens/Alunos/HomeAluno';
import HomeProfessor from './src/screens/Professores/HomeProfessor';
import PresencaAluno from './src/screens/Alunos/PresencaAluno';
import BoletimAluno from './src/screens/Alunos/BoletimAluno';
import CalendarioAluno from './src/screens/Alunos/CalendarioAluno';
import Colegas from './src/screens/Alunos/ColegasAlunos';
import AulasDoDiaAlunos from './src/screens/Alunos/AulasDoDiaAlunos';
import PresencaProfessor from './src/screens/Professores/PresencaProfessor';
import AvisosDaEscolaAlunos from './src/screens/Alunos/AvisosDaEscolaAlunos';
import ChamadaDisciplina from './src/screens/Professores/ChamadaDisciplina';
import CalendarioProfessor from './src/screens/Professores/CalendarioProfessor';
import AlunosDaTurmaProfessor from './src/screens/Professores/AlunosDaTurmaProfessor';
import TurmasProfessor from './src/screens/Professores/TurmasProfessor';
import AvisosDaEscolaProfessor from './src/screens/Professores/AvisosDaEscolaProfessor';
import AulasDoDiaProfessor from './src/screens/Professores/AulasDoDiaProfessor'
import ChamadaRealizadaProfessor from './src/screens/Professores/Chamadarealizadaprofessor';
import DetalhesChamada from './src/screens/Professores/DetalhesChamada'
const Stack = createNativeStackNavigator();

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

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="CalendarioAluno"
          component={CalendarioAluno}
          options={gradientHeader('Calendário')}
        />
<Stack.Screen
  name="TurmasProfessor"
  component={TurmasProfessor}
  options={gradientHeader("Turmas")}
/>

<Stack.Screen
  name="AlunosDaTurmaProfessor"
  component={AlunosDaTurmaProfessor}
  options={gradientHeader("Alunos")}
/>
<Stack.Screen
  name="AulasDoDiaProfessor"
  component={AulasDoDiaProfessor}
  options={gradientHeader("Aulas do dia")}
/>


<Stack.Screen
  name="AvisosDaEscolaProfessor"
  component={AvisosDaEscolaProfessor}
  options={gradientHeader("Avisos")}
/>
        <Stack.Screen
          name="CalendarioProfessor"
          component={CalendarioProfessor}
          options={gradientHeader('Calendário')}
        />

        <Stack.Screen 
          name="AvisosDaEscolaAlunos" 
          component={AvisosDaEscolaAlunos}
          options={gradientHeader('Avisos da escola')}
        />
        <Stack.Screen 
          name="DetalhesChamada" 
          component={DetalhesChamada}
          options={gradientHeader('Chamada')}
        />

        <Stack.Screen
          name="AulasDoDiaAlunos"
          component={AulasDoDiaAlunos}
          options={gradientHeader('Aulas do dia')}
        />

        <Stack.Screen
          name="HomeAluno"
          component={HomeAluno}
          options={gradientHeader('Olá, Aluno!')}
        />
        <Stack.Screen
  name="ChamadaRealizadaProfessor"
  component={ChamadaRealizadaProfessor}
  options={gradientHeader('Chamada realizada')}
/>


        <Stack.Screen
          name="HomeProfessor"
          component={HomeProfessor}
          options={gradientHeader('Olá, Professor!')}
        />

        <Stack.Screen
          name="PresencaAluno"
          component={PresencaAluno}
          options={gradientHeader('Minhas Disciplinas')}
        />

        <Stack.Screen
          name="PresencaProfessor"
          component={PresencaProfessor}
          options={gradientHeader('Matérias')}
        />

        <Stack.Screen
          name="ChamadaDisciplina"
          component={ChamadaDisciplina}
          options={gradientHeader('Chamada')}
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
          options={gradientHeader('Boletim')}
        />

        <Stack.Screen
          name="Colegas"
          component={Colegas}
          options={gradientHeader('Colegas da Turma')}
        />

        <Stack.Screen
          name="HistoricoFaltas"
          component={HistoricoFaltas}
          options={gradientHeader('Histórico de faltas')}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
