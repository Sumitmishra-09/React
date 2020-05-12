import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
export default function App() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [inputList, setInputList] = useState([]);
  //const [selectedState, setSelectedState] = useState("DELHI");

  const onPress = () => {
    const data = {
      username: username,
      age: age,
      mobile: mobile,
      id: Math.random(1000),
    };
    const bool = validate();

    if (bool === true) {
      setInputList((updatedData) => [...updatedData, data]);
      setUsername("");
      setAge("");
      setMobile("");
    } else {
      alert("enter valid phone number");
    }
  };

  const validate = () => {
    const reg = /^[0]?[789]\d{9}$/;
    const mob = mobile;
    if (reg.test(mob) === false) {
      setMobile("");
      return false;
    } else {
      return true;
    }
    return true;
  };

  const handleDelete = (id) => {
    const filteredData = inputList.filter((item) => item.id !== id);

    setInputList(filteredData);
  };
  const handleEdit = (id) => {
    const filteredData = inputList.filter((item) => item.id !== id);

    setInputList(filteredData);

    const data = inputList.find((item) => item.id === id);

    setUsername(data.username);
    setAge(data.age);
    setMobile(data.mobile);
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={{
            padding: 10,
            marginTop: "10px",
          }}
        />
        <TextInput
          placeholder="age"
          value={age}
          onChangeText={(text) => setAge(text)}
          style={{
            padding: 10,
            marginTop: "10px",
          }}
        />
        <TextInput
          placeholder="mobile"
          value={mobile}
          style={{
            padding: 10,
            marginTop: "10px",
            marginBottom: "10px",
            alignItems: "center",
          }}
          onChangeText={(text) => setMobile(text)}
        />

        <Button
          title="save"
          style={{ padding: 10, marginLeft: "4px" }}
          onPress={onPress}
        />
      </View>
      <View>
        <FlatList
          data={inputList}
          renderSectionHeader
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => handleDelete(item.id)}
                styles={styles.container}
              >
                <Text>{item.username}</Text>
                <Text>{item.age}</Text>
                <Text>{item.mobile}</Text>
                <Button onPress={() => handleEdit(item.id)} title="Edit" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
