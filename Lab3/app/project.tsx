import { router, useLocalSearchParams } from "expo-router";
import React, { useContext } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { projectsContext } from "./_layout";

const ProjectPage = () => {
  const { projectId } = useLocalSearchParams();
  const { projects } = useContext(projectsContext);

  console.log("projectId", projectId);

  const project = projects.find((p) => p.id === projectId);
  const performers = project?.performers || [];

  const handleAddPerformer = () => {
    router.navigate({
      pathname: "/add-performer",
      params: { projectId },
    });
  };

  const renderPerformer = ({ item }: any) => (
    <View style={styles.performerContainer}>
      <Text style={styles.performerText}>Code: {item.code}</Text>
      <Text style={styles.performerText}>Company: {item.companyName}</Text>
      <Text style={styles.performerText}>Phone: {item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.projectTitle}>Project: {project.name}</Text>
      <Text style={styles.projectText}>Description: {project.description}</Text>
      <Text style={styles.projectText}>Price: ${project.price}</Text>
      <Text style={styles.projectText}>Hours: {project.hours}</Text>
      <Text style={styles.projectText}>Sum: ${project.sum}</Text>

      <Text style={styles.performersTitle}>Performers</Text>
      {performers.length === 0 && <Text>No performers yet</Text>}
      <FlatList
        data={performers}
        renderItem={renderPerformer}
        keyExtractor={(item) => item.id}
      />

      <Button title="Add Performer" onPress={handleAddPerformer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  projectTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  projectText: {
    fontSize: 16,
    marginBottom: 5,
  },
  performersTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  performerContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 10,
  },
  performerText: {
    fontSize: 16,
    color: "#333",
  },
});

export default ProjectPage;
