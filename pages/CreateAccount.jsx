import { View } from "react-native";
import { Button, IconButton, Text, TextInput } from "react-native-paper";

export default function CreateAccount() {
  return (
    <View style={{ marginHorizontal: 10, color: "#000000" }}>
      <IconButton icon="arrow-left" />
      <Text
        variant="headlineLarge"
        style={{ fontWeight: "bold", textAlign: "center", marginBottom: 50 }}
      >
        Create an account
      </Text>
      <TextInput
        style={{ height: 70 }}
        mode="outlined"
        activeOutlineColor="#000000FF"
        label="Your full name"
      ></TextInput>
      <TextInput
        style={{ height: 70 }}
        mode="outlined"
        activeOutlineColor="#000000FF"
        label="Your email"
      ></TextInput>
      <TextInput
        style={{ height: 70 }}
        mode="outlined"
        activeOutlineColor="#000000FF"
        label="Create a strong password"
      ></TextInput>
      <Button
        buttonColor={"#2C353D"}
        style={{
          borderRadius: 10,
          minWidth: "100%",
          height: 70,
          marginTop: 10,
          padding: 15,
        }}
        labelStyle={{
          textAlignVertical: "center",
          color: "#ffffff",
        }}
      >
        Create an account
      </Button>
      <Text variant="labelLarge" style={{ textAlign: "center", marginTop: 20 }}>
        Already have an account?
        <Text
          variant="labelLarge"
          style={{
            color: "#094cb0",
          }}
        >
          {"     "}
          Sign in
        </Text>
      </Text>
      <Text
        variant="labelLarge"
        style={{ textAlign: "center", marginTop: 20, color: "#c4c3c3" }}
      >
        By signing up you agree to our{"  "}
        <Text
          variant="labelLarge"
          style={{ textDecorationLine: "underline", color: "#c4c3c3" }}
        >
          Privacy Policy and Terms
        </Text>
      </Text>
    </View>
  );
}
