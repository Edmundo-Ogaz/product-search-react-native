import React, {useEffect} from 'react';
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
  Alert,
} from 'react-native';
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
import {BASE_URL} from '@env';

// import products from '../data//products.json';

const Search = ({ navigation }) => {
  console.log('Search');
  const tableHead = ['Nombre', 'Precio', 'Localidad', 'Calidad'];
  const [input, onChangeInput] = React.useState('');
  const [tableData, onChangeTableData] = React.useState([]);
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        console.log(`${JSON.stringify(process.env)}`);
        // console.log(`${process.env.NODE_ENV}/products`);
        console.log(`${BASE_URL}/products`);
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.json();

        console.log('result is: ', JSON.stringify(result, null, 4));

        setProducts(result);
      } catch (err) {
        Alert.alert(err.message);
      }
    }
    getProducts();
  }, []);

  const search = async param => {
    onChangeInput(param);

    if (!param) {
      onChangeTableData([]);
      return;
    }

    let array = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].name.substring(0, param.length) === param) {
        array.push({
          name: products[i].name,
          price: products[i].price,
          location: products[i].location,
          quality: products[i].quality,
          brand: products[i].brand,
        });
      }
    }
    onChangeTableData(array);
  };

  const buttonSearch = async () => {
    console.log('buscar: ');
    navigation.navigate('Test', {search: input, data: tableData});
  };

  const buttonLocation = (data) => (
    <Button
      title="Location"
      onPress={() => navigation.navigate('Test', {search: data.name, data: [data]})}
    />
  );

  const element = (data) => (
    <TouchableOpacity onPress={() => navigation.navigate('Test', {data})}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>button</Text>
      </View>
    </TouchableOpacity>
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
              buttonSearch();
            }}
            underlayColor="transparent"
          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>button</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          {
            tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  Object.keys(rowData).filter((key) =>
                    ['name','price','location','quality'].includes(key)
                  ).map((key, keyIndex) => {
                    return <Cell key={keyIndex}
                      data={key === 'location' ? buttonLocation(rowData) : rowData[key]}
                      textStyle={styles.text}/>
                  })
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//   head: { height: 40, backgroundColor: '#f1f8ff' },
//   text: { margin: 6 }
// });

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' },
  input: { width: 300, backgroundColor: 'white'},
  button: {width: 100},
});

export default Search;
