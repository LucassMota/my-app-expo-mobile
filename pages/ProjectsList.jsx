import { List, Text, Avatar } from "react-native-paper";
import { ScrollView, View } from "react-native";

export default function ProjectsList() {
  return (
    <View>
      <Text variant="displayMedium" style={{ textAlign: "center" }}>
        Projects
      </Text>
      <ScrollView>
        {myArray.map((o, key) => {
          return (
            <List.Item
              key={key}
              title={myTitle(o.projectId)}
              description={myDescription(o.projectName, o.date)}
              style={{ marginHorizontal: 20 }}
              left={() => (
                <Avatar.Icon
                  size={24}
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "#e7e7e7",
                  }}
                  icon="image"
                />
              )}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const myArray = [
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
  { projectId: 1332, projectName: "Project Name", date: "Nov 4 2022" },
];

const myTitle = (id) => {
  return <Text style={{ color: "#545252" }}>#{id} project number</Text>;
};

const myDescription = (projectName, date) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text variant="headlineSmall">{projectName}</Text>
      <Text style={{ color: "#c7c3c3" }}>{date}</Text>
    </View>
  );
};
