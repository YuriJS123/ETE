import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Alert, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function Colegas() {
  const [mostrarModalFoto, setMostrarModalFoto] = useState(false);
  const [mostrarModalNome, setMostrarModalNome] = useState(false);
  const [fotoUsuario, setFotoUsuario] = useState('https://img.freepik.com/fotos-gratis/retrato-de-um-homem-bonito_23-2150770967.jpg?semt=ais_hybrid&w=740&q=80');
  const [nomeUsuario, setNomeUsuario] = useState("João Marcelo Azevêdo dos Santos");
  const [novoNome, setNovoNome] = useState(nomeUsuario);

  // 🔍 NOVO: estado da pesquisa
  const [pesquisa, setPesquisa] = useState("");

  const usuarioLogado = {
    id: '0',
    nome: nomeUsuario,
    foto: fotoUsuario,
    euMesmo: true
  };

  const outrosColegas = [
    { id: '1', nome: 'Mara Rúbia de Araújo Alves', foto: 'https://i.pinimg.com/736x/5b/44/e0/5b44e0ea827f91bed4998b02cdddeb31.jpg' },
    { id: '2', nome: 'Ravi Jaeger Cavalvanti Cyrillo', foto: 'https://static.vecteezy.com/ti/fotos-gratis/p2/25009030-bonito-jovem-homem-adolescente-moda-emocoes-luz-fundo-foto.jpg' },
    { id: '3', nome: 'Rafael Andrade Dutra dos Santos', foto: 'https://i.pinimg.com/564x/9b/86/42/9b864241d203df27e4d822780be8872f.jpg' },
    { id: '4', nome: 'Yuri José Ferreira dos Santos', foto: 'https://ai-previews.123rf.com/ai-txt2img/600nwm/d0097d99-6adc-4ea9-8e9b-bc084646fc1e.jpg' },
    { id: '5', nome: 'Filipe Filipe Carvalho Pereira', foto: 'https://s2-oglobo.glbimg.com/u6mPJO7B25EB45RagwuAHdoD-wk=/0x0:464x655/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/z/l/LLrKduT2KeZ4kX4VAmkw/whatsapp-image-2023-10-20-at-16.05.52.jpeg' },
    { id: '6', nome: 'Ana Beatriz Ribeiro da Silva', foto: 'https://media.istockphoto.com/id/512735004/pt/foto/retrato-de-uma-jovem-mulher-bonita.jpg?s=170667a&w=0&k=20&c=gKttPjE1yV_ihWLG7ph2jdDo5P6dJcnkkN9LT4Yz0aw=' },
  ];

  const totalAlunos = outrosColegas.length + 1;

  // 🔍 NOVO: filtrar alunos pela pesquisa
  const colegasFiltrados = outrosColegas.filter((aluno) =>
    aluno.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

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
      <Text style={styles.titulo}>2° ano Médio - {totalAlunos} alunos</Text>

      {/* 🔍 CAMPO DE PESQUISA */}
      <TextInput
        style={styles.campoPesquisa}
        placeholder="Pesquisar aluno..."
        placeholderTextColor="#9ca3af"
        value={pesquisa}
        onChangeText={setPesquisa}
      />

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* CARD DO PRÓPRIO USUÁRIO */}
        <View style={styles.cardUsuario}>
          <View style={styles.badgeVoce}>
            <Text style={styles.badgeVoceText}>Você</Text>
          </View>

          <View style={styles.fotoUsuarioContainer}>
            <Image 
              source={{ uri: usuarioLogado.foto }} 
              style={styles.fotoUsuario}
            />
            
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

          <TouchableOpacity
            style={styles.botaoEditarPerfil}
            onPress={() => setMostrarModalNome(true)}
          >
            <Ionicons name="create-outline" size={20} color="#2563ff" />
          </TouchableOpacity>
        </View>

        {/* SEPARADOR */}
        <View style={styles.separador}>
          <View style={styles.linhaSeparador} />
          <Text style={styles.textoSeparador}>COLEGAS</Text>
          <View style={styles.linhaSeparador} />
        </View>

        {/* LISTA DE COLEGAS FILTRADOS */}
        {colegasFiltrados.map((aluno) => (
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

        {/* Caso não encontre ninguém */}
        {colegasFiltrados.length === 0 && (
          <Text style={styles.nenhumResultado}>Nenhum aluno encontrado.</Text>
        )}
      </ScrollView>

      {/* MODAL DE FOTO */}
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

      {/* MODAL DE EDIÇÃO DE NOME */}
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

  titulo: { 
    fontSize: 24,
    textAlign: 'center', 
    fontWeight: '700', 
    color: '#000', 
    marginBottom: 10, 
    marginTop: 34 
  },

  // 🔍 Estilo da barra de pesquisa
  campoPesquisa: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },

  nenhumResultado: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6b7280',
    marginTop: 20,
  },

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
    backgroundColor: 'red',
    padding: 16,
    width: '50%',
    borderRadius: 12,
    alignItems: 'center',
  },

  textoBotaoCancelar: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
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
    borderColor: '#2563ff',
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
