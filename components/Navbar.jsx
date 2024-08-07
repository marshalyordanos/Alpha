import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import images from "../constants/images";

const Navbar = () => {
  return (
    <View style={styles.Nav_con}>
      <TouchableOpacity>
        <Image
          style={styles.img}
          source={images.profile}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.img}
          source={images.message}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  Nav_con: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  img: {
    width: 32,
    height: 32,
  },
});
