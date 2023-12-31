import {StyleSheet,Text,View,TextInput,TouchableOpacity,Alert,} from "react-native";
  import React, { useState } from "react";
  import Checkbox from "expo-checkbox";
  
  const Contact = ({ navigation }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [agree, setAgree] = useState(false);
  
    const submit = () => {
      if (!name && !email && !phone && !message) {
        Alert.alert("Plzz fill all the fields");
      } else {
        Alert.alert(`Thank You ${name}`);
        navigation.navigate("Contact");
      }
    };
  
    return (
      <View style={styles.mainContainer}>
      
        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Name </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={"Enter here"}
            value={name}
            onChangeText={(userdata) => setName(userdata)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Mobile Number </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={"e.g.6301574987"}
            value={phone}
            onChangeText={(phone) => setPhone(phone)}
          />
        </View>
  
        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Email </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={"e.g.srijaappala09@gmail.com"}
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </View>
  
        
  
        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Message </Text>
          <TextInput
            style={[styles.inputStyle, styles.multilineStyle]}
            placeholder={"Message"}
            value={message}
            onChangeText={(msg) => setMessage(msg)}
            numberOfLines={5}
            multiline={true}
          />
        </View>
  
        {/* checkbox  */}
  
        <View style={styles.wrapper}>
          <Checkbox
            value={agree}
            onValueChange={() => setAgree(!agree)}
            color={agree ? "#4630EB" : undefined}
          />
          <Text style={styles.wrapperText}>
            I have read and agreed with the TC
          </Text>
        </View>
  
        {/* submit button  */}
  
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              backgroundColor: agree ? "#4630EB" : "grey",
            },
          ]}
          disabled={!agree}
          onPress={submit}>
          <Text style={styles.buttonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    mainContainer: {
      height: "100%",
      paddingHorizontal: 30,
      backgroundColor: "#fff",
    },
    mainHeader: {
      fontSize: 20,
      color: "#344055",
      fontWeight: "500",
      paddingTop: 20,
      paddingBottom: 15,
      fontFamily: "JosefinSans_500Medium",
      textTransform: "capitalize",
    },
    description: {
      fontSize: 20,
      color: "#7d7d7d",
      paddingBottom: 20,
      fontFamily: "JosefinSans_400Light",
      lineHeight: 25,
    },
  
    inputContainer: {
      marginTop: 20,
    },
    labels: {
      fontWeight: "bold",
      // fontSize: 15,
      color: "#7d7d7d",
      paddingBottom: 5,
      fontFamily: "JosefinSans_300Light",
      lineHeight: 25,
    },
    inputStyle: {
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.3)",
      paddingHorizontal: 15,
      paddingVertical: 6,
      borderRadius: 2,
    },
    multiineStyle: {
      paddingVertical: 4,
    },
    buttonStyle: {
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 18,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 30,
    },
    buttonText: {
      color: "#eee",
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
      marginTop: 20,
      fontFamily: "JosefinSans_300Light",
    },
    wrapperText: {
      marginLeft: 10,
      color: "#7d7d7d",
      fontFamily: "JosefinSans_300Light",
    },
  });
  
  export default Contact;
