import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native';

import products from './products.json';

const App = () => {
  console.log("App");
  const [input, onChangeInput] = React.useState("");
  const [text, onChangeText] = React.useState("");

  let search = async () => {
    console.log('search: ' + input);
    const response = products.filter(product => product.name === input);
    onChangeText(JSON.stringify(response));
  }

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <TextInput
            style={[styles.input, { height: Platform.OS == 'android' ? 40 : 20 }]}
            value={input}
            onChangeText={text => onChangeInput(text)}
            placeholder='Search'
            keyboardType='web-search'
            onSubmitEditing={() => search()}
          />
        </View>
        <View>
          <Text>{text}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
