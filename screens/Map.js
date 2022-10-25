import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import CustomCalloutView from '../components/custom.text';

const Map = () => {
  console.log('Map');
  const [loading, setLoading] = React.useState(false);
  const [searchString, onChangeSearchString] = React.useState('');
  const [coordinate, setCoordinate] = React.useState({ latitude: -33.6583116, longitude: -70.92635709999999 });
  const [region, setRegion] = React.useState(null);
  const markers = [];

  React.useEffect(() => {
    let region = {
      // latitude: position.coords.latitude,
      // longitude: position.coords.longitude,
      latitude: -33.43671008266643,
      longitude: -70.63443070042709,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    };
    setRegion(region);

    let coordinate = {
      latitude: -33.44391467114447,
      longitude: -70.63373661944375,
    };
    setCoordinate(coordinate);
  }, [region]);

  const buscar = async () => { }

  return (
    <View style={{flex: 1}}>
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
            {markers.map((marker) => (
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
              coordinate={coordinate}
              title={'current position'}
              description={'place searched'}
              pinColor={'#000000'}
            />
          </MapView>
        </View>
      </View>
      {loading && (
        <ActivityIndicator
          size="large"
          color={'#0000ff'}
          style={StyleSheet.absoluteFillObject}
        />
      )}
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

export default Map;
