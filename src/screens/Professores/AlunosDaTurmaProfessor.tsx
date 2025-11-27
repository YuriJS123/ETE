import React, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, TextInput } from "react-native";

export default function AlunosDaTurmaProfessor({ route }: any) {

  const turmaId = route?.params?.turmaId;

  const [pesquisa, setPesquisa] = useState("");

  const alunosPorTurma: any = {
    "1": [
      { id: '1', nome: 'Mara', foto: 'https://static.vecteezy.com/ti/fotos-gratis/t2/42730459-leao-perigo-animal-animais-selvagens-natureza-floresta-foto.jpg' },
      { id: '2', nome: 'Rafael', foto: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/01/Neymar-Santos-foto.jpg?w=419&h=283&crop=0' },
    ],
    "2": [
      { id: '3', nome: 'Ravi', foto: 'https://forbes.com.br/wp-content/uploads/2023/02/Life_Fotos-incriveis-natureza-CUPOTY.jpg' },
      { id: '4', nome: 'Yuri', foto: 'https://static.poder360.com.br/2023/02/Lula_-_foto_oficial_-_05_jan_2007_cropped_3-scaled.jpg' },
    ],
    "3": [
      { id: '5', nome: 'Filipe', foto: 'https://s2-g1.glbimg.com/k_em1cSFq3uQ6hQQCnBhAmpRykE=/0x0:3333x1874/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/Q/2/2cWEPlQVCyQYraw8BkPQ/imagem-cortada-23-.jpg' },
      { id: '6', nome: 'João', foto: 'https://akamai.sscdn.co/letras/215x215/fotos/d/1/2/2/d1227c4db2a6b128bbb5fa63bd4d6f5c.jpg' },
      { id: '7', nome: 'Ana', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4w64TJB9QbjhTw18k8xGkkfZsvtGOkbeucQ&s' },
    ],
  };

  const alunos = alunosPorTurma[turmaId] || [];

  // 🔍 Filtra alunos conforme digitação
  const alunosFiltrados = alunos.filter((aluno: any) =>
    aluno.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Alunos da Turma</Text>

      {/* 🔍 Campo de busca */}
      <TextInput
        style={styles.campoPesquisa}
        placeholder="Pesquisar aluno..."
        placeholderTextColor="#999"
        value={pesquisa}
        onChangeText={setPesquisa}
      />

      <FlatList
        data={alunosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.foto }} style={styles.foto} />
            <Text style={styles.nome}>{item.nome}</Text>
          </View>
        )}
      />

      {alunosFiltrados.length === 0 && (
        <Text style={styles.nenhum}>Nenhum aluno encontrado</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },

  titulo: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },

  campoPesquisa: {
    backgroundColor: "#f1f1f1",
    padding: 12,
    borderRadius: 12,
    marginBottom: 18,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },

  foto: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginRight: 15,
  },

  nome: {
    fontSize: 18,
    fontWeight: "600",
  },

  nenhum: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#777",
  },
});
