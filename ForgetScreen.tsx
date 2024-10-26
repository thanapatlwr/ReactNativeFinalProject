import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
const ForgetScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const handleResetPassword = () => {
    console.log("Reset password for:", email);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("./assets/sleepIcon.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labeText}>Email</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.cancelButton}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleResetPassword}
            style={styles.resetButton}
          >
            <Text style={styles.buttonText2}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#88caff",
  },
  imageContainer: {
    marginBottom: 10,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: "contain",
  },
  inputContainer: {
    height: 170,
    width: "80%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelButton: {
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  resetButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
  buttonText2: {
    color: "white",
    fontWeight: "bold",
  },
  labeText:{
    color: 'black',
    fontSize: 15,
    margin: 10,
  }
});
export default ForgetScreen;