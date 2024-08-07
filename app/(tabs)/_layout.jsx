import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import images from "../../constants/images";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={styles.tab_con}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={focused ? "black" : "#E3EAFC"}
        style={{ width: 20, height: 20 }}
      />
      <Text
        style={{
          //   fontFamily: focused ? "Play" : "OpenSans",
          fontSize: 10,
          color: "black",
        }}
      >
        {name}
      </Text>
    </View>
  );
};
const TabLayout = () => {
  return (
    <>
      <Tabs
        initialRouteName="index"
        screenOptions={{
          tabBarShowLabel: false,
          //   tabBarActiveTintColor: "#393381",
          //   tabBarInactiveTintColor: "#E3EAFC",
          tabBarStyle: {
            // backgroundColor: "#585880",
            position: "absolute",
            // borderTopWidth: 1,
            borderTopColor: "#e0e0e0",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            height: 104,
            padding: 24,
            shadowColor: "transparent",
            shadowOpacity: 0,
            overflow: "hidden",
          },
        }}
      >
        <Tabs.Screen
          name="leads"
          options={{
            title: "Leads",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.profileIcon}
                color={color}
                name="Leads"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="products"
          options={{
            title: "Products",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.products}
                color={color}
                name="Products"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="index"
          options={{
            title: "Dashboards",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View>
                <View style={[styles.tab_con, {}]}>
                  <Image
                    style={styles.img2}
                    source={images.bigYollow}
                    resizeMode="contain"
                  />
                  <Image
                    style={styles.img}
                    source={images.apps}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      fontFamily: "LeagueSpartanbold",
                      fontSize: 14,
                      color: "#0D1019",
                    }}
                  >
                    {"Dashboard"}
                  </Text>
                </View>
              </View>
            ),

            // href: "/brand",
            // href: {
            //   pathname: "/[brand]",
            //   params: {
            //     type: "main",
            //   },
            // },
          }}
        />

        <Tabs.Screen
          name="earnings"
          options={{
            title: "Earnings",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.earnings}
                color={color}
                name="Earnings"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="tasks"
          options={{
            title: "Tasks",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.task}
                color={color}
                name="Tasks"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  tab_con: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid",
    gap: 3,
  },
  img2: {
    width: 37,
    height: 37,
  },
  img: {
    position: "absolute",
    width: 20,
    height: 20,
    left: 22,
    top: 19,
  },
});
