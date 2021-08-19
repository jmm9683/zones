import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import React, { Component } from "react";
// import Image from "react-native-scalable-image";

const { width, height } = Dimensions.get("window");

class AlbumsPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.albumCoverContainer}>
            <Image
              source={require("./../assets/IMG_2156.jpeg")}
              style={styles.albumCoverImage}
              blurRadius={0}
            />
            <Text style={styles.title}>Tahoe Trip</Text>
          </View>
          <View style={styles.albumCoverContainer}>
            <Image
              source={require("./../assets/IMG_0735.jpeg")}
              style={styles.albumCoverImage}
              blurRadius={0}
            />
            <Text style={styles.title}>Stevens Peak</Text>
          </View>
          <View style={styles.albumCoverContainer}>
            <Image
              source={require("./../assets/IMG_0657.jpeg")}
              style={styles.albumCoverImage}
              blurRadius={0}
            />
            <Text style={styles.title}>Lake Pend Oreille</Text>
          </View>
        </ScrollView>
        {/* <Text style={styles.pageTitle}>my albums</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.66)",
  },
  pageTitle: {
    position: "absolute",
    marginTop: 30,
    color: "white",
    fontSize: 21,
    lineHeight: 21,
    // backgroundColor: "black",
    width,
    textAlign: "center",
  },
  View: {
    flex: 1,
    // marginTop: 35,
  },
  title: {
    position: "absolute",
    top: "50%",
    width: "100%",
    color: "white",
    fontSize: 42,
    lineHeight: 42,
    // fontWeight: "bold",
    textAlign: "center",
  },
  albumCoverImage: {
    width: width * 1,
    height: height * 1,
    resizeMode: "contain",
    alignSelf: "center",
  },
  albumCoverContainer: {},
});

export default AlbumsPage;
