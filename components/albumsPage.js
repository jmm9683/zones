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
import Carousel from "react-native-snap-carousel";
import ImageZoom from "react-native-image-pan-zoom";
import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from "react-native-shared-element";
import React, { Component } from "react";
// import Image from "react-native-scalable-image";

const { width, height } = Dimensions.get("window");

let scalarWidth = width * 0.5;
let scalarHeight = height * 0.25;
let scrollEnabler = true;
let scrollFactor = 0.85;
let emptyScrollFactor = 0.5 * (1 - scrollFactor);

const ENTRIES1 = [
  {
    title: "Nevada",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "",
    uri: require("./../assets/IMG_2156.jpeg"),
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
    id: "3",
  },
  {
    title: "Idaho",
    images: ENTRIES1,
    id: "3",
  },
  {
    title: "Idaho",
    images: ENTRIES1,
    id: "3",
  },
  {
    title: "Idaho",
    images: ENTRIES1,
    id: "3",
  },
  {
    title: "Idaho",
    images: ENTRIES1,
    id: "3",
  },
];

const AlbumItem = ({ item }) => (
  <TouchableOpacity>
    <View style={styles.albumCoverContainer}>
      <Carousel
        layout={"stack"}
        renderItem={_renderCarouselItem}
        sliderWidth={width * 0.5}
        itemWidth={width * 0.5}
        data={item.images}
        inactiveSlideOpacity={0.7}
        inactiveSlideScale={0.9}
        inactiveSlideShift={0}
      />
    </View>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);
const _renderCarouselItem = ({ item, index }, parallaxProps) => {
  return (
    <View style={styles.item}>
      <ImageZoom
        cropWidth={scalarWidth}
        cropHeight={scalarHeight}
        imageWidth={scalarWidth}
        imageHeight={scalarHeight}
        panToMove={false}
        onDoubleClick={() => {
          ImageZoom.reset;
        }}
        onMove={() => {
          ImageZoom.reset;
        }}
      >
        <Image source={item.uri} style={styles.image} />
      </ImageZoom>
    </View>
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
    fontSize: 25,
    // lineHeight: 42,
    // fontWeight: "bold",
    textAlign: "center",
  },
  albumCoverContainer: {
    flex: 1,
    padding: 5,
  },
  item: {
    width: scalarWidth,
    height: scalarHeight,
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
