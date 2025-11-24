import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeProfessor({ navigation }: any) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Olá, Professor joma ;-:!</Text>
      <Text style={styles.subtitle}>O que deseja acessar?</Text>

      {/* Botões principais */}
      <View style={styles.menuContainer}>

        <TouchableOpacity style={styles.card}>
          <FontAwesome name="check-square-o" size={32} color="#2563ff" />
          <Text style={styles.cardText}>Presença</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <FontAwesome name="calendar" size={32} color="#2563ff" />
          <Text style={styles.cardText}>Calendário</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <FontAwesome name="bullhorn" size={32} color="#2563ff" />
          <Text style={styles.cardText}>Mural de Avisos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <FontAwesome name="users" size={32} color="#2563ff" />
          <Text style={styles.cardText}>Alunos da Turma</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <FontAwesome name="book" size={32} color="#2563ff" />
          <Text style={styles.cardText}>Aulas do Dia</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1f1f1f',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
    marginBottom: 30,
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    height: 130,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  cardText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
});
