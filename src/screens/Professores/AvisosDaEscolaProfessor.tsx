import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function AvisosDaEscolaProfessor() {
  const [avisos, setAvisos] = useState([
    {
      id: '1',
      titulo: 'Reunião de Pais',
      data: '25/11/2025',
      descricao: 'Reunião geral de pais e mestres às 18h no auditório.',
    },
    {
      id: '2',
      titulo: 'Entrega de Boletins',
      data: '28/11/2025',
      descricao: 'Os boletins estarão disponíveis no portal e presencialmente.',
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [editandoId, setEditandoId] = useState<string | null>(null);

  const [titulo, setTitulo] = useState('');
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');

  const novoAviso = () => {
    setEditandoId(null);
    setTitulo('');
    setData('');
    setDescricao('');
    setModalVisible(true);
  };

  const editarAviso = (aviso: any) => {
    setEditandoId(aviso.id);
    setTitulo(aviso.titulo);
    setData(aviso.data);
    setDescricao(aviso.descricao);
    setModalVisible(true);
  };

  const salvarAviso = () => {
    if (!titulo || !data || !descricao) {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    if (editandoId) {
      setAvisos((prev) =>
        prev.map((item) =>
          item.id === editandoId
            ? { ...item, titulo, data, descricao }
            : item
        )
      );
    } else {
      setAvisos((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          titulo,
          data,
          descricao,
        },
      ]);
    }

    setModalVisible(false);
  };

  const excluirAviso = (id: string) => {
    Alert.alert(
      'Excluir Aviso',
      'Tem certeza que deseja excluir este aviso?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () =>
            setAvisos((prev) => prev.filter((item) => item.id !== id)),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botaoNovo} onPress={novoAviso}>
        <FontAwesome name="plus" size={18} color="white" />
        <Text style={styles.botaoTexto}>Criar Aviso</Text>
      </TouchableOpacity>

      <FlatList
        data={avisos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.titulo}>{item.titulo}</Text>

              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => editarAviso(item)}>
                  <FontAwesome name="edit" size={22} color="#2563ff" style={{ marginRight: 10 }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => excluirAviso(item.id)}>
                  <FontAwesome name="trash" size={22} color="red" />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.data}>{item.data}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
          </View>
        )}
      />

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalBg}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitulo}>
              {editandoId ? 'Editar Aviso' : 'Novo Aviso'}
            </Text>

            <TextInput
              placeholder="Título"
              style={styles.input}
              value={titulo}
              onChangeText={setTitulo}
            />

            <TextInput
              placeholder="Data (ex: 25/11/2025)"
              style={styles.input}
              value={data}
              onChangeText={setData}
            />

            <TextInput
              placeholder="Descrição"
              style={[styles.input, { height: 100 }]}
              multiline
              value={descricao}
              onChangeText={setDescricao}
            />

            <View style={styles.modalBotoes}>
              <TouchableOpacity
                style={[styles.btn, { backgroundColor: '#ccc' }]}
                onPress={() => setModalVisible(false)}
              >
                <Text>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn} onPress={salvarAviso}>
                <Text style={{ color: "white" }}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  botaoNovo: {
    backgroundColor: "#2563ff",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },

  botaoTexto: {
    color: "white",
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#2563ff',
  },

  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },

  data: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },

  descricao: {
    fontSize: 16,
    color: 'black',
    lineHeight: 22,
  },

  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  modalBox: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
  },

  modalTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: "center",
  },

  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },

  modalBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  btn: {
    backgroundColor: '#2563ff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
});
