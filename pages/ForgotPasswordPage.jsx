import { Button, Text, TextInput } from "react-native-paper";
import { View } from "react-native";

export default function ForgotPasswordPage() {
  return (
    <View>
      <Text
        variant="headlineLarge"
        style={{ fontWeight: "bold", textAlign: "center", marginBottom: 50 }}
      >
        Forgot password?
      </Text>
      <TextInput
        style={{ height: 70 }}
        mode="outlined"
        activeOutlineColor="#000000FF"
        label="Your email"
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
        Reset Password
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
    </View>
  );
}
