import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  Animated,
  ScrollView
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import Carousel1 from "../components/carasoul";

const SendMoney = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState();
  const [popup, setShowPopup] = useState(false)
  return (
    <View style={[styles.sendMoney, styles.frameLayout]}>
      <View style={[styles.frame, styles.framePosition]}>
        <View style={styles.sendMoneyUi}>
          <View style={styles.tabTitle}>
            <View style={styles.arrowRightNext}>
              <TouchableOpacity
                style={styles.vector}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/vector.png")}
                />
              </TouchableOpacity>
            </View>
            <Text style={[styles.sendMoney1, styles.valueClr1]}>
              Send Money
            </Text>
          </View>
          <View style={[styles.profile, styles.profileFlexBox]}>
            <View style={styles.icon}>
              <Image
                style={styles.currencyCrushAnalytics}
                contentFit="cover"
                source={require("../assets/currency-crush-analytics2.png")}
              />
            </View>
            <View>
            <Text style={[styles.melanieWard, styles.timeClr]}>
            Paying Melanie Ward
            </Text>
            
            <Text style={[styles.melanieWard,{fontSize:11}]}>
           +91 98500 45469
            </Text>
            
            </View>
          </View>


          <View style={[styles.rightFlexBox, { width: "100%" }]}>
            <View style={[styles.input]}>
              <View
                style={[styles.left, styles.leftFlexBox]}
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <TextInput
                  style={[styles.amount, styles.amountTypo]}
                  placeholder="₹0  "
                  keyboardType="number-pad"
                  placeholderTextColor="#000"
                  value={amount}
                  onChangeText={(text) => setAmount(text)}
                />
              </View>
            </View>
            <View style={[styles.input, styles.inputBorder]}>
              <View
                style={[styles.left, styles.leftFlexBox]}
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <TextInput
                  style={[styles.value, styles.valueClr1]}
                  placeholder="Enter Reason Here"
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={[styles.button, styles.leftFlexBox]}
            activeOpacity={0.2}
            onPress={() => 
        //      navigation.navigate("MoneySent")
      setShowPopup(true)    
      }
          >
            <Text style={[styles.label, styles.textTypo]}>Continue</Text>
          </TouchableOpacity>
        </View>
     
      </View>
    </View>
  );
};

const PopupContainer = ({showContainer}) => {
 
  
    return (  
  
    <Animated.View style={[styles.popupContainer]}>
    <TouchableOpacity onPress={()=>{showContainer(false)}}  style={styles.crossButton}>
      <Text style={{ fontSize: 19, color: "white" }}>X</Text>
    </TouchableOpacity>
  
    <ScrollView >
      {/* Cross button */}
  
      {/* Popup content */}
      <View style={styles.popupContent}>
        <View style={styles.popupHeader}>
          <View>
            <Text style={styles.popupBoldText}>My Task</Text>
          </View>
          <View>
            <Text>500</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View
            style={[
         
              { width: "73%", marginTop: 30 },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "baseline",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  padding: 6,
                  flexDirection: "row",
                  alignItems: "stretch",
                  justifyContent: "space-around",
                  //   backgroundColor:'#333',
                  width: "100%",
                  paddingHorizontal: 10,
                }}
              >
               
                <Text style={[styles.popupBoldText, { paddingLeft: 30 }]}>
                this is name
                </Text>
              </View>
            </View>
          </View>
          
          
        </View>
      </View>
    </ScrollView>
  </Animated.View>
  
    )}
  

