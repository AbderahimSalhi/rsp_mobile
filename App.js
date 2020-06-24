import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import Constants from "expo-constants";
export default class RSPmobile extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }
  renderItem = ({ item }) => {
    return (
      <View>
        <Text style={styles.report}>{item}</Text>
      </View>
    );
  };
  // This component is invoked imediately after the "fetch()" method is called
  // It is container to load data from the IWG1 packet server / Website
  componentDidMount() {
    // can check if compnent did Update as well : has to be chenaged to componentDidUpdate
    const url1 =
      "https://asp-interface.arc.nasa.gov/API/parameter_data/N426NA/IWG1";
    const url2 =
      "https://asp-interface.arc.nasa.gov/API/parameter_data/N528NA/IWG1";

    // instantiate a network request
    fetch(url1)
      .then((response) => response.text())
      .then((responseText) => {
        this.setState({
          dataSource: responseText.split(" "),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onPress = () => {
    this.dataSource;
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>RSP Mobile App</Text>

        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={styles.button}>
            <Text>N426NA</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={styles.button}>
            <Text>N528NA</Text>
          </View>
        </TouchableWithoutFeedback>
        <View>
          <Text style={styles.baseText}>IWG1 Report: {}</Text>
        </View>
        <FlatList
          // data={[{ key: "a" }, { key: "b" }]}
          // renderItem={({ item }) => <Text>{item.key}</Text>}
          data={this.state.dataSource}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#69f8fb",
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 30,
    justifyContent: "center",
  },
  report: {
    fontSize: 20,
  },
  button: {
    borderRadius: 8,
    width: 100,
    margin: "5%",
    backgroundColor: "orange",
  },
  buttonText: {
    fontSize: 24,
  },
});
