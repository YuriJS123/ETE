import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function BoletimAluno({ navigation }: any) {
  // Esse é um exemplo — aqui você pode puxar dados do localStorage / API e gerar PDF/CSV.
  function handleDownload() {
    // Implementar geração/baixar do boletim real
    Alert.alert('Download', 'Simulação: boletim baixado (exemplo).');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boletim</Text>
      <Text style={styles.subtitle}>Aqui você pode visualizar e baixar seu boletim.</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Curso: Exemplo de Turma</Text>
        <Text>Matemática: 8.5</Text>
        <Text>Português: 7.0</Text>
        <Text>Ciência: 9.0</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleDownload}>
        <Text style={styles.btnText}>Baixar Boletim (PDF)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: '700', marginBottom: 6 },
  subtitle: { color: '#666', marginBottom: 20 },
  card: { backgroundColor: '#f5f5f5', padding: 16, borderRadius: 10, marginBottom: 20 },
  cardTitle: { fontWeight: '700', marginBottom: 8 },
  btn: {
    backgroundColor: '#2563ff',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: { color: '#fff', fontWeight: '600' },
});
