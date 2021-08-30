import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import ImageZoom, { reset } from "react-native-image-pan-zoom";
import React, { Component } from "react";
// import Image from "react-native-scalable-image";

const { width, height } = Dimensions.get("window");

let scrollEnabler = true;
let scrollFactor = 0.85;
let emptyScrollFactor = 0.5 * (1 - scrollFactor);

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
    let _onPress = () => () => {
      // scrollEnabler = !scrollEnabler;
    };
    return (
      <View style={styles.item}>
        <TouchableWithoutFeedback onPress={_onPress()}>
          <ImageZoom
            cropWidth={width}
            cropHeight={height * 0.85}
            imageWidth={width}
            imageHeight={height * 0.85}
            panToMove={false}
            onDoubleClick={() => {
              ImageZoom.reset;
            }}
            onMove={() => {
              ImageZoom.reset;
            }}
          >
            <Image
              source={ENTRIES1[index].uri}
              style={styles.image}
              blurRadius={0}
            />
          </ImageZoom>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={_onPress()}>
          <Text style={styles.title} numberOfLines={2}>
            {ENTRIES1[index].title}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          decelerationRate={0}
          snapToInterval={height * scrollFactor}
          snapToAlignment="start"
          scrollEnabled={scrollEnabler}
          stickyHeaderIndices={[0]}
        >
          <View style={[styles.emptySpace, styles.topNav]}>
            <Text style={[styles.titleTopNav, styles.topNav]}>My Albums</Text>
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
          <View style={styles.emptySpace}></View>
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
  albumCoverContainer: {
    flex: 1,
  },
  item: {
    width: width,
    height: height * scrollFactor,
    // marginTop: "20%",
  },
  emptySpace: {
    width: width,
    height: height * emptyScrollFactor,
  },
  image: {
    height: -1,
    width: -1,
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
    alignSelf: "center",
  },
  topNav: {
    backgroundColor: "black",
  },
  titleTopNav: {
    position: "absolute",
    top: "50%",
    width: "100%",
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
});

export default AlbumsPage;
