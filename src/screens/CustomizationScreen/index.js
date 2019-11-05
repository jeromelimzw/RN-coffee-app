import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/EvilIcons';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import CustomSlider from '../../components/CustomSlider';
import Dash from 'react-native-dash';
import GestureRecognizer from 'react-native-swipe-gestures';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
import Modal from 'react-native-modal';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'space-evenly',
    borderRadius: 25,
  },
  dash: {
    flex: 1,
    paddingTop: 10,
    width: viewportWidth * 0.25,
    paddingBottom: 10,
  },
  menu: {
    flex: 1,
  },
  title: {
    fontSize: 35,
    color: 'white',
    marginLeft: 20,
    marginTop: 30,
    fontWeight: 'bold',
  },
  icon: {
    top: 0,
  },
  container: {
    height: viewportHeight * 0.6,
    width: viewportWidth,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#e5dad0',
    borderRadius: 25,
    paddingTop: 40,
    alignItems: 'center',
  },
  sliderContainer: {
    height: viewportHeight * 0.4,
    width: viewportWidth * 0.8,
    alignItems: 'center',
    marginLeft: 20,
  },
  priceLine: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 15,
  },
  label: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  coffeeIcon: {
    marginTop: 3,
    marginRight: 5,
  },

  carouselContainer: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'repeat',
  },
  button: {
    top: 20,
    left: 20,
    position: 'absolute',
  },
  orderButton: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#2f3f4b',
    width: viewportWidth * 0.8,
    height: 70,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
  titleContainer: {
    position: 'absolute',
    top: viewportHeight * 0.15,
    left: viewportWidth * 0.1,
    borderRadius: 5,
    width: viewportWidth * 0.8,
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 40,
    fontWeight: '300',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  subText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '100',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  spacer: {
    flex: 0.5,
  },
  modal: {
    height: viewportHeight * 0.3,
    width: viewportWidth,
    position: 'absolute',
    bottom: -20,
    left: -15,
    backgroundColor: 'white',
    paddingTop: 40,
    alignItems: 'center',
  },
  modalMessage: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '100',
    color: '#21394a',
  },
  payIcon: {
    marginBottom: 10,
    marginTop: 30,
  },
});

function CustomizationScreen(props) {
  const data = props.navigation.getParam('data');
  const {
    roast,
    origin,
    variety,
    defaultGrind,
    defaultSteam,
    defaultTime,
    defaultPressure,
    illustration,
    price,
  } = data;
  const [grind, setGrind] = useState(defaultGrind);
  const [steam, setSteam] = useState(defaultSteam);
  const [time, setTime] = useState(defaultTime);
  const [pressure, setPressure] = useState(defaultPressure);
  const [quantity, setQuantity] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const handleGoBack = () => {
    props.navigation.navigate('Order');
  };

  return (
    <View style={styles.root}>
      <GestureRecognizer onSwipeLeft={() => handleGoBack()} />
      <StatusBar backgroundColor={'black'} />
      <Image source={{uri: illustration}} style={styles.image} />
      <TouchableOpacity
        activeOpacity={1}
        style={styles.button}
        onPress={() => handleGoBack()}>
        <Icon name="close" size={40} color={'white'} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{origin}</Text>
        <Text style={styles.subText}>{variety}</Text>
        <Dash
          style={styles.dash}
          dashColor="white"
          dashLength={100}
          dashGap={0}
        />
        <Text style={styles.subText}>{roast}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.sliderContainer}>
          <CustomSlider
            color="#324a59"
            leftLabel="GRIND"
            rightLabel={grind.toFixed(1)}
            minValue={1}
            maxValue={10}
            currValue={grind}
            handleChange={value => setGrind(value)}
          />
          <CustomSlider
            color="#324a59"
            leftLabel="STEAM"
            rightLabel={`${steam.toFixed(0)}s`}
            minValue={10}
            maxValue={60}
            currValue={steam}
            handleChange={value => setSteam(value)}
          />
          <CustomSlider
            color="#324a59"
            leftLabel="TIME"
            rightLabel={`${time.toFixed(0)}s`}
            minValue={10}
            maxValue={60}
            currValue={time}
            handleChange={value => setTime(value)}
          />
          <CustomSlider
            color="#324a59"
            leftLabel="PRESSURE"
            rightLabel={pressure.toFixed(1)}
            minValue={1}
            maxValue={5}
            currValue={pressure}
            handleChange={value => setPressure(value)}
          />
          <View style={styles.spacer} />
          <CustomSlider
            color="#324a59"
            leftLabel={`X${quantity.toFixed(0)}`}
            rightLabel={`$ ${(quantity * price).toFixed(1)}`}
            minValue={1}
            maxValue={15}
            currValue={quantity}
            handleChange={value => setQuantity(value)}
          />
        </View>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.orderButton}
          onPress={() => {
            setIsModalVisible(true);
          }}>
          <Text style={styles.buttonText}>ORDER</Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={isModalVisible}
        animationInTiming={500}
        animationOutTiming={1000}
        backdropOpacity={0}>
        <View style={styles.modal}>
          <Text style={styles.modalMessage}>
            {isPaid ? 'Payment Successful' : 'Buy with Touch ID'}
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            onLongPress={() => {
              setIsPaid(true);
              setTimeout(() => props.navigation.navigate('Loading'), 2000);
            }}>
            <IonicIcon
              name={isPaid ? 'ios-checkmark-circle' : 'ios-finger-print'}
              size={70}
              color={isPaid ? 'green' : 'red'}
              style={styles.payIcon}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default withNavigation(CustomizationScreen);
