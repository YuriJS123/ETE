import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Alert, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function Colegas() {
  const [mostrarModalFoto, setMostrarModalFoto] = useState(false);
  const [mostrarModalNome, setMostrarModalNome] = useState(false);
  const [fotoUsuario, setFotoUsuario] = useState('https://i.pravatar.cc/150?img=12');
  const [nomeUsuario, setNomeUsuario] = useState("João Marcelo");
  const [novoNome, setNovoNome] = useState(nomeUsuario);

  // Informações do usuário logado
  const usuarioLogado = {
    id: '0',
    nome: nomeUsuario,
    foto: fotoUsuario,
    euMesmo: true
  };

  // Outros alunos da turma
  const outrosColegas = [
    { id: '1', nome: 'Ana Silva', foto: 'https://i.pravatar.cc/150?img=1' },
    { id: '2', nome: 'Carlos Oliveira', foto: 'https://i.pravatar.cc/150?img=3' },
    { id: '3', nome: 'Beatriz Santos', foto: 'https://i.pravatar.cc/150?img=5' },
    { id: '4', nome: 'Daniel Costa', foto: 'https://i.pravatar.cc/150?img=7' },
    { id: '5', nome: 'Eduarda Lima', foto: 'https://i.pravatar.cc/150?img=9' },
    { id: '6', nome: 'Felipe Rocha', foto: 'https://i.pravatar.cc/150?img=11' },
  ];

  const totalAlunos = outrosColegas.length + 1;

  const handleSelecionarFoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos de permissão para acessar suas fotos.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setFotoUsuario(result.assets[0].uri);
      setMostrarModalFoto(false);
    }
  };

  const handleTirarFoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos de permissão para usar a câmera.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setFotoUsuario(result.assets[0].uri);
      setMostrarModalFoto(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View >
        
        <Text style={styles.titulo}>3° Info Manhã - {totalAlunos} alunos</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        
        {/* Card do Próprio Usuário */}
        <View style={styles.cardUsuario}>
          <View style={styles.badgeVoce}>
            <Text style={styles.badgeVoceText}>Você</Text>
          </View>

          <View style={styles.fotoUsuarioContainer}>
            <Image 
              source={{ uri: usuarioLogado.foto }} 
              style={styles.fotoUsuario}
            />
            
            {/* Botão de editar foto */}
            <TouchableOpacity
              style={styles.botaoCameraUsuario}
              onPress={() => setMostrarModalFoto(true)}
            >
              <Ionicons name="camera" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.infoUsuario}>
            <Text style={styles.nomeUsuario}>{usuarioLogado.nome}</Text>
          </View>

          {/* Botão editar nome */}
          <TouchableOpacity
            style={styles.botaoEditarPerfil}
            onPress={() => setMostrarModalNome(true)}
          >
            <Ionicons name="create-outline" size={20} color="#2563ff" />
          </TouchableOpacity>
        </View>

        {/* Separador */}
        <View style={styles.separador}>
          <View style={styles.linhaSeparador} />
          <Text style={styles.textoSeparador}>OUTROS COLEGAS</Text>
          <View style={styles.linhaSeparador} />
        </View>

        {/* Lista de outros colegas */}
        {outrosColegas.map((aluno) => (
          <View key={aluno.id} style={styles.cardColega}>
            <View style={styles.fotoContainer}>
              <Image 
                source={{ uri: aluno.foto }} 
                style={styles.foto}
              />
            </View>
            
            <View style={styles.infoContainer}>
              <Text style={styles.nome}>{aluno.nome}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Modal de Alterar Foto */}
      <Modal
        visible={mostrarModalFoto}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setMostrarModalFoto(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitulo}>Alterar Foto de Perfil</Text>
            
            <View style={styles.previewContainer}>
              <Image 
                source={{ uri: usuarioLogado.foto }} 
                style={styles.fotoPreview}
              />
            </View>
            
            <View style={styles.botoesModal}>
              <TouchableOpacity
                style={styles.botaoOpcao}
                onPress={handleTirarFoto}
              >
                <Ionicons name="camera" size={24} color="#2563ff" />
                <Text style={styles.textoBotaoOpcao}>Tirar Foto</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botaoOpcao}
                onPress={handleSelecionarFoto}
              >
                <Ionicons name="images" size={24} color="#2563ff" />
                <Text style={styles.textoBotaoOpcao}>Escolher da Galeria</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.botaoCancelar}
              onPress={() => setMostrarModalFoto(false)}
            >
              <Text style={styles.textoBotaoCancelar}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      {/* Modal Editar Nome */}
      <Modal
        visible={mostrarModalNome}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setMostrarModalNome(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitulo}>Editar Nome</Text>

            <TextInput
              style={styles.inputNome}
              value={novoNome}
              onChangeText={setNovoNome}
              placeholder="Digite seu nome"
              placeholderTextColor="#9ca3af"
            />

            <View style={styles.botoesSalvarCancelar}>
              <TouchableOpacity
                style={styles.botaoSalvar}
                onPress={() => {
                  setNomeUsuario(novoNome);
                  setMostrarModalNome(false);
                }}
              >
                <Text style={styles.textoBotaoSalvar}>Salvar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botaoCancelar}
                onPress={() => setMostrarModalNome(false)}
              >
                <Text style={styles.textoBotaoCancelar}>Cancelar</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },



  titulo: { fontSize: 24,textAlign: 'center', fontWeight: '700', color: '#000', marginBottom: 4, marginTop:34 },
  

  scrollView: { flex: 1 },
  contentContainer: { padding: 16 },

  cardUsuario: {
    backgroundColor: '#e0f2fe',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2563ff',
    elevation: 4,
    marginBottom: 16,
    position: 'relative',
  },

  badgeVoce: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#2563ff',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },

  badgeVoceText: { color: '#fff', fontSize: 11, fontWeight: '700' },

  fotoUsuarioContainer: { position: 'relative', marginRight: 16 },

  fotoUsuario: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#2563ff',
  },

  botaoCameraUsuario: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: '#2563ff',
    borderRadius: 16,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },

  infoUsuario: { flex: 1 },
  nomeUsuario: { fontSize: 18, fontWeight: '700', color: '#1f2937' },

  botaoEditarPerfil: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
  },

  separador: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },

  linhaSeparador: { flex: 1, height: 1, backgroundColor: '#d1d5db' },
  textoSeparador: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6b7280',
    marginHorizontal: 12,
  },

  cardColega: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    marginBottom: 12,
  },

  fotoContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    overflow: 'hidden',
    backgroundColor: '#e5e7eb',
    marginRight: 16,
  },

  foto: { width: '100%', height: '100%' },

  infoContainer: { flex: 1 },
  nome: { fontSize: 17, fontWeight: '600', color: '#1f2937' },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    elevation: 8,
  },

  modalTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 20,
    textAlign: 'center',
  },

  previewContainer: { alignItems: 'center', marginBottom: 24 },

  fotoPreview: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#2563ff',
  },

  botoesModal: { gap: 12, marginBottom: 16 },

  botaoOpcao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f9ff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2563ff',
  },

  textoBotaoOpcao: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2563ff',
    marginLeft: 12,
  },

  botaoCancelar: {
    backgroundColor: '#f3f4f6',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  textoBotaoCancelar: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6b7280',
  },

  inputNome: {
    width: '100%',
    backgroundColor: '#f3f4f6',
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },

  botoesSalvarCancelar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  botaoSalvar: {
    backgroundColor: '#2563ff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: '48%',
    alignItems: 'center',
  },

  textoBotaoSalvar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
