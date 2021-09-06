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

let scalarWidth = width * 0.5;
let scalarHeight = height * 0.25;

const ENTRIES1 = [
  {
    title: "Nevada",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "",
    uri: require("./../assets/IMG_2156.jpeg"),
    id: "1",
  },
  {
    title: "",
    // subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_2156.jpeg",
    uri: require("./../assets/IMG_2156.jpeg"),
    id: "2",
  },
  {
    title: "",
    // subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0735.jpeg",
    uri: require("./../assets/IMG_0735.jpeg"),
    id: "3",
  },
  {
    title: "",
    // subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
    uri: require("./../assets/IMG_0657.jpeg"),
    id: "4",
  },
  // {
  //   title: "",
  //   // subtitle: "Lorem ipsum dolor sit amet",
  //   illustration:
  //     "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
  //   uri: require("./../assets/IMG_0657.jpeg"),
  //   id: "41",
  // },
  // {
  //   title: "",
  //   // subtitle: "Lorem ipsum dolor sit amet",
  //   illustration:
  //     "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
  //   uri: require("./../assets/IMG_0657.jpeg"),
  //   id: "411",
  // },
  // {
  //   title: "",
  //   // subtitle: "Lorem ipsum dolor sit amet",
  //   illustration:
  //     "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
  //   uri: require("./../assets/IMG_0657.jpeg"),
  //   id: "41111",
  // },
  // {
  //   title: "",
  //   // subtitle: "Lorem ipsum dolor sit amet",
  //   illustration:
  //     "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
  //   uri: require("./../assets/IMG_0657.jpeg"),
  //   id: "411111",
  // },
  // {
  //   title: "",
  //   // subtitle: "Lorem ipsum dolor sit amet",
  //   illustration:
  //     "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
  //   uri: require("./../assets/IMG_0657.jpeg"),
  //   id: "4111111",
  // },
  // {
  //   title: "",
  //   // subtitle: "Lorem ipsum dolor sit amet",
  //   illustration:
  //     "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
  //   uri: require("./../assets/IMG_0657.jpeg"),
  //   id: "41111111",
  // },
  // {
  //   title: "",
  //   // subtitle: "Lorem ipsum dolor sit amet",
  //   illustration:
  //     "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
  //   uri: require("./../assets/IMG_0657.jpeg"),
  //   id: "411111111",
  // },
  // {
  //   title: "",
  //   // subtitle: "Lorem ipsum dolor sit amet",
  //   illustration:
  //     "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
  //   uri: require("./../assets/IMG_0657.jpeg"),
  //   id: "4111111111",
  // },
  // {
  //   title: "",
  //   // subtitle: "Lorem ipsum dolor sit amet",
  //   illustration:
  //     "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
  //   uri: require("./../assets/IMG_0657.jpeg"),
  //   id: "41111111111",
  // },
  // {
  //   title: "",
  //   // subtitle: "Lorem ipsum dolor sit amet",
  //   illustration:
  //     "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
  //   uri: require("./../assets/IMG_0657.jpeg"),
  //   id: "411111111111",
  // },
  // {
  //   title: "",
  //   // subtitle: "Lorem ipsum dolor sit amet",
  //   illustration:
  //     "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
  //   uri: require("./../assets/IMG_0657.jpeg"),
  //   id: "4111111111111",
  // },
  // {
  //   title: "",
  //   // subtitle: "Lorem ipsum dolor sit amet",
  //   illustration:
  //     "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
  //   uri: require("./../assets/IMG_0657.jpeg"),
  //   id: "41111111111111",
  // },
];

const albums = [
  {
    title: "Nevada",
    images: ENTRIES1,
    id: "1",
  },
  {
    title: "Utah",
    images: ENTRIES1,
    id: "2",
  },
  {
    title: "Idaho",
    images: ENTRIES1,
    id: "3",
  },
  {
    title: "Idaho",
    images: ENTRIES1,
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
          <Image source={item.images[0].uri} style={styles.image} />
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
          numColumns={2}
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
    width: "100%",
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
  albumCoverContainer: {
    flex: 1,
    padding: 5,
  },
  item: {
    width: scalarWidth,
    height: scalarHeight,
  },
  image: {
    height: -1,
    width: -1,
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
});

export default AlbumsPage;
