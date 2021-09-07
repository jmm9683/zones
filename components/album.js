import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  SafeAreaView,
  FlatList,
  Platform,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import ImageZoom from "react-native-image-pan-zoom";
import React, { Component } from "react";

const { width, height } = Dimensions.get("window");

const IMAGE_SIZE = 30;
const SPACING = 10;
const isWeb = Platform.OS != "android" || Platform.OS != "iOS";

let scalarWidth = width;
let scalarHeight = height;
let scrollEnabler = true;

export default function Album(props) {
  const fadeAnimation = React.useRef(new Animated.Value(0)).current;
  let showDescription = React.useRef(true).current;
  const fadeInOut = () => {
    if (showDescription) {
      fadeIn();
    } else {
      fadeOut();
    }
  };

  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    showDescription = false;
  };

  const fadeOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
    showDescription = true;
  };

  


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
            <TouchableWithoutFeedback onPressIn={fadeInOut} onPressOut={fadeInOut} onPress={fadeInOut}>
              <Image source={item.uri} style={styles.image} />
            </TouchableWithoutFeedback>
          </ImageZoom>
          <View
              style={styles.descriptionView}
              pointerEvents={showDescription ? "none" : "auto"}
            >
              <Animated.View
                style={[
                  styles.description,
                  {
                    opacity: fadeAnimation,
                  },
                ]}
              >
                          <Text style={styles.imageTitle}>{item.title}</Text>
                          <Text style={styles.imageSubtitle}>{item.subtitle}</Text>
              </Animated.View>
            </View>

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
    if (index >= 0) {
      imageNavRef?.current?.scrollToIndex({
        animated: true,
        index: index,
        viewPosition: 0.5,
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
          flex: 1,
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
              width: "50%",
              left: "25%"
            },
            default: {},
          }),
        }}
        showsHorizontalScrollIndicator={isWeb}
        contentContainerStyle={{ paddingHorizontal: SPACING, justifyContent: "center" }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => scrollToActiveIndex(index, true)}>
              <Image
                source={item.uri}
                style={{
                  width: IMAGE_SIZE,
                  height: IMAGE_SIZE,
                  borderRadius: IMAGE_SIZE / 4,
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
    // backgroundColor: "rgba(46, 49, 49, 1)",
    backgroundColor: "rgba(0, 0, 0, 1)"
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
    alignSelf: "flex-end",
    width: scalarWidth,
    height: scalarHeight,
  },
  image: {
    height: height,
    width: width,
    resizeMode: "contain",
  },
  descriptionView: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  description:{
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)"
  },
  imageTitle:{
    position: "absolute",
    top: "50%",
    width: "100%",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    paddingLeft: 5
  },
  imageSubtitle:{
    position: "absolute",
    top: "55%",
    width: "100%",
    color: "white",
    fontSize: 15,
    textAlign: "left",
    paddingLeft: 15
  }
});
