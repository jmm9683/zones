import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  SafeAreaView,
  FlatList,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImageZoom from "react-native-image-pan-zoom";
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";

const { width, height } = Dimensions.get("window");

const IMAGE_SIZE = 30;
const SPACING = 10;
const isWeb = (Platform.OS != "android" || Platform.OS != "iOS")

let scalarWidth = width;
let scalarHeight = height;
let scrollEnabler = true;

export default function Album(props) {
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

  const scrollToActiveIndex = (index, imageNav) => {
    setActiveIndex(index);
    if (imageNav) {
      imageRef?.current?.scrollToOffset({
        offset: index * width,
        animated: true,
      });
    }
    let activeImageNavPosition =
      index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2;
    let screenWidthCenter = width / 2;
    if (activeImageNavPosition > screenWidthCenter || true) {
      imageNavRef?.current?.scrollToOffset({
        // offset: activeImageNavPosition + IMAGE_SIZE,
        offset: activeImageNavPosition,
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
        scrollEnabled={scrollEnabler}
        style={{
          flex: 1
        }}
        onMomentumScrollEnd={(ev) => {
          scrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / width, false)
          );
        }}
        onScroll={(ev) => {
          scrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / width, false)
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
          ...Platform.select({
            web: {
              width: width
            }, 
            default: {}
          })
        }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: SPACING}}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => scrollToActiveIndex(index, true)}>
              <Image
                source={item.uri}
                style={{
                  width: IMAGE_SIZE,
                  height: IMAGE_SIZE,
                  borderRadius: IMAGE_SIZE/4,
                  marginRight: SPACING,
                  borderWidth: 2,
                  borderColor: activeIndex === index ? "white" : "transparent",
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
      <Text style={styles.title}>{album.title}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(46, 49, 49, 1)",
  },
  title: {
    position: "absolute",
    top: "4%",
    width: "100%",
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
  item: {
    alignSelf: 'flex-end',
    width: scalarWidth,
    height: scalarHeight,
  },
  image: {
    height: height,
    width: width,
    resizeMode: "contain",
  },
});
