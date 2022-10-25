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

//import products from '../data//products.json';

const Product = ({ navigation }) => {
  console.log('Product');

  const [input, onChangeInput] = React.useState('');

  const add = async () => {
    console.log('add: ');
    const data = {
      code: "4",
      name: "Hallulla corriente 1k",
      price: 1500,
      brand: "Brisa Marina 2",
      location: {
        latitude: -33.445365011958636,
        longitude: -70.63733076230585
      },
      quality: 2,
      dateAt: "2022-10-13 16:00:00",
      schedule: "Miercoles",
    };
    fetch(`${process.env.REACT_APP_BASE_URL}/products`,
    {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    //navigation.navigate('Search');
  };

  const search = (data) => (
    <Button
      title="Location"
      onPress={() => navigation.navigate('Test', {search: data.name, data: [data]})}
    />
  );

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <TextInput
            style={[styles.input, { height: Platform.OS == 'android' ? 40 : 20 }]}
            value={input}
            onChangeText={text => search(text)}
            placeholder='Search'
            keyboardType='web-search'
          />
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              add();
            }}
            underlayColor="transparent"
          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>button</Text>
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
  input: { width: 300, backgroundColor: 'white'},
  button: {width: 100},
});

export default Product;
