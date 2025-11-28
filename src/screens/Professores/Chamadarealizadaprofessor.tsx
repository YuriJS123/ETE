import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ChamadaRealizadaProfessor({ route, navigation }: any) {
  // Se não vier nada do route, usa as chamadas mocadas abaixo
  const chamadas = route?.params?.chamadas || [
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
      materia: "Português",
      turma: "3º Ano Médio",
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
      <Text style={styles.title}>Chamadas Realizadas</Text>

      <FlatList
        data={chamadas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("DetalhesChamada", { chamada: item })}
          >
            <View style={styles.barra} />

            <View style={styles.cardConteudo}>
              <Text style={styles.nomeDisciplina}>{item.materia}</Text>
              <Text style={styles.turma}>{item.turma}</Text>
              <Text style={styles.data}>{item.data}</Text>

              <View style={styles.linha}>
                <Text style={styles.textoAcessar}>Ver presença</Text>
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
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 26, fontWeight: "700", marginBottom: 20 },
  card: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    borderRadius: 14,
    marginBottom: 16,
    elevation: 3,
    flexDirection: "row",
    overflow: "hidden",
  },
  barra: { width: 8, backgroundColor: "#22c55e" },
  cardConteudo: { flex: 1, padding: 16 },
  nomeDisciplina: { fontSize: 18, fontWeight: "700" },
  turma: { fontSize: 15, color: "#777" },
  data: { fontSize: 14, marginTop: 4, color: "#444" },
  linha: { flexDirection: "row", alignItems: "center", marginTop: 12 },
  textoAcessar: { fontSize: 15, fontWeight: "700", color: "#2563ff", marginRight: 6 },
});
