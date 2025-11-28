import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

type Aluno = { id: string; nome: string; foto: string; registro: string | null; selecionando?: boolean };
type Disciplina = { nome: string; turma: string };

interface Props { route: { params?: { disciplina?: Disciplina } } }

export default function ChamadaDisciplina({ route }: Props) {
  const disciplina = route?.params?.disciplina || { nome: 'Disciplina', turma: '' };

  const [alunos, setAlunos] = useState<Aluno[]>([
    { id: '1', nome: 'Ana Beatriz Ribeiro', foto: 'https://media.istockphoto.com/id/512735004/pt/foto/retrato-de-uma-jovem-mulher-bonita.jpg?s=170667a&w=0&k=20&c=gKttPjE1yV_ihWLG7ph2jdDo5P6dJcnkkN9LT4Yz0aw=', registro: null },
    { id: '2', nome: 'João Marcelo', foto: 'https://img.freepik.com/fotos-gratis/retrato-de-um-homem-bonito_23-2150770967.jpg?semt=ais_hybrid&w=740&q=80', registro: null },
    { id: '3', nome: 'Mara Rúbia', foto: 'https://i.pinimg.com/736x/5b/44/e0/5b44e0ea827f91bed4998b02cdddeb31.jpg', registro: null },
    { id: '4', nome: 'Ravi Jaeger', foto: 'https://static.vecteezy.com/ti/fotos-gratis/p2/25009030-bonito-jovem-homem-adolescente-moda-emocoes-luz-fundo-foto.jpg', registro: null },
  ]);

  function atualizarAluno(id: string, dados: Partial<Aluno>) {
    setAlunos(alunos.map(a => (a.id === id ? { ...a, ...dados } : a)));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{disciplina.nome}</Text>
      <Text style={styles.subtitulo}>Turma: {disciplina.turma}</Text>

      <FlatList
        data={alunos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.barra} />
            <Image source={{ uri: item.foto }} style={styles.foto} />
            <View style={styles.cardConteudo}>
              <Text style={styles.nomeAluno}>{item.nome}</Text>

              {item.registro && !item.selecionando && <Text style={styles.registro}>{item.registro}</Text>}

              {!item.selecionando && !item.registro && (
                <View style={styles.botoesLinha}>
                  <TouchableOpacity style={styles.botaoPresente} onPress={() => atualizarAluno(item.id, { registro: 'Presente', selecionando: true })}>
                    <Text style={styles.botaoTextoBranco}>Presente</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.botaoFalta} onPress={() => atualizarAluno(item.id, { registro: 'Falta', selecionando: true })}>
                    <Text style={styles.botaoTextoFalta}>Falta</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.botaoJustificado} onPress={() => atualizarAluno(item.id, { registro: 'Justificado', selecionando: true })}>
                    <Text style={styles.botaoTextoJustificado}>Justificado</Text>
                  </TouchableOpacity>
                </View>
              )}

              {item.selecionando && (
                <View style={styles.botoesLinha}>
                  <TouchableOpacity style={styles.botaoEnviar} onPress={() => {
                    const hoje = new Date();
                    const data = hoje.getDate().toString().padStart(2, '0') + '/' + (hoje.getMonth()+1).toString().padStart(2,'0');
                    atualizarAluno(item.id, { registro: `${item.registro} — ${data}`, selecionando: false });
                  }}>
                    <Text style={styles.botaoTextoBranco}>Enviar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.botaoCancelar} onPress={() => atualizarAluno(item.id, { registro: null, selecionando: false })}>
                    <Text style={styles.botaoTextoFalta}>Cancelar</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 60, paddingHorizontal: 20 },
  titulo: { fontSize: 26, fontWeight: '700', color: '#1f1f1f' },
  subtitulo: { fontSize: 15, color: '#555', marginBottom: 18 },
  card: { width: '100%', backgroundColor: '#f2f2f2', borderRadius: 14, marginBottom: 16, elevation: 3, flexDirection: 'row', overflow: 'hidden', alignItems: 'center' },
  barra: { width: 8, backgroundColor: '#1E90FF', height: '100%' },
  foto: { width: 60, height: 60, borderRadius: 30, marginLeft: 12 },
  cardConteudo: { flex: 1, padding: 16 },
  nomeAluno: { fontSize: 18, fontWeight: '700', color: '#222' },
  registro: { marginTop: 4, fontSize: 13, fontWeight: '600', color: '#0073ff' },
  botoesLinha: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  botaoPresente: { backgroundColor: '#0f766e', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 10, marginRight: 10 },
  botaoTextoBranco: { color: '#fff', fontSize: 14, fontWeight: '700' },
  botaoFalta: { borderWidth: 2, borderColor: '#d11a2a', paddingVertical: 6, paddingHorizontal: 14, borderRadius: 10, marginRight: 10 },
  botaoTextoFalta: { color: '#d11a2a', fontWeight: '700', fontSize: 14 },
  botaoJustificado: { borderWidth: 2, borderColor: '#ff9900', paddingVertical: 6, paddingHorizontal: 14, borderRadius: 10 },
  botaoTextoJustificado: { color: '#ff9900', fontWeight: '700', fontSize: 14 },
  botaoEnviar: { backgroundColor: '#1E90FF', paddingVertical: 6, paddingHorizontal: 14, borderRadius: 10, marginRight: 10 },
  botaoCancelar: { borderWidth: 2, borderColor: '#d11a2a', paddingVertical: 6, paddingHorizontal: 14, borderRadius: 10 },
});
