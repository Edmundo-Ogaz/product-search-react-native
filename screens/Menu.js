import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Button,
} from 'react-native';

const Menu = ({ navigation }) => {
  console.log('Menu');

  const add = async () => {
    console.log('add: ');
    navigation.navigate('Product');
  };

  const product = async () => {
    console.log('product: ');
    navigation.navigate('Search');
  };

  const map = async () => {
    console.log('map: ');
    navigation.navigate('Test', {search: '', data: []});
  };


  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
        <TouchableHighlight
            style={styles.button}
            onPress={() => {
              add();
            }}
            underlayColor="transparent"
          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>Add</Text>
            </View>
          </TouchableHighlight>
        <TouchableHighlight
            style={styles.button}
            onPress={() => {
              product();
            }}
            underlayColor="transparent"
          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>Product</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              map();
            }}
            underlayColor="transparent"
          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>Map</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' },
  button: {width: 100},
});

export default Menu;
