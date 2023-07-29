import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MoneySent = (props) => {
  console.log(props.params);
  return (
    <View style={[styles.moneySent, styles.moneyLayout]}>
      <View style={[styles.frame, styles.moneyLayout]}>
        <View style={[styles.moneySentUi, styles.moneyLayout]}>
          <View style={[styles.uiIcon]}>
            <Image
              style={styles.removeCloseXIcon}
              contentFit="cover"
              source={require("../assets/removeclosex.png")}
            />
          </View>
       
          <View  style={{marginTop:'30%'}}>
          <View   style={{width:'100%'}} >
          <Image
            style={styles.currencyCrushSpaklingBitcoi}
            contentFit="cover"
            source={require("../assets/currency-crush-spakling-bitcoin.png")}
          />
          </View>
          <View style={styles.profileFlexBox}>
            <View style={styles.title}>
              <Text style={styles.moneySent1}>Money sent!</Text>
              <Text style={styles.weHaveJust}>
                We have just send your money to
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
              <Text style={[styles.melanieWard, styles.timeClr]}>
                Melanie Ward
              </Text>
            </View>
          </View>
          <View style={styles.profileFlexBox}>
            <Text style={[styles.amount1, styles.amount1Typo]}>$40.00</Text>
            <Text style={[styles.inputReason, styles.dateTypo]}>
              for “Tuesday lunch”
            </Text>
          </View>
          </View>
        </View>
    
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  moneyLayout: {

    alignItems: "center",
  },
 
  profileFlexBox: {
    justifyContent: "center",
    marginTop: 30,
    alignItems: "center",
  },
  timeClr: {
    color: Color.ink01,
    fontWeight: "600",
    letterSpacing: 0,
  },
  amount1Typo: {
    fontFamily: FontFamily.headingH4,
    lineHeight: 26,
    fontSize: FontSize.headingH4_size,
  },
  dateTypo: {
    lineHeight: 16,
    fontSize: FontSize.paragraphSmall_size,
    textAlign: "center",
    color: Color.ink01Black,
  },
  capIconPosition: {
    opacity: 0.4,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  removeCloseXIcon: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  uiIcon: {

top:50,
right:130         
  },
  currencyCrushSpaklingBitcoi: {
    width: 210,
    height: 165,
   
  },
  moneySent1: {
    fontSize: 25,
    letterSpacing: -1,
    lineHeight: 42,
    fontWeight: "800",
    fontFamily: FontFamily.headingH3,
    textAlign: "left",
    color: Color.ink01Black,
  },
  weHaveJust: {
    fontSize: FontSize.paragraphSmall_size,
    lineHeight: 24,
  
    textAlign: "center",
    fontFamily: FontFamily.paragraphLarge,
    letterSpacing: 0,
    color: Color.ink01Black,
  },
  title: {
    alignItems: "center",
  },
  currencyCrushAnalytics: {
    top: 9,
    width: 32,
    height: 30,
    left: 0,
    position: "absolute",
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
    backgroundColor:'#fff',
  },
  melanieWard: {
    marginLeft: 15,
    fontFamily: FontFamily.headingH4,
    lineHeight: 26,
    fontSize: FontSize.headingH4_size,
    color: Color.ink01,
    textAlign: "left",
  },
  profile: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.greenSubtle,
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  amount1: {
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    lineHeight: 26,
    fontSize: FontSize.headingH4_size,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.ink01Black,
  },
  inputReason: {
    marginTop: 5,
    fontFamily: FontFamily.paragraphLarge,
  },
  date: {
    fontWeight: "700",
    fontFamily: FontFamily.paragraphLargeBold,
    marginTop: 30,
  },
  moneySentUi: {
    backgroundColor: Color.accentGreen,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 20,
    shadowOpacity: 1,
    paddingTop: Padding.p_5xs,
    width: '100%',
    alignItems: "center",
    height:'100%',
   justifyContent:'flex-start'
  },


  frame: {
    width:'100%',
    alignItems: "center",
    overflow: "hidden",
  },


  moneySent: {
    flex: 1,
    height:'100%',
    width: '100%',
    

  
  },
});

export default MoneySent;
