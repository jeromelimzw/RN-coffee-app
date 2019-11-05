import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  StatusBar,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import Modal from 'react-native-modal';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({isModalVisible: true}), 5000);
  }

  render() {
    return (
      <View style={styles.root}>
        <StatusBar
          backgroundColor={this.state.isModalVisible ? 'black' : '#e5dad0'}
        />
        <Image
          source={{
            uri:
              'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/78e5cd74119511.5c22f30620d43.gif',
          }}
          style={styles.image}
        />
        <Modal
          isVisible={this.state.isModalVisible}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={800}
          backdropOpacity={1}>
          <View style={styles.modal}>
            <Text style={styles.modalMessage}>
              Your Order is Ready!{'\n'}
              {'\n'}Please Proceed to the Counter.
            </Text>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.orderButton}
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

export default withNavigation(LoadingScreen);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#e5dad0',
  },
  image: {
    marginTop: 130,
    marginLeft: -50,
    minWidth: 500,
    minHeight: 500,
  },
  modal: {
    justifyContent: 'center',
    height: viewportHeight * 0.4,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  modalMessage: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '400',
    color: '#21394a',
  },
  orderButton: {
    backgroundColor: '#e5dad0',
    width: viewportWidth * 0.8,
    height: 70,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#21394a',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
