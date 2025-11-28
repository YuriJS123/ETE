import React, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, TextInput } from "react-native";

export default function AlunosDaTurmaProfessor({ route }: any) {

  const turmaId = route?.params?.turmaId;

  const [pesquisa, setPesquisa] = useState("");

  const alunosPorTurma: any = {
    "1": [
      { id: '1', nome: 'Mara Rúbia de Araújo Alves', foto: 'https://i.pinimg.com/736x/5b/44/e0/5b44e0ea827f91bed4998b02cdddeb31.jpg' },
      { id: '2', nome: 'Rafael Andrade Dutra dos Santos', foto: 'https://i.pinimg.com/564x/9b/86/42/9b864241d203df27e4d822780be8872f.jpg' },
    ],
    "2": [
      { id: '3', nome: 'Ravi Jaeger Cavalvanti Cyrillo', foto: 'https://static.vecteezy.com/ti/fotos-gratis/p2/25009030-bonito-jovem-homem-adolescente-moda-emocoes-luz-fundo-foto.jpg' },
      { id: '4', nome: 'Yuri José Ferreira dos Santos', foto: 'https://ai-previews.123rf.com/ai-txt2img/600nwm/d0097d99-6adc-4ea9-8e9b-bc084646fc1e.jpg' },
    ],
    "3": [
      { id: '5', nome: 'Filipe Filipe Carvalho Pereira', foto: 'https://s2-oglobo.glbimg.com/u6mPJO7B25EB45RagwuAHdoD-wk=/0x0:464x655/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/z/l/LLrKduT2KeZ4kX4VAmkw/whatsapp-image-2023-10-20-at-16.05.52.jpeg' },
      { id: '6', nome: 'João Marcelo Azevêdo dos Santos', foto: 'https://img.freepik.com/fotos-gratis/retrato-de-um-homem-bonito_23-2150770967.jpg?semt=ais_hybrid&w=740&q=80' },
      { id: '7', nome: 'Ana Beatriz Ribeiro da Silva', foto: 'https://media.istockphoto.com/id/512735004/pt/foto/retrato-de-uma-jovem-mulher-bonita.jpg?s=170667a&w=0&k=20&c=gKttPjE1yV_ihWLG7ph2jdDo5P6dJcnkkN9LT4Yz0aw=' },
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
