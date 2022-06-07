import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(false);

  //   const { isLoading, login } = useContext(AuthContext);
  // const register = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
        confirmPassword,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>Full Name</Text>
        <TextInput
          style={styles.input}
          value={username}
          placeholder="Enter your name"
          onChangeText={(text) => setUsername(text)}
        />
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={(text) => setEmail(text)}
        />
        <Text>Password</Text>
        <TextInput
          value={password}
          style={styles.input}
          placeholder="Enter password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <Text>Confirm Password</Text>
        <TextInput
          value={confirmPassword}
          style={styles.input}
          placeholder="Enter password"
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
        />
        <Button title="Register" onPress={handleSubmit} />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text>Don,t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
          {error && (
            <Text style={{ color: "red", marginTop: "10px" }}>
              Something went wrong!!!!
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
  },
  input: {
    marginBottom: 12,
    height: 40,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: "blue",
  },
});
