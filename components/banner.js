import {
  StyleSheet,
  ViewStyle,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React, { Component } from "react";
import AlbumsPage from "./albumsPage";

const { width, height } = Dimensions.get("window");

class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { toggleAlbums } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.leftNav}>
          <Image
            style={styles.propic}
            source={require("./../assets/propic.jpeg")}
            resizeMode={"cover"}
          ></Image>
        </View>
        <View
          style={styles.centerNav}
          onTouchEnd={toggleAlbums}
          onClick={toggleAlbums}
        >
          <Image
            style={styles.albumsIcon}
            source={require("./../assets/icons8-albums-96.png")}
          ></Image>
        </View>
        <View style={styles.rightNav}>
          <Image
            style={styles.searchIcon}
            source={require("./../assets/icons8-search-96.png")}
          ></Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "black",
    flexDirection: "row",
  },
  leftNav: {
    flex: 1,
  },
  centerNav: {
    flex: 1,
    justifyContent: "center",
    // cursor: "pointer",
  },
  rightNav: {
    flex: 1,
    justifyContent: "center",
  },

  propic: {
    position: "absolute",
    width: 100,
    height: 100,
    borderColor: "black",
    bottom: 0,
    borderWidth: 2,
    borderRadius: 360,
  },
  searchIcon: {
    width: 50,
    height: 50,
    alignSelf: "flex-end",
  },
  albumsIcon: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
});

export default Banner;
