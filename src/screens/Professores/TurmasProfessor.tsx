import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function TurmasProfessor({ navigation }: any) {

  const turmas = [
    { id: "1", nome: "1º Ano do Ensino Médio", alunos: 28 },
    { id: "2", nome: "2º Ano do Ensino Médio", alunos: 30 },
    { id: "3", nome: "3º Ano do Ensino Médio", alunos: 32 },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Selecione uma Turma</Text>

      {turmas.map((turma) => (
        <TouchableOpacity
          key={turma.id}
          style={styles.card}
          onPress={() => navigation.navigate("AlunosDaTurmaProfessor", { turmaId: turma.id })}
        >
          <View style={styles.row}>
            <FontAwesome name="users" size={32} color="#2563ff" />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.cardTitle}>{turma.nome}</Text>
              <Text style={styles.cardSub}>{turma.alunos} alunos</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  titulo: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#fafafa",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },

  cardSub: {
    fontSize: 14,
    color: "#666",
  },
});
