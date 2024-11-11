import { router } from "expo-router";
import { useContext } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { projectsContext } from "./_layout";

export default function Index() {
  const { projects } = useContext(projectsContext);

  return (
    <View>
      <View
        style={{
          padding: 20,
          marginBottom: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginBottom: 10,
          }}
        >
          List of Projects
        </Text>
        <View style={{}}>
          <Button
            color="green"
            title="New Project"
            onPress={() => router.navigate("/create-project")}
          />
        </View>
      </View>

      <FlatList
        data={projects}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              borderBottomWidth: 1,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginBottom: 10,
              }}
            >
              {item.name}
            </Text>
            <Button
              title="View Project"
              onPress={() =>
                router.navigate({
                  pathname: "/project",
                  params: { projectId: item.id },
                })
              }
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
