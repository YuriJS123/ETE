import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function PresencaAluno({ navigation }: any) {

  const disciplinas = [
    {
      id: '1',
      instituicao: 'Faculdade Católica Imaculada Conceição do Recife - FICR',
      nome: 'Redes de Computadores (Cloud Computing)',
      faltas: 0
    },
    {
      id: '2',
      instituicao: 'Faculdade Católica Imaculada Conceição do Recife - FICR',
      nome: 'Banco de Dados II',
      faltas: 2
    },
    {
      id: '3',
      instituicao: 'Faculdade Católica Imaculada Conceição do Recife - FICR',
      nome: 'Engenharia de Software',
      faltas: 1
    }
  ];

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Minhas Disciplinas</Text>
      <Text style={styles.subtitle}>Consulte seu histórico de presença</Text>

      <FlatList
        data={disciplinas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            
            <Text style={styles.instituicao}>{item.instituicao}</Text>

            <Text style={styles.nomeDisciplina}>{item.nome}</Text>

            <View style={styles.infoLinha}>
              <Text style={styles.faltas}>Faltas: {item.faltas}</Text>

              <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('HistoricoFaltas', { disciplina: item })}
              >
                <Text style={styles.textoBotao}>Ver faltas</Text>
                <FontAwesome name="chevron-right" size={14} color="#2563ff" />
              </TouchableOpacity>
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
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1f1f1f'
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
    marginBottom: 20
  },

  card: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    elevation: 2
  },

  instituicao: {
    fontSize: 13,
    fontWeight: '600',
    color: '#444'
  },

  nomeDisciplina: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginTop: 6
  },

  infoLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12
  },

  faltas: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222'
  },

  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto'
  },

  textoBotao: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2563ff',
    marginRight: 4
  }
});
