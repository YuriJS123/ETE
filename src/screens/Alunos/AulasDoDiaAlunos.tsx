import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type DiaSemana = 'SEG' | 'TER' | 'QUA' | 'QUI' | 'SEX';

type Aula = {
  horario: string;
  materia: string;
  professor: string;
};

const aulasPorDia: Record<DiaSemana, Aula[]> = {
  SEG: [
    { horario: '07:30 - 08:20', materia: 'Matemática', professor: 'Prof. João' },
    { horario: '08:20 - 09:10', materia: 'Português', professor: 'Prof. Ana' },
    { horario: '09:10 - 10:00', materia: 'História', professor: 'Prof. Carlos' },
  ],
  TER: [
    { horario: '07:30 - 08:20', materia: 'Geografia', professor: 'Prof. Maria' },
    { horario: '08:20 - 09:10', materia: 'Ciências', professor: 'Prof. Júlia' },
  ],
  QUA: [
    { horario: '07:30 - 08:20', materia: 'Biologia', professor: 'Prof. Lucas' },
    { horario: '08:20 - 09:10', materia: 'Química', professor: 'Prof. Roberto' },
  ],
  QUI: [
    { horario: '07:30 - 08:20', materia: 'Física', professor: 'Prof. Tiago' },
    { horario: '08:20 - 09:10', materia: 'Educação Física', professor: 'Prof. Pedro' },
  ],
  SEX: [
    { horario: '07:30 - 08:20', materia: 'Artes', professor: 'Prof. Paula' },
    { horario: '08:20 - 09:10', materia: 'Sociologia', professor: 'Prof. Renan' },
  ],
};

export default function AulasDoDiaAlunos({ navigation }: any) {
  const [diaSelecionado, setDiaSelecionado] = useState<DiaSemana>('SEG');

  const diasSemana: DiaSemana[] = ['SEG', 'TER', 'QUA', 'QUI', 'SEX'];

  return (
    <View style={styles.container}>

   
      

      <View style={styles.content}>

        <Text style={styles.titulo}>Aulas do Dia</Text>

       
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
          {aulasPorDia[diaSelecionado].map((aula, index) => (
            <View key={index} style={styles.aulaCard}>
              
           
              <View style={styles.horarioBox}>
                <Text style={styles.horarioText}>{aula.horario}</Text>
              </View>

              <View style={styles.infoBox}>
                <Text style={styles.materiaText}>{aula.materia}</Text>
                <Text style={styles.professorText}>{aula.professor}</Text>
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


  header: {
    width: '100%',
    height: 90,
    backgroundColor: '#2563ff',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 15,
    gap: 14,
  },

  headerTitle: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '700',
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    marginBottom: 15,
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
