import { Button, Text, TextInput } from "react-native-paper";
import { View } from "react-native";

export default function SignInPage() {
  return (
    <View>
      <Text
        variant="headlineLarge"
        style={{ fontWeight: "bold", textAlign: "center", marginBottom: 50 }}
      >
        Sign in to your account
      </Text>
      <TextInput
        style={{ height: 70 }}
        mode="outlined"
        activeOutlineColor="#000000FF"
        label="Email"
      ></TextInput>
      <TextInput
        style={{ height: 70 }}
        mode="outlined"
        activeOutlineColor="#000000FF"
        label="Password"
      ></TextInput>
      <Text
        variant="labelLarge"
        style={{
          textAlign: "right",
          textDecorationLine: "underline",
          marginTop: 20,
        }}
      >
        Forgot your password?
      </Text>
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
        Sign in
      </Button>
    </View>
  );
}
