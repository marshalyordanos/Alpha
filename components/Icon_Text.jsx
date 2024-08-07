import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const IconText = ({ icon, text1, text2, width }) => {
  return (
    <View style={[styles.con, { width: width }]}>
      <Image style={styles.img} source={icon} resizeMode="contain" />
      <Text style={styles.text}>{text1}</Text>
      <Text style={styles.text}>{text2}</Text>
    </View>
  );
};

export default IconText;

const styles = StyleSheet.create({
  con: {
    height: 74,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  text: {
    fontFamily: "LeagueSpartan",
    fontSize: 14,
    lineHeight: 19.2,
  },
});