const styles = StyleSheet.create({
  frameLayout: {
    height: 812,
    overflow: "hidden",
  },
  inputBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  capIconPosition: {
    opacity: 0.4,
    position: "absolute",
  },
  timeClr: {
    color: Color.ink01,
    textAlign: "center",
  },
  framePosition: {
    top: 0,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  valueClr1: {
    color: Color.ink01Black,
    textAlign: "center",
  },
  rightFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  namedateFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  expDateTypo: {
    lineHeight: 16,
    fontSize: FontSize.paragraphSmall_size,
    fontFamily: FontFamily.paragraphLarge,
  },
  amountTypo: {
    fontFamily: FontFamily.headingH4,
    fontWeight: "600",
  },
  informationPosition: {
    left: 20,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.paragraphLargeBold,
    fontWeight: "700",
    lineHeight: 24,
  },
  creditCardLayout: {
    marginLeft: 15,
    height: 174,
    width: 325,
    borderRadius: Border.br_xl,
  },
  icon2SpaceBlock: {
    marginLeft: 16,
    height: 8,
  },
  leftFlexBox: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  valueClr: {
    color: Color.ink021,
    display: "none",
    fontSize: FontSize.paragraphMedium_size,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: "#191d21",
    width: 22,
    opacity: 0.35,
    top: 0,
    position: "absolute",
    height: 11,
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "-83.33%",
    top: "16.66%",
    right: "116.67%",
    bottom: "16.67%",
    width: "66.67%",
    height: "66.67%",
    position: "absolute",
  },
  arrowRightNext: {
    width: 26,
    height: 26,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  sendMoney1: {
    marginLeft: 80,
    fontFamily: FontFamily.headingH4,
    fontWeight: "600",
    lineHeight: 23,
    fontSize: FontSize.headingH5_size,
    letterSpacing: 0,
  },
  tabTitle: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    height: 102,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xl,
    alignItems: "flex-end",
    flexDirection: "row",
    width: 375,
    backgroundColor: Color.ink07,
  },
  amount: {
    marginTop: 10,
    lineHeight: 23,
    fontFamily: FontFamily.headingH4,
    fontSize: FontSize.headingH5_size,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.ink01,
  },
  amount2: {
    fontSize: 38,
    lineHeight: 48,
  },
  leftIcon: {
    display: "none",
  },
  value: {
    marginLeft: 8,
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 24,
    fontFamily: FontFamily.paragraphLarge,
    flex: 1,
  },
  left: {
    paddingHorizontal: 0,
    flex: 1,
  },
  input: {
    borderColor: "#acb8c2",
    width: "90%",
    height: 53,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    marginTop: 22,
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.ink07,
    textAlign: "center",
  },
  label: {
    fontSize: FontSize.paragraphLarge_size,
    color: Color.ink07,

    textAlign: "center",
    letterSpacing: 0,
  },

  button: {
    backgroundColor: Color.utilityActive,
    width: "90%",
    textAlign: "center",
    height: 54,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_9xs,
    marginTop: 40,
  },
  sendMoneyUi: {
    alignItems: "center",
    width: "100%",
  },
  frame: {
    width: "100%",
    alignItems: "center",
    overflow: "hidden",
  },
  sendMoney: {
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.ink07,
  },
  profile: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.greenSubtle,
    padding: Padding.p_3xs,
    flexDirection: "row",
  },

  profileFlexBox: {
    justifyContent: "center",
    marginTop: 30,
    alignItems: "center",
  },

  icon: {
    borderRadius: Border.br_21xl,
    borderColor: "#cdd9e3",
    borderWidth: 0.5,
    width: 50,
    height: 50,
    borderStyle: "solid",
    backgroundColor: Color.greenSubtle,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  melanieWard: {
    marginLeft: 15,
    fontFamily: FontFamily.headingH4,
    lineHeight: 26,
    fontSize: FontSize.paragraphMedium_size,
    color: Color.ink01,
    textAlign: "center",
  },

  currencyCrushAnalytics: {
    top: 9,
    width: 32,
    height: 30,
    left: 0,
    position: "absolute",
  },

  timeClr: {
    color: Color.ink01,
    fontWeight: "600",
    letterSpacing: 0,
  },
  //send to button end 
  popupContainer: {
    position: "absolute",
    bottom: -100,
    width: "100%",
    height: '50%',
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    opacity: 0.7,
  },
  crossButton: {
    position: "absolute",
    top: -50,
    right: 10,
    padding: 5,
    paddingHorizontal: 8,
    backgroundColor: "black",
    color: "white",
    borderRadius: 10,
  },
  popupContent: {
    justifyContent: "center",
    alignItems: "center",
    padding: "10%",
  },
  popupHeader: {
    display: "flex",
    width: "100%",

    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignItems: "stretch",
  },
  btnImage: {
    height: "45%",
    width: "35%",
    paddingBottom: 30,
  },
  popupBoldText: { fontSize: 14, color: "#000", fontWeight: "700" },
  btn2: {
    padding: 7,
    paddingHorizontal: 7,
    marginVertical: 10,
    width: "75%",
    alignItems: "center",
    marginLeft: 20,
  
    borderWidth: 3,
  
    borderRadius: 5,
    position: "absolute",
    left: 32,
  },
  btn3: {
    padding: 7,
    paddingHorizontal: 5,
    marginVertical: 10,
    width: "15%",
    alignItems: "center",
    marginLeft: 5,
    borderRadius: 5,
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    width: "90%",
    marginHorizontal: "5%",
    borderBottomWidth: 0,
    borderRadius: 20,
  },
  bodyTxt: {
    paddingBottom: 16,
    borderBottomWidth: 2,
  },
  
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});

export default SendMoney;
// {popup && <View style={styles.overlay} />}
// {popup && (
//   <PopupContainer showContainer={popup} />

// ) }