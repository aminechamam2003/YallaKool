import React from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

export default function Header() {
return (
    <View style={styles.container}>
    <Text>Welcome Back</Text>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    backgroundColor: "pink",
    marginTop: 50,
    marginBottom: 20,
    flexDirection: "row", 
    justifyContent: "space-between", 
    paddingHorizontal: 20, 
    alignItems: "center",
    width: "100%",
    height: 50,
},
});
