import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ChamadaDisciplina({ route, navigation }: any) {

  const { disciplina } = route.params;

  const [alunos, setAlunos] = useState<
  { id: string; nome: string; registro: string | null }[]
>([
  { id: '1', nome: 'Ana Beatriz', registro: null },
  { id: '2', nome: 'João Marcelo', registro: null },
  { id: '3', nome: 'Mara Rubia', registro: null },
  { id: '4', nome: 'Ravi Jaeguer', registro: null },
]);


  function registrar(id: string, tipo: 'Presente' | 'Falta') {
    const dataHoje = new Date();
    const dataFormatada =
      dataHoje.getDate().toString().padStart(2, '0') +
      '/' +
      (dataHoje.getMonth() + 1).toString().padStart(2, '0');

    setAlunos(alunos.map(a =>
      a.id === id
        ? { ...a, registro: `${tipo} — ${dataFormatada}` }
        : a
    ));
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>{disciplina.nome}</Text>
      <Text style={styles.subtitulo}>
        Turma: {disciplina.turma}
      </Text>

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.barra} />

            <View style={styles.cardConteudo}>
              <Text style={styles.nomeAluno}>{item.nome}</Text>

              {item.registro && (
                <Text style={styles.registro}>{item.registro}</Text>
              )}

              <View style={styles.botoesLinha}>
                
                <TouchableOpacity
                  style={styles.botaoPresente}
                  onPress={() => registrar(item.id, 'Presente')}
                >
                  <Text style={styles.botaoTextoBranco}>Presente</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.botaoFalta}
                  onPress={() => registrar(item.id, 'Falta')}
                >
                  <Text style={styles.botaoTextoFalta}>Falta</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20
  },

  titulo: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1f1f1f',
  },

  subtitulo: {
    fontSize: 15,
    color: '#555',
    marginBottom: 18,
  },

  card: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: 14,
    marginBottom: 16,
    elevation: 3,
    flexDirection: 'row',
    overflow: 'hidden',
  },

  barra: {
    width: 8,
    backgroundColor: '#1E90FF',
    height: '100%',
  },

  cardConteudo: {
    flex: 1,
    padding: 16,
  },

  nomeAluno: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },

  registro: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: '600',
    color: '#0073ff',
  },

  botoesLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

  botaoPresente: {
    backgroundColor: '#0f766e',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginRight: 10,
  },

  botaoTextoBranco: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },

  botaoFalta: {
    borderWidth: 2,
    borderColor: '#d11a2a',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginRight: 10,
  },

  botaoTextoFalta: {
    color: '#d11a2a',
    fontWeight: '700',
    fontSize: 14,
  },
});
