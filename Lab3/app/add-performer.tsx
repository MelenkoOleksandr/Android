import { router, useLocalSearchParams } from "expo-router";
import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { projectsContext } from "./_layout";

const AddPerformer = () => {
  const { projectId } = useLocalSearchParams();
  const { projects, setProjects } = useContext(projectsContext);

  const [code, setCode] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddPerformer = () => {
    const newProjects = projects.map((project) => {
      if (project.id === projectId) {
        return {
          ...project,
          performers: [
            ...project.performers,
            {
              id: String(project.performers.length + 1),
              code,
              companyName,
              phone,
            },
          ],
        };
      }
      return project;
    });

    setProjects(newProjects);
    router.back();
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Add Performer</Text>
      <TextInput
        placeholder="Code"
        value={code}
        onChangeText={setCode}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Company Name"
        value={companyName}
        onChangeText={setCompanyName}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        style={styles.textInput}
      />
      <Button title="Add Performer" onPress={handleAddPerformer} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  textInput: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    color: "#333",
    marginVertical: 10,
  },
  focusedInput: {
    borderColor: "#4CAF50",
    backgroundColor: "#ffffff",
  },
  errorInput: {
    borderColor: "#F44336",
  },
});

export default AddPerformer;
