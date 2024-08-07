import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import images from "../constants/images";

const CardItem = ({ item }) => {
  return (
    <View style={styles.con}>
      <Text style={styles.bold_text}>{item.name}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 30,
        }}
      >
        <Image style={styles.img} source={images.docs} resizeMode="contain" />
        <Text style={[styles.bold_text, { fontSize: 16 }]}>{item.title}</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          marginTop: 20,
          marginBottom: 10,
          borderColor: "#EBEFFD",
        }}
      ></View>
      <Text style={styles.text}>{item.date}</Text>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  con: {
    backgroundColor: "white",
    width: 280,
    height: 188,
    borderRadius: 24,
    padding: 20,
    marginRight: 20,
  },
  bold_text: {
    fontFamily: "LeagueSpartanbold",
    fontSize: 18,
    lineHeight: 21.6,
  },
  text: {
    fontFamily: "LeagueSpartan",
    fontSize: 12,
    lineHeight: 14.4,
  },
});
