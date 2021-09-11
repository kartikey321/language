/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CustomButton from './src/widgets/CustomButton';

const App = () => {
  const [width, setWidth] = useState(80);

  const [hindiClicked, setHindiClicked] = useState(false);
  const [EnglishClicked, setEnglishClicked] = useState(false);
  const [assameseClicked, setAssameseClicked] = useState(false);
  const [malyalamClicked, setMalyalamClicked] = useState(false);
  const [punjabiClicked, setPunjabiClicked] = useState(false);
  const [telguClicked, setTelguClicked] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'blue',

        justifyContent: 'center',
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'blue',
          alignItems: 'flex-start',
          justifyContent: 'center',
          marginLeft: '17%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: '1%',

            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                setWidth(120);
                hindiClicked ? setHindiClicked(false) : setHindiClicked(true);
              }}>
              <CustomButton text="Hindi" clicked={hindiClicked} />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                setWidth(120);
                EnglishClicked
                  ? setEnglishClicked(false)
                  : setEnglishClicked(true);
              }}>
              <CustomButton
                text="English"
                clicked={EnglishClicked}
                marginStart="50%"
                marginEnd="20%"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            marginVertical: '1%',
          }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                setWidth(120);
                assameseClicked
                  ? setAssameseClicked(false)
                  : setAssameseClicked(true);
              }}>
              <CustomButton text="Assamese" clicked={assameseClicked} />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                setWidth(120);
                malyalamClicked
                  ? setMalyalamClicked(false)
                  : setMalyalamClicked(true);
              }}>
              <CustomButton text="Malyalam" clicked={malyalamClicked} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            marginVertical: '1%',
          }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                setWidth(120);
                punjabiClicked
                  ? setPunjabiClicked(false)
                  : setPunjabiClicked(true);
              }}>
              <CustomButton text="Punjabi" clicked={punjabiClicked} />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                setWidth(120);
                telguClicked ? setTelguClicked(false) : setTelguClicked(true);
              }}>
              <CustomButton text="Telgu" clicked={telguClicked} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
