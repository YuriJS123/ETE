import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function HistoricoFaltas() {
  const route = useRoute();
  const { disciplina }: any = route.params;

  const faltas = [
    {
      id: '1',
      data: '09/06/2025',
      inicio: '08:50',
      fim: '09:40',
      situacao: 'Não justificada'
    },
    {
      id: '2',
      data: '09/06/2025',
      inicio: '09:50',
      fim: '10:40',
      situacao: 'Não justificada'
    },
    {
        id: '3',
        data: '09/06/2025',
        inicio: '08:50',
        fim: '09:40',
        situacao: 'Não justificada'
      },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>{disciplina.nome}</Text>
      

      <View style={styles.header}>
        <Text style={[styles.headerText, { flex: 1.1 }]}>Data</Text>
        <Text style={[styles.headerText, { flex: 1.1 }]}>Disciplina</Text>
        <Text style={[styles.headerText, { flex: 1 }]}>Início</Text>
        <Text style={[styles.headerText, { flex: 1 }]}>Fim</Text>
        <Text style={[styles.headerText, { flex: 1.8 }]}>Situação</Text>
      </View>

      <FlatList
        data={faltas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={[styles.rowText, { flex: 1.2 }]}>{item.data}</Text>
            <Text style={[styles.rowText, { flex: 1 }]}>{disciplina.nome}</Text>
            <Text style={[styles.rowText, { flex: 1 }]}>{item.inicio}</Text>
            <Text style={[styles.rowText, { flex: 1 }]}>{item.fim}</Text>
            <Text style={[styles.rowText, { flex: 1.8 }]}>{item.situacao}</Text>
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
    paddingTop: 50,
    paddingHorizontal: 6,
  },

  titulo: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
  },



  header: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 6,
    width: '100%',
    backgroundColor: '#2563ff',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },

  headerText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },

  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    elevation: 1,
    borderBottomColor: '#ddd'
  },


  rowText: {
    fontSize: 13,
    color: '#333',
    
  }
});