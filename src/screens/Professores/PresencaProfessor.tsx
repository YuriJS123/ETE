import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function PresencaProfessor({ navigation }: any) {

  const disciplinas = [
    { id: '1', nome: 'História', turma: '2º Ano Médio' },
    { id: '2', nome: 'Matemática', turma: '2º Ano Médio' },
    { id: '3', nome: 'Geografia', turma: '2º Ano Médio' }
  ];

  // TODAS AS CHAMADAS
  const chamadasExemplo = [
    {
      materia: "História",
      turma: "2º Ano Médio",
      data: "28/11/2025",
      alunos: [
        { id: "1", nome: "Ana Beatriz", presente: true },
        { id: "2", nome: "João Marcelo", presente: false },
        { id: "3", nome: "Mara Rúbia", presente: true },
      ],
    },
    {
      materia: "Matemática",
      turma: "2º Ano Médio",
      data: "27/11/2025",
      alunos: [
        { id: "1", nome: "Pedro Henrique", presente: true },
        { id: "2", nome: "Larissa Costa", presente: true },
        { id: "3", nome: "Bruno Lopes", presente: false },
      ],
    },
    {
      materia: "Geografia",
      turma: "2º Ano Médio",
      data: "26/11/2025",
      alunos: [
        { id: "1", nome: "Camila Oliveira", presente: true },
        { id: "2", nome: "Rafael Gomes", presente: true },
        { id: "3", nome: "Igor Santos", presente: true },
      ],
    },
  ];

  return (
    <View style={styles.container}>

      {/* BOTÃO VER CHAMADAS REALIZADAS */}
      <TouchableOpacity
        style={styles.botaoChamadasCard}
        onPress={() =>
          navigation.navigate('ChamadaRealizadaProfessor', {
            chamadas: chamadasExemplo
          })
        }
      >
        <Text style={styles.textoBotaoCard}>Ver chamadas realizadas</Text>
        <FontAwesome name="chevron-right" color="#fff" size={16} />
      </TouchableOpacity>

      <Text style={styles.title}>Selecione uma disciplina</Text>

      <FlatList
        data={disciplinas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ChamadaDisciplina', { disciplina: item })}
          >
            <View style={styles.barra} />
            <View style={styles.cardConteudo}>
              <Text style={styles.nomeDisciplina}>{item.nome}</Text>
              <Text style={styles.turma}>{item.turma}</Text>

              <View style={styles.linha}>
                <Text style={styles.textoAcessar}>Acessar</Text>
                <FontAwesome name="chevron-right" color="#2563ff" size={16} />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 30, paddingHorizontal: 20 },
  title: { fontSize: 26, fontWeight: '700', color: '#1f1f1f', marginBottom: 20 },
  card: { width: '100%', backgroundColor: '#f2f2f2', borderRadius: 14, marginBottom: 16, elevation: 3, flexDirection: 'row', overflow: 'hidden' },
  barra: { width: 8, backgroundColor: '#1E90FF' },
  cardConteudo: { flex: 1, padding: 16 },
  nomeDisciplina: { fontSize: 18, fontWeight: '700', color: '#222' },
  turma: { fontSize: 14, color: '#777', marginTop: 2 },
  linha: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  textoAcessar: { fontSize: 15, fontWeight: '700', color: '#2563ff', marginRight: 6 },
  botaoChamadasCard: { flexDirection: 'row', backgroundColor: '#22c55e', borderRadius: 14, paddingVertical: 16, paddingHorizontal: 16, justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, elevation: 3 },
  textoBotaoCard: { fontSize: 18, fontWeight: '700', color: '#fff' },
});
