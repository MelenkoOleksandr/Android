import { router } from "expo-router";
import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { projectsContext } from "./_layout";

const CreateProject = () => {
  const { projects, setProjects } = useContext(projectsContext);

  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [hours, setHours] = useState("");
  const [sum, setSum] = useState("");

  const handleCreateProject = () => {
    setProjects([
      ...projects,
      {
        id: String(projects.length + 1),
        date,
        name,
        description,
        price: Number(price),
        hours: Number(hours),
        sum: Number(sum),
        performers: [],
      },
    ]);
    router.back();
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Create New Project</Text>
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={setDate}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.textInput}
      />
      <TextInput
        placeholder="Hours"
        value={hours}
        onChangeText={setHours}
        keyboardType="numeric"
        style={styles.textInput}
      />
      <TextInput
        placeholder="Sum"
        value={sum}
        onChangeText={setSum}
        keyboardType="numeric"
        style={styles.textInput}
      />
      <Button title="Create Project" onPress={handleCreateProject} />
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
  inputContainer: {
    marginVertical: 10,
  },
  inputLabel: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
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
  },
  focusedInput: {
    borderColor: "#4CAF50",
    backgroundColor: "#ffffff",
  },
  errorInput: {
    borderColor: "#F44336",
  },
  inputIcon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
});

export default CreateProject;
