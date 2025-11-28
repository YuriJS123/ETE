import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

export default function DetalhesChamada() {
  
  // 🔥 MOCK DOS ALUNOS — MESMOS DO COMPONENTE CHAMADA
  const alunos = [
    { id: '1', nome: 'Ana Beatriz Ribeiro', foto: 'https://media.istockphoto.com/id/512735004/pt/foto/retrato-de-uma-jovem-mulher-bonita.jpg?s=170667a&w=0&k=20&c=gKttPjE1yV_ihWLG7ph2jdDo5P6dJcnkkN9LT4Yz0aw=', registro: "Presente — 28/11" },
    { id: '2', nome: 'João Marcelo', foto: 'https://img.freepik.com/fotos-gratis/retrato-de-um-homem-bonito_23-2150770967.jpg?semt=ais_hybrid&w=740&q=80', registro: "Falta — 28/11" },
    { id: '3', nome: 'Mara Rúbia', foto: 'https://i.pinimg.com/736x/5b/44/e0/5b44e0ea827f91bed4998b02cdddeb31.jpg', registro: "Justificado — 28/11" },
    { id: '4', nome: 'Ravi Jaeger', foto: 'https://static.vecteezy.com/ti/fotos-gratis/p2/25009030-bonito-jovem-homem-adolescente-moda-emocoes-luz-fundo-foto.jpg', registro: "Presente — 28/11" },
  ];

  return (
    <View style={styles.container}>
      

      <Text style={styles.sub}>Alunos</Text>

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.foto }} style={styles.foto} />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.status}>{item.registro}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhum aluno registrado ainda.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 26, fontWeight: "700" },
  info: { marginTop: 6, fontSize: 16 },
  sub: { marginTop: 20, fontSize: 20, fontWeight: "600" },
  vazio: { marginTop: 20, textAlign: "center", fontSize: 16, color: "#666" },

  card: {
    backgroundColor: "#f2f2f2",
    padding: 14,
    borderRadius: 12,
    marginVertical: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  foto: { width: 55, height: 55, borderRadius: 30 },
  nome: { fontSize: 17, fontWeight: "600" },
  status: { fontSize: 15, marginTop: 3, color: "#1E90FF", fontWeight: "600" },
});
