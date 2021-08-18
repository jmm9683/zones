import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import Banner from "./banner";
import AlbumsPage from "./albumsPage";

const { width, height } = Dimensions.get("window");

class LandingPage extends Component {
  state = {
    fadeAnimation: new Animated.Value(0),
    showAlbums: true,
  };

  fadeInOut = () => {
    if (this.state.showAlbums) {
      this.fadeIn();
    } else {
      this.fadeOut();
    }
  };

  fadeIn = () => {
    Animated.timing(this.state.fadeAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    this.state.showAlbums = false;
  };

  fadeOut = () => {
    Animated.timing(this.state.fadeAnimation, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
    this.state.showAlbums = true;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cover}>
          <Image
            source={require("./../assets/cover.jpeg")}
            style={styles.coverImage}
          />
          <Text style={styles.text}>Jake Morrissey, 23</Text>
          <View style={styles.albumsPage}>
            <Animated.View
              style={[
                styles.fadingContainer,
                {
                  opacity: this.state.fadeAnimation,
                },
              ]}
            >
              <AlbumsPage></AlbumsPage>
            </Animated.View>
          </View>
        </View>
        <View style={styles.banner}>
          <Banner toggleAlbums={this.fadeInOut}></Banner>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: {
    flex: 0.92,
  },
  fadingContainer: {
    flex: 1,
  },
  banner: {
    flex: 0.08,
  },
  coverImage: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    top: "50%",
    width: "100%",
    color: "white",
    fontSize: 42,
    lineHeight: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  albumsPage: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
  },
});

export default LandingPage;
