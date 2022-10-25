import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Text, View} from 'react-native';

class CustomCalloutView extends Component {
  render = () => {
    const {name, price, quality} = this.props;
    return (
      <View>
        <Text>Nombre: {name}</Text>
        <Text>Precio: {price}</Text>
        <Text>Calidad: {quality}</Text>
      </View>
    );
  };
  static propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quality: PropTypes.number.isRequired,
  };
}
export default CustomCalloutView;
