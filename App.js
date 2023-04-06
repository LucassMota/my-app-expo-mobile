import { Provider as PaperProvider } from "react-native-paper";
import { useTheme } from "react-native-paper";
import ProjectsList from "./pages/ProjectsList";
import InitialPage from "./pages/InitialPage";
import CreateAccount from "./pages/CreateAccount";
import { View } from "react-native";

export default function App() {
  const theme = useTheme();

  return (
    <PaperProvider theme={theme}>
      <View style={{ marginTop: 20 }}>
        {/*<ProjectsList />*/}
        {/*<InitialPage />*/}
        <CreateAccount />
      </View>
    </PaperProvider>
  );
}
