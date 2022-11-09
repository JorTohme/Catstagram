import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Keyboard,
  Pressable,
} from "react-native";

const LogIn = () => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        isKeyboardVisible && { justifyContent: "inherit", marginTop: 0 },
      ]}
    >
      <Image style={styles.logo} source={require("./Catstagram-logo.png")} />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Ingrese aquí su correo"
          value={user}
          setValue={setUser}
        />
        <Input
          placeholder="Ingrese aquí su contraseña"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <Text style={styles.forgetPassword}>¿Olvidaste tu contraseña?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const Input = ({ placeholder, value, setValue, secureTextEntry = false }) => (
  <View style={styles.input}>
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={setValue}
      value={value}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -200,
  },

  logo: {
    width: 230,
    resizeMode: "contain",
  },

  inputContainer: {
    marginTop: -70,
    width: "100%",
  },

  input: {
    paddingBottom: 30,
  },

  textInput: {
    backgroundColor: "#F9F9F9",
    padding: 10,
    width: "90%",
    height: 42,
    borderRadius: 5,
    borderColor: "#B1B1B1",
    borderWidth: 0.2,
    marginBottom: -17,
    color: "#4D4D4D",
    marginLeft: "auto",
    marginRight: "auto",
  },

  inputLabel: {
    fontSize: 20,
    paddingBottom: 10,
  },

  forgetPassword: {
    textAlign: "right",
    width: "90%",
    fontSize: 13,
  },

  buttonContainer: {
    marginTop: 30,
    width: "90%",
    height: 44,
    justifyContent: "center",
    backgroundColor: "#55C9FF",
    borderRadius: 7,
  },

  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});

export default LogIn;
