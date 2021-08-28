import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import React, { Component, useRef, useState, useEffect } from "react";
// import Image from "react-native-scalable-image";

const { width, height } = Dimensions.get("window");

const ENTRIES1 = [
  {
    title: "Nevada",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "",
  },
  {
    title: "",
    // subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_2156.jpeg",
    uri: require("./../assets/IMG_2156.jpeg"),
  },
  {
    title: "",
    // subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0735.jpeg",
    uri: require("./../assets/IMG_0735.jpeg"),
  },
  {
    title: "",
    // subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "file:///Users/jakemorrissey/Documents/WebDevTraining/zones/assets/IMG_0657.jpeg",
    uri: require("./../assets/IMG_0657.jpeg"),
  },
];

class AlbumsPage extends Component {
  _renderItem({ item, index }, parallaxProps) {
    return (
      <View style={styles.item}>
        <Image
          source={ENTRIES1[index].uri}
          style={styles.image}
          blurRadius={0}
        />
        <Text style={styles.title} numberOfLines={2}>
          {ENTRIES1[index].title}
        </Text>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.albumCoverContainer}>
            <Carousel
              layout={"stack"}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width}
              data={ENTRIES1}
              inactiveSlideOpacity={0.7}
              inactiveSlideScale={0.9}
              inactiveSlideShift={0}
            />
          </View>
          <View style={styles.albumCoverContainer}>
            <Carousel
              layout={"stack"}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width}
              data={ENTRIES1}
              inactiveSlideOpacity={0.7}
              inactiveSlideScale={0.9}
              inactiveSlideShift={0}
            />
          </View>
          <View style={styles.albumCoverContainer}>
            <Carousel
              layout={"stack"}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width}
              data={ENTRIES1}
              inactiveSlideOpacity={0.7}
              inactiveSlideScale={0.9}
              inactiveSlideShift={0}
            />
          </View>
          {/* <View style={styles.albumCoverContainer}>
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
          </View> */}
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
  albumCoverContainer: {
    flex: 0.5,
  },
  item: {
    width: width,
    height: width,
    // marginTop: "25%",
  },
  image: {
    height: -1000,
    width: -1000,
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default AlbumsPage;
