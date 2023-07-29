import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Touchable, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Border, Padding, Color } from "../GlobalStyles";
import Carousel1 from "../components/carasoul";

const Wallet2 = () => {
  return (
    <View style={styles.wallet2}>
      <View style={[styles.walletUi, styles.tab1FlexBox]}>
        <View style={[styles.tabTitle, styles.tabTitleFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/arrowrightnext.png")}
          />
          <Text style={[styles.yourWallet, styles.amountTypo]}>
            Your wallet
          </Text>
          <View style={styles.profileAndSettings}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/moreoverflowmenuhoriz.png")}
            />
            <Image
              style={[styles.accountUserIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/accountuser.png")}
            />
          </View>
        </View>
        <View style={[styles.cards, styles.cardsShadowBox]}>
          <View style={[styles.creditCardLayout]}>
            <Carousel1 />
          </View>
        </View>
        <View style={{width:'100%',alignContent:"center",alignItems:'center'}}>
          <TouchableOpacity style={[styles.activity, styles.title3FlexBox]}>
            <View style={styles.icontext1}>
            <Image
            style={styles.icon3}
            contentFit="cover"
            source={require("../assets/icon2.png")}
          />
              <Text style={[styles.shopping, styles.valueFlexBox]}>
                Order Card
              </Text>
            </View>
            <View style={[styles.amount, styles.amountTypo]}>
              <Image
                style={[
                  styles.iconLayout,
                  { transform: [{ rotate: "180deg" }] },
                ]}
                contentFit="cover"
                source={require("../assets/arrowrightnext.png")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.activity, styles.title3FlexBox]}>
            <View style={styles.icontext1}>
          
            <View style={ { width: 37,
              height: 35, backgroundColor:'#fff',borderRadius:30,textAlign:'center',borderWidth:0.5,borderColor:Color.ink02,paddingTop:3}}>
            
              <Text style={[styles.shopping,{marginLeft:0,fontSize:18}]}>₹</Text>
            </View>
              <Text style={[styles.shopping, styles.valueFlexBox]}>
                Transaction History
              </Text>
            </View>
            <View style={[styles.amount, styles.amountTypo]}>
            <Image
              style={[
                styles.iconLayout,
                { transform: [{ rotate: "180deg" }] },
              ]}
              contentFit="cover"
              source={require("../assets/arrowrightnext.png")}
            />
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.activity, styles.title3FlexBox]}>
          <View style={styles.icontext1}>
          <Image
          style={styles.icon3}
          contentFit="cover"
          source={require("../assets/icon1.png")}
        />
       
            <Text style={[styles.shopping, styles.valueFlexBox]}>
             Card Settings
            </Text>
          </View>
          <View style={[styles.amount, styles.amountTypo]}>
          <Image
            style={[
              styles.iconLayout,
              { transform: [{ rotate: "180deg" }] },
            ]}
            contentFit="cover"
            source={require("../assets/arrowrightnext.png")}
          />
        </View>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tab1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabTitleFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  amountTypo: {
    fontFamily: FontFamily.headingH4,
    lineHeight: 23,
    letterSpacing: 0,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.headingH5_size,
  },
  iconLayout: {
    height: 26,
    width: 26,
    overflow: "hidden",
  },
  cardsShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  informationPosition: {
    left: 20,
    position: "absolute",
  },
  expDateTypo: {
    fontFamily: FontFamily.paragraphLarge,
    lineHeight: 16,
    fontSize: FontSize.paragraphSmall_size,
  },
  creditCardLayout: {
    marginTop: 15,
    height: 174,
    width: "100%",
    borderRadius: Border.br_xl,
  },

  yourWallet: {
    color: Color.ink01Black,
    textAlign: "center",
  },
  accountUserIcon: {
    marginLeft: 10,
  },
  profileAndSettings: {
    flexDirection: "row",
  },
  tabTitle: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    width: "100%",
    height: 102,
    padding: Padding.p_xl,
    alignItems: "flex-end",
    backgroundColor: Color.ink07,
  },
  cards: {
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowRadius: 16,
    elevation: 16,
    marginTop: 10,
  },
  walletUi: {
    justifyContent: "center",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#191d21",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    position: "absolute",
  },
  wallet2: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.ink07,
  },

  activity: {
    backgroundColor: Color.ink06,
    padding: Padding.p_3xs,
    paddingRight: 5,
    marginTop: 10,
    borderRadius: Border.br_3xs,
    width:'100%'
  },

  title3: {
    height: 32,
  },
  icon3: {
    width: 35,
    height: 35,
  },
  shopping: {
    fontFamily: FontFamily.paragraphMedium,
    marginLeft: 13,
    fontWeight: "700",
    textAlign: "center",
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

  title3FlexBox: {
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default Wallet2;
