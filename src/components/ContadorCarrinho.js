import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class ContadorCarrinho extends Component {
  state = {
    contador: 0,
  };
  incrementar() {
    this.setState({ contador: this.state.contador + 1 });
  }
  decrementar() {
    if (this.state.contador > 0) {
      this.setState({ contador: this.state.contador - 1 });
    }
  }
  render() {
    return (
      <View>
        <View style={{flexDirection: "row",marginRight: 10,alignItems: "center",}}>
          <TouchableOpacity style={[styles.button, {borderBottomLeftRadius: 5, borderTopLeftRadius: 5,}]} onPress={() => this.incrementar()}><Text>+</Text></TouchableOpacity>
          <Text style={{ backgroundColor: "#f1ebfa", padding: 8 }}>{this.state.contador}</Text>
          <TouchableOpacity style={[styles.button, {borderBottomRightRadius: 5, borderTopRightRadius: 5,}]} onPress={() => this.decrementar()}><Text>-</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    padding: 8,
    backgroundColor: "#f1ebf7",
  },
});
