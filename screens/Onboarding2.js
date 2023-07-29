import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Onboarding2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding2}>
    <StatusBar barStyle="default" />
      <View style={[styles.container, styles.homeBarSpaceBlock]}>
        <Text style={[styles.finstep, styles.titleTypo]}>Finstep</Text>
        <View style={styles.contentFlexBox}>
          <Image
            style={styles.currencyCrushMobileMoney}
            contentFit="cover"
            source={require("../assets/currency-crush-mobile-money.png")}
          />
          <View style={styles.pagination}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/11.png")}
            />
            <View style={[styles.current, styles.icon1SpaceBlock]} />
            <Image
              style={[styles.icon1, styles.icon1SpaceBlock]}
              contentFit="cover"
              source={require("../assets/11.png")}
            />
          </View>
          <View style={[styles.onboarding, styles.contentFlexBox]}>
            <Text style={[styles.title, styles.textFlexBox]}>
              Check your wallet
            </Text>
            <Text
              style={[styles.text, styles.textFlexBox]}
            >{`Manage your money and invest with just one tap! `}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Onboarding3")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon-left1.png")}
          />
          <Text style={styles.label}>Continue</Text>
          <Image
            style={[styles.iconRight, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon-right1.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.homeBar, styles.homeBarSpaceBlock]}>
        <View style={[styles.homeIndicator, styles.capIconPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  capIconPosition: {
    opacity: 0.4,
    position: "absolute",
  },
  timeClr: {
    color: Color.ink01,
    letterSpacing: 0,
    textAlign: "center",
  },
  homeBarSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  titleTypo: {
    fontFamily: FontFamily.headingH4,
    lineHeight: 26,
    fontSize: FontSize.headingH4_size,
    fontWeight: "600",
  },
  icon1SpaceBlock: {
    marginLeft: 16,
    height: 8,
  },
  contentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textFlexBox: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    color: Color.ink01,
    letterSpacing: 0,
    alignItems: "center",
  },
  iconLayout: {
    display: "none",
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  border: {
    top: 0,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#191d21",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    position: "absolute",
  },
  finstep: {
    textAlign: "center",
    color: Color.ink01,
    letterSpacing: 0,
    lineHeight: 26,
    fontSize: FontSize.headingH4_size,
  },
  currencyCrushMobileMoney: {
    width: 260,
    height: 240,
  },
  icon: {
    height: 8,
    width: 8,
  },
  current: {
    width: 16,
    marginLeft: 16,
    backgroundColor: Color.utilityActive,
    borderRadius: Border.br_9xs,
  },
  icon1: {
    marginLeft: 16,
    width: 8,
  },
  pagination: {
    marginTop: 32,
    flexDirection: "row",
  },
  title: {
    width: 298,
    height: 39,
    fontFamily: FontFamily.headingH4,
    lineHeight: 26,
    fontSize: FontSize.headingH4_size,
    fontWeight: "600",
  },
  text: {
    fontSize: FontSize.paragraphLarge_size,
    lineHeight: 24,
    fontFamily: FontFamily.paragraphLarge,
    width: 247,
    marginTop: 16,
  },
  onboarding: {
    marginTop: 32,
  },
  label: {
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.paragraphLargeBold,
    color: Color.ink07,
    marginLeft: 8,
    textAlign: "center",
  },
  iconRight: {
    marginLeft: 8,
  },
  button: {
    width: '90%',
    height: 54,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.utilityActive,
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: '95%',
    paddingHorizontal:'5%',
    justifyContent: "space-between",
    alignItems: "center",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.ink03,
    width: 134,
    height: 5,
  },
  homeBar: {
    height: 34,
  },
  onboarding2: {
    backgroundColor: Color.ink07,
    flex: 1,
    padding:'2%',
    width: "98%",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Onboarding2;
