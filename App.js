import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,TextInput,Pressable,Alert} from 'react-native';

export default function App() {
  const bg_image = { uri: "https://file.hstatic.net/1000379731/file/phi_hanh_gia___10__2533c934917a4260b456393db104b041.jpg" };
  return (
    <View style={styles.container}>
      <ImageBackground source={bg_image} style={styles.bg_image}>
        <View style={styles.overlay} />
        <Text style={styles.title}>BANDIO</Text>

        <View style={styles.from_input}>
          <TextInput placeholder="Username" placeholderTextColor="white" style={styles.textInput} />
          <TextInput placeholder="Password" placeholderTextColor="white" secureTextEntry={true} style={styles.textInput} />
        </View>

        <View style={styles.btnContainer}>
          <Pressable style={styles.btn} onPress={() => Alert.alert('LOGIN')}>
            <Text style={styles.btn__text}>LOGIN</Text>
          </Pressable>
        </View>
        <View style={styles.question}>
          <Text style={styles.txt_what}>Don't have an account? <Text style={styles.register}>Sign up</Text></Text>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Helvetica',
  },
  bg_image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 1,
    height: '100%',
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#c7090989',
  },
  textInput: {
    height: 40,
    borderColor: "white",
    borderBottomWidth: 1,
    color: 'white',
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 60
  },
  from_input: {
    padding:40,
  },
  btnContainer: {
    width:'100%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#c70909',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  btn__text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  question: {
    marginTop: 40,
  },
  txt_what: {
    color: "#9a9a9a",
    textAlign: 'center',
  },
  register: {
    color: 'white',
  }
});
