import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Navbar from "../../components/Navbar";
import images from "../../constants/images";
import IconText from "../../components/Icon_Text";
import CustomButton from "../../components/CustomButton";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import CardItem from "../../components/CardItem";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    id: 1,
    name: "Jabe Doe",
    title: "Collect Document",
    date: "Last Action 6d ago",
  },
  {
    id: 2,
    name: "Jabe Doe",
    title: "Collect Document",
    date: "Last Action 6d ago",
  },
  {
    id: 3,
    name: "Jabe Doe",
    title: "Collect Document",
    date: "Last Action 6d ago",
  },
];

const index = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <ScrollView style={{ backgroundColor: "#F5F7FE" }}>
        <View style={styles.top_sec}>
          <Navbar />
          {/*  hero section */}
          <View style={styles.hero_con}>
            <View style={styles.hero_top}>
              <View>
                <Text style={[styles.bold_text, { marginBottom: 12 }]}>
                  Hey Pankaj,
                </Text>
                <Text style={styles.text}>
                  You have <Text style={styles.bold_text}>12 leads</Text>
                </Text>
              </View>
              <Image
                style={styles.img}
                source={images.arrow_right}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                marginVertical: 20,
                borderColor: "#EBEFFD",
              }}
            ></View>
            <View style={styles.hero_middle}>
              <IconText
                width={73}
                icon={images.earn}
                text1={"Earn"}
                text2="Incentives"
              />
              <IconText
                width={73}
                icon={images.grow}
                text1={"Grow"}
                text2="Knowledge"
              />
              <IconText
                icon={images.expand}
                text1={"Exapand your"}
                width={81}
                text2="network"
              />
            </View>
            <CustomButton text={"Add a Lead"} Icon={AntDesign} name={"plus"} />
          </View>
        </View>

        <View style={styles.middle_section}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <View style={styles.num_bg}>
                <Text style={{ fontWeight: "500" }}>06</Text>
              </View>
              <Text style={styles.bold_text_sm}>Action Required</Text>
            </View>
            <Link href={"/"} asChild>
              <TouchableOpacity style={styles.view_all}>
                <Text
                  style={{ fontSize: 14, fontWeight: "600", color: "#632E98" }}
                >
                  View all
                </Text>
                <MaterialIcons
                  name="keyboard-double-arrow-right"
                  size={17}
                  color="#632E98"
                />
              </TouchableOpacity>
            </Link>
          </View>

          <View style={{ marginTop: 30 }}>
            <FlatList
              //   style={{ , flex: 1 }}
              data={data}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View key={item.id} style={{ marginRight: 10 }}>
                  <CardItem item={item} />
                </View>
              )}
            />
          </View>

          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 40,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Text style={styles.bold_text_sm}>Explore Loan Products</Text>
            </View>
            <Link href={"/"} asChild>
              <TouchableOpacity style={styles.view_all}>
                <Text
                  style={{ fontSize: 14, fontWeight: "600", color: "#632E98" }}
                >
                  View all
                </Text>
                <MaterialIcons
                  name="keyboard-double-arrow-right"
                  size={17}
                  color="#632E98"
                />
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.explore_sec}>
            <View style={styles.explore_sec_big}>
              <Image
                style={styles.img_bigYellow}
                source={images.bigYollow2}
                resizeMode="contain"
              />
              <Text style={styles.bold_text_sm}>Home Loan</Text>
              <Text style={[styles.text, { fontSize: 14, color: "#6C748A" }]}>
                20+ Products
              </Text>
            </View>
            <View style={{ flexDirection: "column", flex: 1, gap: 5 }}>
              <View style={styles.explore_sec_small}>
                <Image
                  style={{ width: 24, height: 24 }}
                  source={images.yellow}
                  resizeMode="contain"
                />
                <View style={{}}>
                  <Text
                    style={[
                      styles.bold_text_sm,
                      { fontSize: 14, lineHeight: 16 },
                    ]}
                  >
                    Vehicle Loan
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      { fontSize: 12, color: "#6C748A", lineHeight: 14 },
                    ]}
                  >
                    16 Products
                  </Text>
                </View>
              </View>
              <View style={styles.explore_sec_small}>
                <Image
                  style={{ width: 24, height: 24 }}
                  source={images.blue}
                  resizeMode="contain"
                />
                <View style={{}}>
                  <Text
                    style={[
                      styles.bold_text_sm,
                      { fontSize: 14, lineHeight: 16 },
                    ]}
                  >
                    Commercial Loan
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      { fontSize: 12, color: "#6C748A", lineHeight: 14 },
                    ]}
                  >
                    16 Products
                  </Text>
                </View>
              </View>
              <View style={styles.explore_sec_small}>
                <Image
                  style={{ width: 24, height: 24 }}
                  source={images.green}
                  resizeMode="contain"
                />
                <View style={{}}>
                  <Text
                    style={[
                      styles.bold_text_sm,
                      { fontSize: 14, lineHeight: 16 },
                    ]}
                  >
                    Personal Loan
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      { fontSize: 12, color: "#6C748A", lineHeight: 14 },
                    ]}
                  >
                    16 Products
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.last_sec}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                height: 130,
              }}
            >
              <Text style={[styles.text_white, {}]}>CIBIL CHECK</Text>
              <View>
                <Text style={[styles.text_white, { fontSize: 17 }]}>
                  Check and share yout
                </Text>
                <Text style={[styles.text_white, { fontSize: 17 }]}>
                  leads' credit scores.
                </Text>
              </View>
              <View style={styles.shadow_con}>
                <TouchableOpacity style={styles.button}>
                  <Text style={[styles.text, { color: "white" }]}>
                    Check CIBIL
                  </Text>
                  <AntDesign name={"plus"} size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
            <Image
              style={{ width: 66, height: 66 }}
              source={images.black}
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              height: 60,
              borderRadius: 16,
              backgroundColor: "#0D1019",
              justifyContent: "flex-start",
              paddingHorizontal: 20,
              alignItems: "center",
              marginTop: 20,
              flexDirection: "row",
            }}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={images.star}
              resizeMode="contain"
            />
            <Text style={[styles.text, { fontSize: 12, color: "white" }]}>
              This check shows if you lead is eligible for a loan.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  hero_con: {
    height: 280,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#D4DBF0",
    marginTop: 40,
    padding: 20,
    marginHorizontal: 20,
  },
  top_sec: {
    backgroundColor: "white",
    paddingBottom: 40,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  img: {
    width: 48,
    height: 48,
    paddingVertical: 6,
  },
  text: {
    fontFamily: "LeagueSpartan",
    fontSize: 16,
    lineHeight: 19.2,
  },
  text_white: {
    fontFamily: "LeagueSpartan",
    fontSize: 16,
    color: "white",
  },
  bold_text: {
    fontFamily: "LeagueSpartanbold",
    fontSize: 18,
    lineHeight: 21.6,
  },
  bold_text_sm: {
    fontFamily: "LeagueSpartanbold",
    fontSize: 16,
    lineHeight: 20.6,
  },
  hero_top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hero_middle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  middle_section: {
    paddingHorizontal: 30,
    marginTop: 40,
  },
  num_bg: {
    height: 24,
    width: 24,
    borderRadius: 40,
    backgroundColor: "#FFF9E3",
    justifyContent: "center",
    alignItems: "center",
  },
  view_all: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#632E98",
  },
  explore_sec: {
    marginTop: 30,
    flexDirection: "row",
    gap: 25,

    flex: 1,
  },
  explore_sec_big: {
    backgroundColor: "white",
    width: 154,
    height: 180,
    borderRadius: 16,
    padding: 20,
    paddingTop: 50,
  },
  img_bigYellow: {
    width: 60,
    height: 60,
    // paddingVertical: 6,
    marginBottom: 12,
  },
  explore_sec_small: {
    backgroundColor: "white",
    flexDirection: "row",
    width: "100%",
    height: 55,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 12,
    gap: 8,
  },
  last_sec: {
    marginTop: 40,
    padding: 24,
    height: 383,
    backgroundColor: "#18202F",
    marginBottom: -20,
  },
  button: {
    backgroundColor: "#18202F",
    width: 161,
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
    backgroundColor: "#D2a6FF",
  },
});
