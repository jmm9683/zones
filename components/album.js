import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  SafeAreaView,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import ImageZoom from "react-native-image-pan-zoom";
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
// import Image from "react-native-scalable-image";

const { width, height } = Dimensions.get("window");

let scalarWidth = width;
let scalarHeight = height;
let scrollEnabler = true;
let scrollFactor = 0.85;
let emptyScrollFactor = 0.5 * (1 - scrollFactor);

const AlbumItem = ({ item }) => {
  let navigation = useNavigation();
  return (
    <View style={styles.albumCoverContainer}>
      <Carousel
        layout={"stack"}
        renderItem={_renderCarouselItem}
        sliderWidth={width}
        itemWidth={width}
        data={item.images}
        inactiveSlideOpacity={0.7}
        inactiveSlideScale={0.9}
        inactiveSlideShift={0}
      />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.backButton}
          source={require("./../assets/icons8-back-50.png")}
          resizeMode={"cover"}
        ></Image>
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

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

class Album extends Component {
  render() {
    const { album } = this.props.route.params;
    return (
      <SafeAreaView style={styles.container}>
        <AlbumItem item={album} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "rgba(0,0,0,1)",
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
    top: "0%",
    width: "100%",
    color: "white",
    fontSize: 25,
    // lineHeight: 42,
    // fontWeight: "bold",
    textAlign: "center",
  },
  backButton: {
    position: "absolute",
    top: "2%",
    left: "2%",
    color: "white",
    width: 25,
    height: 25,
    // fontSize: 25,
    // lineHeight: 42,
    // fontWeight: "bold",
    textAlign: "center",
  },
  albumCoverContainer: {
    flex: 1,
    // padding: 5,
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
    height: height,
    width: width,
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

export default Album;
