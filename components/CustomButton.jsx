import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from "react-native";
import React from "react";

const CustomButton = ({ text, Icon, name }) => {
  return (
    <View style={styles.shadow_con}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{text}</Text>
        <Icon name={name} size={24} color="white" />
      </TouchableOpacity>
    </View>
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
  },
  shadow_con: {
    height: 52,
    borderRadius: 16,
    backgroundColor: "#8E2EEE",
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
