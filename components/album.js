import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import ImageZoom from "react-native-image-pan-zoom";
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";

const { width, height } = Dimensions.get("window");

const IMAGE_SIZE = 30;
const SPACING = 10;

let scalarWidth = width;
let scalarHeight = height;
let scrollEnabler = false;

export default function Album(props) {
  let navigation = useNavigation();
  function renderItem({ item }) {
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
  }

  const { album } = props.route.params;
  const imageRef = React.useRef();
  const imageNavRef = React.useRef();

  const [activeIndex, setActiveIndex] = React.useState(0);

  const scrollToActiveIndex = (index) => {
    setActiveIndex(index);
    imageRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    let activeImageNavPosition =
      index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2;
    let screenWidthCenter = width / 2;
    if (activeImageNavPosition > screenWidthCenter) {
      console.log(activeImageNavPosition);
      imageNavRef?.current?.scrollToOffset({
        offset: activeImageNavPosition + IMAGE_SIZE / 2,
        animated: true,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={imageRef}
        data={album.images}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={scrollEnabler} //scrolling on ios is buggy and momentumscroll not firing on web
        onMomentumScrollEnd={(ev) => {
          scrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / width)
          );
        }}
        onScrollEndDrag={(ev) => {
          scrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / width)
          );
        }}
        renderItem={renderItem}
      />
      <FlatList
        ref={imageNavRef}
        data={album.images}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        style={{
          position: "absolute",
          bottom: IMAGE_SIZE,
          alignSelf: "center",
        }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: SPACING }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
              <Image
                source={item.uri}
                style={{
                  width: IMAGE_SIZE,
                  height: IMAGE_SIZE,
                  borderRadius: IMAGE_SIZE,
                  marginRight: SPACING,
                  borderWidth: 2,
                  borderColor: activeIndex === index ? "#fff" : "transparent",
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
      {/* 
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <View style={{ width: 50, height: 50 }}>
          <Image
            style={styles.backButton}
            source={require("./../assets/icons8-back-50.png")}
            resizeMode={"cover"}
          ></Image>
        </View>
      </TouchableOpacity> */}
      <Text style={styles.title}>{album.title}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "rgba(0,0,0,1)",
  },
  title: {
    position: "absolute",
    top: "4%",
    width: "100%",
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
  backButton: {
    position: "absolute",
    top: "4%",
    left: "2%",
    height: 25,
    width: 25,
  },
  item: {
    width: scalarWidth,
    height: scalarHeight,
  },
  image: {
    height: height,
    width: width,
    resizeMode: "contain",
    alignSelf: "center",
  },
});
