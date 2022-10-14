import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

import products from './products.json';

const App = () => {
  console.log("App");
  const tableHead = ['Nombre', 'Precio', 'Localidad', 'Calidad'];
  const [input, onChangeInput] = React.useState('');
  const [tableData, onChangeTableData] = React.useState(Array(4));

  let search = async val => {
    onChangeInput(val);

    if (!val) {
      onChangeTableData('');
      return;
    }

    let array = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].name.substring(0, val.length) === val)
        array.push([products[i].name, products[i].price, JSON.stringify(products[i].location), products[i].quality]);
    }
    onChangeTableData(array);
  }

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
        </View>
        <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={tableData} textStyle={styles.text}/>
        </Table>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

export default App;
