import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React, { Component } from "react";
// import Image from "react-native-scalable-image";

const { width, height } = Dimensions.get("window");

class AlbumsPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Image
            source={require("./../assets/IMG_2156.jpeg")}
            style={styles.albumCoverImage}
          />
          <Image
            source={require("./../assets/IMG_0735.jpeg")}
            style={styles.albumCoverImage}
          />
          <Image
            source={require("./../assets/IMG_0657.jpeg")}
            style={styles.albumCoverImage}
          />
          {/* <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </Text> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.66)",
  },
  scrollView: {
    flex: 1,
    marginTop: 35,
  },
  text: {
    flex: 1,
    color: "white",
    fontSize: 42,
    lineHeight: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  albumCoverImage: {
    width: Dimensions.get("window").width * 0.75,
    height: Dimensions.get("window").width * 0.75,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default AlbumsPage;
