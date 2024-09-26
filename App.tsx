
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import { Button } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';


function App() {
  const [val, setVal] = useState('');
  const [result, setResult] = useState(0);
  const items = ["Weight", "Length", "Temperature"];
  const items2 = [["Kg", "Gm", "Pounds"], ["Cm", "Mtr", "Km"], ["C", "F"]];
  let [i, setI] = useState(0);
  let [j, setJ] = useState(0);
  let [k, setK] = useState(0);

  let [Celsius, setCelsius] = useState(0);
  let [Fahrenheit, setFahrenheit] = useState(0);

  let [Cm, setCm] = useState(0);
  let [meter, setMeter] = useState(0);
  let [Km, setKm] = useState(0);

  let [Kg, setKg] = useState(0);
  let [Gm, setGm] = useState(0);
  let [Pounds, setPounds] = useState(0);


  function Convert_Fah_Cel(Fahrenheit: any) {
    Celsius = (Fahrenheit - 32) * (5 / 9);
    setCelsius(Celsius);
    return Celsius;
  }

  function Convert_Cel_Fah(Celsius: any) {
    Fahrenheit = (Celsius * 9 / 5) + 32
    setFahrenheit(Fahrenheit);
    return Fahrenheit;
  }

  function Convert_Cm_Meter(Cm: any) {
    meter = Cm / 100;
    setMeter(meter);
    return meter;
  }

  function Convert_Meter_Km(meter: any) {
    Km = meter / 1000;
    setKm(Km);
    return Km;
  }

  function Convert_Cm_Km(Cm: any) {
    Km = Cm / 100000;
    setKm(Km);
    return Km;
  }

  function Convert_Km_Cm(Km: any) {
    Cm = Km * 100000;
    setCm(Cm);
    return Cm;
  }

  function Convert_Km_Meter(Km: any) {
    meter = Km * 1000;
    setMeter(meter);
    return meter;
  }

  function Convert_Meter_Cm(meter: any) {
    Cm = meter * 100;
    setCm(Cm);
    return Cm;
  }

  function Convert_Kg_Pounds(Kg: any) {
    Pounds = Kg * 2.20462;
    setPounds(Pounds);
    return Pounds;
  }

  function Convert_Pounds_Kg(Pounds: any) {
    Kg = Pounds * 0.453592;
    setKg(Kg);
    return Kg;
  }

  function Convert_Gm_Kg(Gm: any) {
    Kg = Gm / 1000;
    setKg(Kg);
    return Kg;
  }

  function Convert_Kg_Gm(Kg: any) {
    Gm = Kg * 1000;
    setGm(Gm);
    return Gm;
  }

  function Convert_Gm_Pounds(Gm: any) {
    Pounds = Gm * 0.00220462;
    setPounds(Pounds);
    return Pounds;
  }

  function Convert_Pounds_Gm(Pounds: any) {
    Gm = Pounds * 453.592;
    setGm(Gm);
    return Gm;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '17153B' }}>
      <Text style={{ fontSize: 20, textAlign: 'center', fontStyle: 'italic', fontWeight: 'bold', padding: 5, backgroundColor: 'skyblue' }}>Welcome to the Unit Converter App</Text>
      <Text style={styles.text}>CONVERT</Text>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => { if (i < items.length - 1) setI(++i); }}
          ><Text style={{ fontSize: 35 }}>{'<'}</Text></TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontSize: 35, textAlign: 'center' }}>{items[i]}</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => { if (i >= 1) setI(--i) }}
          ><Text style={{ fontSize: 35 }}>{'>'}</Text></TouchableOpacity>
        </View>

      </View>


      <View style={{ flex: 0.5, flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => { if (j < items2.length - 1) setJ(++j); if (j == k) console.warn("Cannot Convert from " + items2[i][j] + " to " + items2[i][j]) }}
            ><Text style={{ fontSize: 35, textAlign: 'center', marginTop: 50 }}>{'^'}</Text></TouchableOpacity>
          </View>

          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={{ fontSize: 35, textAlign: 'center' }}>{items2[i][j]}</Text>
          </View>

          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => { if (j >= 1) setJ(--j); if (j == k) console.warn("Cannot Convert from " + items2[i][j] + " to " + items2[i][j]) }}
            ><Text style={{ fontSize: 35, transform: [{ rotate: '180deg' }], textAlign: 'center', marginTop: 50 }}>{'^'}</Text></TouchableOpacity>
          </View>
        </View>


        <View style={{ flex: 0.5 }}>
          <Text style={{ textAlign: 'center', fontSize: 35, marginTop: 120, alignItems: 'center', marginLeft: 12 }}>{"-->"}</Text>
          <Text style={{ fontSize: 35, marginLeft: 25, marginStart: 20, }}>{"<--"}</Text>
        </View>


        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => { if (k < items2.length - 1) setK(++k); if (j == k) console.warn("Cannot Convert from " + items2[i][j] + " to " + items2[i][j]) }}
              ><Text style={{ fontSize: 35, textAlign: 'center', marginTop: 50 }}>{'^'}</Text></TouchableOpacity>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <Text style={{ fontSize: 35, textAlign: 'center', marginTop: 0 }}>{items2[i][k]}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => { if (k >= 1) setK(--k); if (j == k) console.warn("Cannot Convert from " + items2[i][j] + " to " + items2[i][j]) }}
              ><Text style={{ fontSize: 35, transform: [{ rotate: '180deg' }], textAlign: 'center', marginTop: 50 }}>{'^'}</Text></TouchableOpacity>
            </View>
          </View>

        </View>

      </View>


      <View style={styles.button}>
        <TextInput keyboardType={'numeric'} value={val} placeholder='Enter the value' onChangeText={setVal} style={{ borderColor: 'green', borderWidth: 2, padding: 2, marginBottom: 10 }}></TextInput>
        <Button title='Convert'
          onPress={() => {
            if (items2[i][j] == "F" && items2[i][k] == "C") setResult(Convert_Fah_Cel(val));
            if (items2[i][j] == "C" && items2[i][k] == "F") setResult(Convert_Cel_Fah(val));

            if (items2[i][j] == "Cm" && items2[i][k] == "Mtr") setResult(Convert_Cm_Meter(val));
            if (items2[i][j] == "Mtr" && items2[i][k] == "Km") setResult(Convert_Meter_Km(val));
            if (items2[i][j] == "Cm" && items2[i][k] == "Km") setResult(Convert_Cm_Km(val));
            if (items2[i][j] == "Km" && items2[i][k] == "Cm") setResult(Convert_Km_Cm(val));
            if (items2[i][j] == "Km" && items2[i][k] == "Mtr") setResult(Convert_Km_Meter(val));
            if (items2[i][j] == "Mtr" && items2[i][k] == "Cm") setResult(Convert_Meter_Cm(val));

            if (items2[i][j] == "Kg" && items2[i][k] == "Pounds") setResult(Convert_Kg_Pounds(val));
            if (items2[i][j] == "Pounds" && items2[i][k] == "Kg") setResult(Convert_Pounds_Kg(val));
            if (items2[i][j] == "Gm" && items2[i][k] == "Kg") setResult(Convert_Gm_Kg(val));
            if (items2[i][j] == "Kg" && items2[i][k] == "Gm") setResult(Convert_Kg_Gm(val));
            if (items2[i][j] == "Gm" && items2[i][k] == "Pounds") setResult(Convert_Gm_Pounds(val));
            if (items2[i][j] == "Pounds" && items2[i][k] == "Gm") setResult(Convert_Pounds_Gm(val));
          }}
        ></Button>
        <Text style={{ marginTop: 10, padding: 4, fontSize: 20, textAlign: 'center', color: 'green' }}>{result}  {items2[i][k]}</Text>
      </View>


    </View>
  );
}


const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    textAlign: 'center',
    color: '677D6A',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    marginBottom: 20,
    padding: 10
  },

  button: {
    flex: 0.5,
    marginTop: 50,
    borderRadius: 5,
    borderColor: 'green',
    marginLeft: 70,
    marginRight: 70,
    shadowColor: 'black',
  }
})


export default App;