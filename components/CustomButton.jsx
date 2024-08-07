import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const CustomButton = ({ text, Icon, name }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
      <Icon name={name} size={24} color="white" />
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#18202F",
    height: 48,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#8E2EEE",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 4,
    gap: 8,
  },
  text: {
    color: "white",
    fontFamily: "LeagueSpartanbold",
    fontSize: 18,
    lineHeight: 21.6,
  },
  img: {
    width: 24,
    height: 24,
  },
});
