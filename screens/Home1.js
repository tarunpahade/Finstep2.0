import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/core";
import Carousel1 from "../components/carasoul";

const Home1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.home}>
      <View style={[styles.header, styles.headerShadowBox]}>
        <View style={styles.profileWelcome}>
          <View style={[styles.profilePic, styles.tabBarsBg]}>
            <Image
              style={[
                styles.currencyCrushGrowth,
                styles.backgroundIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/currency-crush-growth.png")}
            />
          </View>
          <View style={styles.titletext}>
            <Text style={[styles.hiLou, styles.hiLouClr]}>Hi, Lou</Text>
            <Text style={[styles.welcomeBack, styles.amountTypo]}>
              Welcome back!
            </Text>
          </View>
        </View>
        <Image
          style={styles.moreOverflowMenuHorizIcon}
          contentFit="cover"
          source={require("../assets/moreoverflowmenuhoriz.png")}
        />
      </View>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentScrollViewContent}
      >
        <TouchableOpacity
          style={[styles.balance, styles.balanceFlexBox]}
          onPress={() => {
            navigation.navigate("Wallet2");
          }}
        >
          <Image
            style={styles.currencyCrushCoins}
            contentFit="cover"
            source={require("../assets/currency-crush-coins.png")}
          />
          <View style={styles.options}>
            <View style={[styles.balance1, styles.balanceFlexBox]}>
              <View>
                <Text style={[styles.yourBalance, styles.amountTypo]}>
                  Your balance
                </Text>
                <Text style={[styles.hiLou, styles.hiLouClr]}>7,065.00</Text>
              </View>
              <Image
                style={[styles.chevronArrowLeftIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/chevronarrowleft.png")}
              />
            </View>
            <View style={styles.wallet}>
              <View style={styles.icontext}>
                <Image
                  style={styles.iconLayout1}
                  contentFit="cover"
                  source={require("../assets/wallet.png")}
                />
                <Text style={[styles.wallet1, styles.valueTypo]}>Wallet</Text>
              </View>
              <Image
                style={[styles.chevronArrowLeftIcon1, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/chevronarrowleft.png")}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.options1}>
          <TouchableOpacity
            style={[styles.principalButtons, styles.principalFlexBox]}
            onPress={() => {
              navigation.navigate("Send To");
            }}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/icon5.png")}
            />
            <Text style={[styles.title, styles.titleTypo]}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.principalButtons1, styles.principalFlexBox]}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/icon1.png")}
            />
            <Text style={[styles.title1, styles.titleTypo]}>Request</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.principalButtons2, styles.principalFlexBox]}
          >
            <View style={styles.iconLayout}>
              <Image
                style={[styles.backgroundIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/background.png")}
              />
              <View style={styles.options2}>
                <View
                  style={[styles.optionsItem, styles.optionsItemPosition]}
                />
                <View
                  style={[styles.optionsItem, styles.optionsItemPosition2]}
                />
                <View
                  style={[styles.optionsInner, styles.optionsInnerPosition]}
                />
                <View
                  style={[styles.rectangleView, styles.optionsInnerPosition]}
                />
              </View>
            </View>
            <Text style={[styles.title, styles.titleTypo]}>Scan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.yourLastActivity}>
          <View style={[styles.title3, styles.title3FlexBox2]}>
            <Text style={[styles.hiLou, styles.hiLouClr]}>
              Your last activity
            </Text>
            <View style={styles.tag}>
              <Text style={[styles.value, styles.valueFlexBox]}>View</Text>
            </View>
          </View>
          <View style={[styles.activity, styles.title3FlexBox]}>
            <View style={styles.icontext1}>
              <Image
                style={styles.icon3}
                contentFit="cover"
                source={require("../assets/icon2.png")}
              />
              <Text style={[styles.shopping, styles.valueFlexBox]}>
                Grocery
              </Text>
            </View>
            <View>
              <Text style={[styles.amount, styles.amountTypo]}>$120,00</Text>
            </View>
          </View>
          <View style={[styles.activity, styles.title3FlexBox]}>
            <View style={styles.icontext1}>
              <Image
                style={styles.icon3}
                contentFit="cover"
                source={require("../assets/icon3.png")}
              />
              <Text style={[styles.shopping, styles.valueFlexBox]}>
                Shopping
              </Text>
            </View>
            <Text style={[styles.amount, styles.amountTypo]}>$10,00</Text>
          </View>
          <View style={[styles.activity, styles.title3FlexBox]}>
            <View style={styles.icontext1}>
              <Image
                style={styles.icon3}
                contentFit="cover"
                source={require("../assets/icon4.png")}
              />
              <Text style={[styles.shopping, styles.valueFlexBox]}>Travel</Text>
            </View>
            <Text style={[styles.amount, styles.amountTypo]}>$120,00</Text>
          </View>
          <View style={styles.yourLastActivity}>
            <View style={[styles.title3, styles.title3FlexBox2]}>
              <Text style={[styles.hiLou, styles.hiLouClr]}>
                Do More With Finstep
              </Text>
            </View>
            <View style={[styles.options1,{width:'80%',padding:2,backgroundColor:Color.ink06,borderRadius:Border.br_mini,borderWidth:0.5,}]}>
              <TouchableOpacity
                style={[styles.principalButtons4, styles.principalFlexBox]}
                onPress={() => {
                  navigation.navigate("SendMoney");
                }}
              >
                <Image
                  style={[styles.iconLayoutContainer2]}
                  contentFit="cover"
                  
                  source={require("../assets/activity.png")}
                />
                <Text style={[ styles.titleTypo,{fontWeight:500,color:'gray'}]}>Analyze</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={[styles.principalButtons4, styles.principalFlexBox]}
              onPress={() => {
               // navigation.navigate("SendMoney");
              }}
            >
              <Image
                style={[styles.iconLayoutContainer2]}
                contentFit="cover"
                source={require("../assets/statistics.png")}
              />
              <Text style={[ styles.titleTypo,{fontWeight:500,color:'gray'}]}>Savings</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.principalButtons4, styles.principalFlexBox]}
            onPress={() => {
             navigation.navigate("Transactions");
            }}
          >
            <Image
              style={[styles.iconLayoutContainer2]}
              contentFit="cover"
              source={require("../assets/home-1.png")}
            />
            <Text style={[ styles.titleTypo,{fontWeight:500,color:'gray'}]}>Learning</Text>
          </TouchableOpacity>
              
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headerShadowBox: {
    justifyContent: "space-between",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  tabBarsBg: {
    backgroundColor: Color.ink07,
    overflow: "hidden",
  },
  backgroundIconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  hiLouClr: {
    color: Color.ink01Black,
    textAlign: "center",
  },
  amountTypo: {
    fontFamily: FontFamily.paragraphLarge,
    color: Color.ink01Black,
  },
  balanceFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  valueTypo: {
    fontSize: FontSize.paragraphMedium_size,
    fontFamily: FontFamily.paragraphLarge,
  },
  principalFlexBox: {
    padding: "4.5%",
    borderRadius: Border.br_mini,
    alignItems: "center",
    justifyContent: "center",
  },
  titleTypo: {
    marginTop: 17.09,
    height: 21,
    fontFamily: FontFamily.proximaNovaBold,
    lineHeight: 21,
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    color: Color.ink01Black,
    letterSpacing: 0,
  },
  iconLayout: {
    height: 54,
    width: 54,
  },
  iconLayoutContainer2: {
    height: 34,
    width: 34,
  },
  optionsLayout: {
    backgroundColor: Color.gray,
    borderRadius: 3,
    left: "8.33%",
    right: "53.31%",
    width: "38.36%",
    height: "38.36%",
    position: "absolute",
  },
  optionsItemPosition: {
    bottom: "8.33%",
    top: "53.31%",
    backgroundColor: "#000",
  },
  optionsItemPosition2: {
    bottom: "10.33%",
    top: "7.31%",
    backgroundColor: "#000",
  },
  optionsInnerPosition: {
    left: "53.31%",
    right: "8.33%",
    backgroundColor: "#000",
    borderRadius: 3,
    width: "38.36%",
    height: "38.36%",
    position: "absolute",
  },
  title3FlexBox: {
    width: "70%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title3FlexBox2: {
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  valueFlexBox: {
    textAlign: "left",
    lineHeight: 24,
    color: Color.ink01Black,
  },
  currencyCrushGrowth: {
    width: 204,
    height: 204,
  },
  profilePic: {
    borderRadius: 40,
    borderStyle: "solid",
    borderColor: "#cdd9e3",
    borderWidth: 0.5,
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  hiLou: {
    fontSize: FontSize.headingH4_size,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.ink01Black,
  },
  welcomeBack: {
    lineHeight: 24,
    fontSize: FontSize.paragraphLarge_size,
    fontFamily: FontFamily.paragraphLarge,
    letterSpacing: 0,
    textAlign: "center",
  },
  titletext: {
    marginLeft: 15,
  },
  profileWelcome: {
    flexDirection: "row",
  },
  moreOverflowMenuHorizIcon: {
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  header: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.accentGreen,
    width: "98%",
    margin: 5,
    marginTop: 0,
    height: 137,
    padding: 20,
    alignItems: "flex-end",
    flexDirection: "row",
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    justifyContent: "space-between",
    left: 0,
    top: 0,
    position: "absolute",
  },
  currencyCrushCoins: {
    width: 122,
    height: 121,
  },
  yourBalance: {
    fontSize: FontSize.paragraphSmall_size,
    lineHeight: 16,
    textAlign: "center",
  },
  chevronArrowLeftIcon: {
    marginLeft: 10,
    overflow: "hidden",
  },
  balance1: {
    justifyContent: "center",
  },
  wallet1: {
    marginLeft: 10,
    lineHeight: 24,
    textAlign: "center",
    color: Color.ink01Black,
  },
  icontext: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  chevronArrowLeftIcon1: {
    marginLeft: 44,
    overflow: "hidden",
  },
  wallet: {
    width: 147,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    marginTop: 15,
    alignItems: "center",
    borderRadius: Border.br_3xs,
    flexDirection: "row",
  },
  options: {
    justifyContent: "flex-end",
    marginLeft: 14,
  },
  balance: {
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    alignItems: "flex-end",
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    backgroundColor: Color.ink07,
  },
  title: {
    width: 35,
  },
  principalButtons: {
    backgroundColor: Color.accentPurple,
  },
  title1: {
    width: 55,
  },
  principalButtons1: {
    backgroundColor: Color.accentBlue,
    marginLeft: 15,
  },
  principalButtons4: {
    
    opacity:1
  },
  principalButtons5: {

    marginLeft: 15,
  },
  principalButtons6: {
    marginLeft: 15,
  },
  backgroundIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  optionsChild: {
    bottom: "53.31%",
    top: "8.33%",
  },
  optionsItem: {
    backgroundColor: Color.gray,
    borderRadius: 3,
    left: "8.33%",
    right: "53.31%",
    width: "38.36%",
    height: "38.36%",
    position: "absolute",
  },
  optionsInner: {
    bottom: "53.31%",
    top: "8.33%",
  },
  rectangleView: {
    bottom: "8.33%",
    top: "53.31%",
  },
  options2: {
    top: 12,
    left: 12,
    width: 31,
    height: 31,
    position: "absolute",
  },
  principalButtons2: {
    backgroundColor: Color.accentRed,
    marginLeft: 15,
  },
  options1: {
    marginTop: 28,
    flexDirection: "row",
    justifyContent:'space-between',
    width:'85%'
  },
  value: {
    fontSize: FontSize.paragraphMedium_size,
    fontFamily: FontFamily.paragraphLarge,
  },
  rightIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
    overflow: "hidden",
  },
  tag: {
    borderRadius: 9,
    borderWidth: 1,
    padding: Padding.p_9xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    borderColor: "#aaa",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  title3: {
    height: 32,
  },
  icon3: {
    width: 37,
    height: 37,
  },
  shopping: {
    fontFamily: FontFamily.paragraphMedium,
    marginLeft: 13,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.paragraphMedium_size,
    letterSpacing: 0,
  },
  icontext1: {
    alignItems: "center",
    flexDirection: "row",
  },
  amount: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.paragraphMedium_size,
    fontFamily: FontFamily.paragraphLarge,
    letterSpacing: 0,
  },
  activity: {
    backgroundColor: Color.ink06,
    padding: Padding.p_3xs,
    paddingRight: 5,
    marginTop: 10,
    borderRadius: Border.br_3xs,
  },
  yourLastActivity: {
    marginTop: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    width: "100%",
    padding: "2%",
    paddingTop: 0,
    marginTop: 137,
    zIndex: 3,
    position: "relative",
  },


  home: {
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.ink07,
  },
});

export default Home1;
