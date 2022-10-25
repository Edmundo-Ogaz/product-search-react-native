import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import CustomCalloutView from '../components/custom.text';

const Test = ({ route, navigation }) => {
  console.log('Test');
  const { search, data } = route.params;
  const currentLocation = { latitude: -33.44390578021665, longitude: -70.6337258734541 };
  const [searchString, onChangeSearchString] = React.useState(search);
  const [region] = React.useState({
    ...currentLocation,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [loading, setLoading] = React.useState(false);

  let marker = data;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.containerSearch}>
        <TextInput
            style={[styles.input, { height: Platform.OS == 'android' ? 40 : 20 }]}
            value={searchString}
            onChangeText={text => onChangeSearchString(text)}
            placeholder="Search"
            keyboardType="web-search"
            onSubmitEditing={() => {
              this.buscar();
            }}
          />
        </View>
        <View style={styles.containermap}>
        <MapView style={styles.map} region={region}>
            {marker.map((marker) => (
              <Marker
                key={marker.location.latitude}
                coordinate={marker.location}
                title={marker.name}
                description={marker.name}>
                <Callout>
                  <CustomCalloutView
                    name={marker.name}
                    price={marker.price}
                    quality={marker.quality}
                  />
                </Callout>
              </Marker>
            ))}
            <Marker
              key={1}
              coordinate={currentLocation}
              title={'current position'}
              pinColor={'green'}
            />
          </MapView>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    flexDirection: 'column',
  },
  containerSearch: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    backgroundColor: 'white',
  },
  button: {},
  containermap: {
    flex: 15,
    paddingTop: 20,
  },
  map: {
    flex: 1,
  },
});

export default Test;
