import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';

type DiaSemana = 'SEG' | 'TER' | 'QUA' | 'QUI' | 'SEX';

type AulaTurma = {
  horario: string;
  turma: string;
  materia: string;
};

const aulasProfessorPorDia: Record<DiaSemana, AulaTurma[]> = {
  SEG: [
    { horario: '07:30 - 08:20', turma: '6º Ano A', materia: 'Matemática' },
    { horario: '08:20 - 09:10', turma: '7º Ano B', materia: 'Matemática' },
    { horario: '09:10 - 10:00', turma: '9º Ano A', materia: 'Matemática' },
  ],
  TER: [
    { horario: '07:30 - 08:20', turma: '8º Ano A', materia: 'Matemática' },
    { horario: '08:20 - 09:10', turma: '6º Ano B', materia: 'Matemática' },
  ],
  QUA: [
    { horario: '07:30 - 08:20', turma: '7º Ano A', materia: 'Matemática' },
    { horario: '08:20 - 09:10', turma: '9º Ano B', materia: 'Matemática' },
  ],
  QUI: [
    { horario: '07:30 - 08:20', turma: '6º Ano C', materia: 'Matemática' },
    { horario: '08:20 - 09:10', turma: '8º Ano B', materia: 'Matemática' },
  ],
  SEX: [
    { horario: '07:30 - 08:20', turma: '9º Ano C', materia: 'Matemática' },
    { horario: '08:20 - 09:10', turma: '7º Ano C', materia: 'Matemática' },
  ],
};

export default function AulasDoDiaProfessor({ navigation }: any) {
  const [diaSelecionado, setDiaSelecionado] = useState<DiaSemana>('SEG');

  const diasSemana: DiaSemana[] = ['SEG', 'TER', 'QUA', 'QUI', 'SEX'];

  return (
    <View style={styles.container}>

     

      <View style={styles.content}>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.diasScroll}
          contentContainerStyle={{ paddingHorizontal: 5 }}
        >
          {diasSemana.map((dia) => (
            <TouchableOpacity
              key={dia}
              onPress={() => setDiaSelecionado(dia)}
              style={[
                styles.diaButton,
                diaSelecionado === dia && styles.diaButtonAtivo
              ]}
            >
              <Text
                style={[
                  styles.diaText,
                  diaSelecionado === dia && styles.diaTextAtivo
                ]}
              >
                {dia}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <ScrollView style={styles.listaAulas}>
          {aulasProfessorPorDia[diaSelecionado].map((aula, index) => (
            <View key={index} style={styles.aulaCard}>
              
              <View style={styles.horarioBox}>
                <Text style={styles.horarioText}>{aula.horario}</Text>
              </View>

              <View style={styles.infoBox}>
                <Text style={styles.materiaText}>{aula.materia}</Text>
                <Text style={styles.professorText}>Turma: {aula.turma}</Text>
              </View>

            </View>
          ))}
        </ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },


  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  diasScroll: {
    marginBottom: 15,
  },

  diaButton: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#d8d8d8',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  diaButtonAtivo: {
    backgroundColor: '#1E5BFF',
  },

  diaText: {
    fontSize: 16,
    color: '#5a5a5a',
    fontWeight: '700',
  },

  diaTextAtivo: {
    color: '#fff',
  },

  listaAulas: {
    marginTop: 10,
  },

  aulaCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
  },

  horarioBox: {
    backgroundColor: '#1E5BFF',
    width: 90,
    paddingVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  horarioText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },

  infoBox: {
    flex: 1,
    padding: 18,
    justifyContent: 'center',
  },

  materiaText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#333',
  },

  professorText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
