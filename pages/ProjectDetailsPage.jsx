import { Text, Divider } from "react-native-paper";
import { Image, View } from "react-native";
export default function ProjectDetailsPage() {
  return (
    <>
      <Text
        variant="titleLarge"
        style={{ textAlign: "center", fontWeight: "bold" }}
      >
        Projects
      </Text>
      <Image
        style={{
          height: 160,
          width: "100%",
          backgroundColor: "#e3e2e2",
          marginVertical: 20,
        }}
        source={{ uri: "https://reactnative.dev/img/header_logo.svg" }}
      ></Image>
      <View style={{ flexDirection: "column" }}>
        <Text variant="labelLarge">#1332 project number</Text>
        <Text
          variant="titleLarge"
          style={{ fontWeight: "bold", marginBottom: 20 }}
        >
          Project Name
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Start date</Text>
        <Text>Jun 12, 2022</Text>
      </View>
      <Divider style={{ marginVertical: 10 }} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>End date</Text>
        <Text>Nov 4, 2022</Text>
      </View>
      <Divider style={{ marginVertical: 10 }} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Address</Text>
        <Text>1405 38th St. W. Billings MT 59102</Text>
      </View>
      <Divider style={{ marginVertical: 10 }} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Primary Contact</Text>
        <Text>Grant Wilson</Text>
      </View>
      <Divider />
      <Divider style={{ marginVertical: 10 }} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Primary Contact Phone</Text>
        <Text style={{ textDecorationLine: "underline" }}>(406) 123-4567</Text>
      </View>
    </>
  );
}
