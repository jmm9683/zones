import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  SafeAreaView,
  Animated,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { interpolate } from "react-native-reanimated";
// import Image from "react-native-scalable-image";

const { width, height } = Dimensions.get("window");

const scalarWidth = width / 2;
const scalarHeight = height * 0.25;
const IMAGE_SIZE = scalarWidth * 0.9 + 2 * SPACING;
const SPACING = 20;
const ENTRIES = [
  {
    title: "Test",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "",
    uri: require("./../assets/IMG_2156.jpeg"),
    id: "1",
  },
  {
    title: "Test",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0735.jpeg",
    uri: require("./../assets/IMG_0735.jpeg"),
    id: "3",
  },
  {
    title: "Test",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
    uri: require("./../assets/IMG_0657.jpeg"),
    id: "4",
  },
];
const ENTRIES1 = [
  {
    title: "Test",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "",
    uri: require("./../assets/IMG_2156.jpeg"),
    id: "1",
  },
  {
    title: "Test",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0735.jpeg",
    uri: require("./../assets/IMG_0735.jpeg"),
    id: "3",
  },
  {
    title: "Test",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
    uri: require("./../assets/IMG_0657.jpeg"),
    id: "4",
  },
  {
    title: "Test",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
    uri: require("./../assets/IMG_0657.jpeg"),
    id: "41",
  },
  {
    title: "Test",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
    uri: require("./../assets/IMG_0657.jpeg"),
    id: "411",
  },
  {
    title: "Test",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
    uri: require("./../assets/IMG_0657.jpeg"),
    id: "41111",
  },
  {
    title: "Test",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
    uri: require("./../assets/IMG_0657.jpeg"),
    id: "411111",
  },
  {
    title: "Test",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
    uri: require("./../assets/IMG_0657.jpeg"),
    id: "4111111",
  },
  {
    title: "Test",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
    uri: require("./../assets/IMG_0657.jpeg"),
    id: "41111111",
  },
  {
    title: "Test",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
    uri: require("./../assets/IMG_0657.jpeg"),
    id: "411111111",
  },
  {
    title: "Test",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
    uri: require("./../assets/IMG_0657.jpeg"),
    id: "4111111111",
  },
  {
    title: "Test",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
    uri: require("./../assets/IMG_0657.jpeg"),
    id: "41111111111",
  },
  {
    title: "Test",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
    uri: require("./../assets/IMG_0657.jpeg"),
    id: "411111111111",
  },
  {
    title: "Test",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
    uri: require("./../assets/IMG_0657.jpeg"),
    id: "4111111111111",
  },
  {
    title: "Test",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
    uri: require("./../assets/IMG_0657.jpeg"),
    id: "41111111111111",
  },
];

const albums = [
  {
    title: "Nevada",
    images: ENTRIES1,
    id: "1",
  },
  {
    title: "Utah",
    images: ENTRIES,
    id: "2",
  },
  {
    title: "Idaho",
    images: ENTRIES1,
    id: "3",
  },
  {
    title: "Idaho",
    images: ENTRIES,
    id: "4",
  },
];

const AlbumItem = ({ item, index, scrollY }) => {};

export default function AlbumsPage() {
  const scrollY = React.useRef(Animated.Value(0)).current;
  let navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        data={albums}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const ITEM_SIZE = (width / 2) * 0.9 + 2 * SPACING;
          const inputRange = [
            -1,
            0,
            IMAGE_SIZE * index,
            IMAGE_SIZE * (index + 2),
          ];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Album", { album: item })}
              style={{ margin: SPACING }}
            >
              <Animated.View
                style={[styles.albumCoverContainer, { transform: [{ scale }] }]}
              >
                <View style={styles.item}>
                  <View
                    style={{
                      width: scalarWidth * 0.9,
                      height: scalarWidth * 0.9,
                    }}
                  />
                  <View
                    style={[
                      styles.shadow,
                      styles.backgroundCard,
                      {
                        left: "2%",
                        top: "0%",
                      },
                    ]}
                  />
                  <View
                    style={[
                      styles.shadow,
                      styles.backgroundCard,
                      {
                        left: "1%",
                        top: "1%",
                      },
                    ]}
                  />
                  <View style={[styles.shadow, { top: "2%" }]}>
                    <Image source={item.images[0].uri} style={styles.image} />
                  </View>
                </View>
                <Text style={styles.title}>{item.title}</Text>
              </Animated.View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
        numColumns={1}
        initialNumToRender={6}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.66)",
  },
  title: {
    position: "absolute",
    top: "55%",
    color: "white",
    fontFamily: "System",
    fontSize: 25,
    fontWeight: "400",
    alignSelf: "center",
    textAlign: "center",
  },
  albumCoverContainer: {
    flex: 1,
    height: scalarWidth,
    width: scalarWidth,
    justifyContent: "center",
    alignSelf: "center",
    // paddingBottom: 50,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  image: {
    // position: "absolute",
    height: scalarWidth * 0.9,
    width: scalarWidth * 0.9,
    // alignSelf: "center",
    // aspectRatio: 1,
    resizeMode: "contain",
    borderWidth: 5,
    borderColor: "white",
  },
  backgroundCard: {
    width: scalarWidth * 0.9,
    height: scalarWidth * 0.9,
    backgroundColor: "white",
  },
  shadow: {
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: -1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    backgroundColor: "white",
  },
});

// export default AlbumsPage;
