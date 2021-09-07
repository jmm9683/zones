import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
// import Image from "react-native-scalable-image";

const { width, height } = Dimensions.get("window");

let scalarWidth = width / 3;
let scalarHeight = height * 0.25;
const IMAGE_SIZE = 30;
const SPACING = 10;
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

const AlbumItem = ({ item }) => {
  let navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Album", { album: item })}
    >
      <View style={styles.albumCoverContainer}>
        <View style={styles.item}>
          <View
            style={[
              styles.shadow,
              styles.backgroundCard,
              {
                left: "5%",
                top: 0,
              },
            ]}
          />
          <View
            style={[
              styles.shadow,
              styles.backgroundCard,
              {
                left: "2.5%",
                top: "1%",
              },
            ]}
          />
          <View style={styles.shadow}>
            <Image source={item.images[0].uri} style={styles.image} />
          </View>
        </View>
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

class AlbumsPage extends Component {
  renderItem({ item }) {
    return <AlbumItem item={item} />;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={albums}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
          numColumns={1}
          initialNumToRender={6}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.66)",
  },
  title: {
    position: "absolute",
    top: "50%",
    color: "white",
    fontFamily: "System",
    fontSize: 40,
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
    height: scalarWidth * 0.9,
    width: scalarWidth * 0.9,
    alignSelf: "center",
    // aspectRatio: 1,
    // resizeMode: "cover",
    borderColor: "white",
  },
  backgroundCard: {
    position: "absolute",
    width: scalarWidth * 0.95,
    height: "95%",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: -3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "white",
  },
});

export default AlbumsPage;
