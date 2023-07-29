import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Onboarding3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding3}>
    
      <View style={[styles.container, styles.homeBarSpaceBlock]}>
        <Text style={styles.titleTypo}>Finstep</Text>
        <View style={styles.textFlexBox}>
          <Image
            style={styles.currencyCrushPassword}
            contentFit="cover"
            source={require("../assets/currency-crush-password.png")}
          />
          <View style={styles.pagination}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/12.png")}
            />
            <Image
              style={[styles.icon1, styles.icon1SpaceBlock]}
              contentFit="cover"
              source={require("../assets/12.png")}
            />
            <View style={[styles.current, styles.buttonBg]} />
          </View>
          <View style={[styles.onboarding, styles.textFlexBox]}>
            <Text style={[styles.title, styles.titleTypo]}>
              Have access anywhere!
            </Text>
            <Text
              style={[styles.text, styles.textFlexBox]}
            >{`Reach your financial goal within your first year!  `}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.button, styles.buttonBg]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Home1")}
        >
          <Image
            style={[styles.iconLeft, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon-left2.png")}
          />
          <Text style={[styles.label, styles.labelSpaceBlock]}>
            Get Started
          </Text>
          <Image
            style={[styles.iconRight, styles.labelSpaceBlock]}
            contentFit="cover"
            source={require("../assets/icon-right2.png")}
          />
        </TouchableOpacity>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  
  buttonBg: {
    backgroundColor: Color.utilityActive,
    borderRadius: Border.br_9xs,
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleTypo: {
    fontFamily: FontFamily.headingH4,
    lineHeight: 26,
    fontSize: FontSize.headingH4_size,
    textAlign: "center",
    color: Color.ink01,
    fontWeight: "600",
    letterSpacing: 0,
  },
  iconLayout: {
    display: "none",
    height: 16,
    maxWidth: "95%",
    overflow: "hidden",
  },
  labelSpaceBlock: {
    marginLeft: 8,
    flex: 1,
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
  currencyCrushPassword: {
    width: 260,
    height: 221,
  },
  icon: {
    height: 8,
    width: 8,
  },
  icon1: {
    width: 8,
    marginLeft: 16,
  },
  current: {
    width: 16,
    marginLeft: 16,
    height: 8,
  },
  pagination: {
    marginTop: 32,
    flexDirection: "row",
  },
  title: {
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.paragraphLarge_size,
    lineHeight: 24,
    fontFamily: FontFamily.paragraphLarge,
    display: "flex",
    width: 247,
    marginTop: 16,
    textAlign: "center",
    color: Color.ink01,
    letterSpacing: 0,
    justifyContent: "center",
  },
  onboarding: {
    width: '80%',
    height: 96,
    marginTop: 32,
  },
  iconLeft: {
    flex: 1,
    display: "none",
    height: 16,
    maxWidth: "100%",
  },
  label: {
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.paragraphLargeBold,
    color: Color.ink07,
    textAlign: "center",
  },
  iconRight: {
    display: "none",
    height: 16,
    maxWidth: "100%",
    overflow: "hidden",
  },
  button: {
    width: '95%',
    height: 54,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: '100%',
    padding:'5%',
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
  onboarding3: {
    backgroundColor: Color.ink07,
    width: "100%",
    padding:'5%',
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default Onboarding3;
