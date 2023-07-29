import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const SendTo = () => {
  return (
    <View style={[styles.transactions, styles.iconBg]}>
      <View style={[styles.tabsFlexBox]}>
        <View style={styles.tabTitle}>
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/arrowrightnext.png")}
          />
          <Text style={styles.transactions2}>Transactions</Text>
          <View style={styles.profileAndSettings}>
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../assets/moreoverflowmenuhoriz.png")}
            />
            <Image
              style={[styles.accountUserIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/accountuser.png")}
            />
          </View>
        </View>
       
        <View style={styles.accounts}>
          <View style={styles.tabsFlexBox}>
            <View style={styles.tabnames}>
              <View>
                <Text style={[styles.label, styles.labelTypo]}>Recents</Text>
                <View style={styles.indicator} />
              </View>
              <View style={styles.tabnamesChild} />
              <View style={styles.tab1}>
                <Text style={[styles.label, styles.labelTypo]}>Contacts</Text>
              </View>
            </View>
            <View style={[styles.underline, styles.breakBorder]} />
          </View>
          <View style={[styles.profiles, styles.tabsFlexBox]}>
            <View style={styles.profileFlexBox}>
              <View style={styles.iconname}>
                <View style={[styles.icon, styles.iconLayout]}>
                  <Image
                    style={[styles.currencyCrushValue, styles.currencyPosition]}
                    contentFit="cover"
                    source={require("../assets/currency-crush-value.png")}
                  />
                </View>
                <Text style={[styles.deborahSanchez, styles.labelTypo]}>
                  Deborah Sanchez
                </Text>
              </View>
              <Image
                style={styles.iconLayout1}
                contentFit="cover"
                source={require("../assets/moreoverflowmenuhoriz.png")}
              />
            </View>
            <View style={[styles.break, styles.breakBorder]} />
            <View style={[styles.profile2, styles.profileFlexBox]}>
              <View style={styles.iconname}>
                <View style={[styles.icon, styles.iconLayout]}>
                  <Image
                    style={[
                      styles.currencyCrushAnalytics,
                      styles.currencyLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/currency-crush-analytics.png")}
                  />
                </View>
                <Text style={[styles.deborahSanchez, styles.labelTypo]}>
                  Melanie Ward
                </Text>
              </View>
              <Image
                style={styles.iconLayout1}
                contentFit="cover"
                source={require("../assets/moreoverflowmenuhoriz.png")}
              />
            </View>
            <View style={[styles.break, styles.breakBorder]} />
            <View style={[styles.profile2, styles.profileFlexBox]}>
              <View style={styles.iconname}>
                <View style={[styles.icon, styles.iconLayout]}>
                  <Image
                    style={styles.currencyCrushLock1}
                    contentFit="cover"
                    source={require("../assets/currency-crush-lock-1.png")}
                  />
                </View>
                <Text style={[styles.deborahSanchez, styles.labelTypo]}>
                  Adrienne Huffman
                </Text>
              </View>
              <Image
                style={styles.iconLayout1}
                contentFit="cover"
                source={require("../assets/moreoverflowmenuhoriz.png")}
              />
            </View>
            <View style={[styles.break, styles.breakBorder]} />
            <View style={[styles.profile2, styles.profileFlexBox]}>
              <View style={styles.iconname}>
                <View style={[styles.icon, styles.iconLayout]}>
                  <Image
                    style={styles.currencyCrushStatistics}
                    contentFit="cover"
                    source={require("../assets/currency-crush-statistics.png")}
                  />
                </View>
                <Text style={[styles.deborahSanchez, styles.labelTypo]}>
                  Emily Ibarra
                </Text>
              </View>
              <Image
                style={styles.iconLayout1}
                contentFit="cover"
                source={require("../assets/moreoverflowmenuhoriz.png")}
              />
            </View>
            <View style={[styles.break, styles.breakBorder]} />
            <View style={[styles.profile2, styles.profileFlexBox]}>
              <View style={styles.iconname}>
                <View style={[styles.icon, styles.iconLayout]}>
                  <Image
                    style={[
                      styles.currencyCrushInvestment,
                      styles.currencyLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/currency-crush-investment.png")}
                  />
                </View>
                <Text style={[styles.deborahSanchez, styles.labelTypo]}>
                  Evan Harper
                </Text>
              </View>
              <Image
                style={styles.iconLayout1}
                contentFit="cover"
                source={require("../assets/moreoverflowmenuhoriz.png")}
              />
            </View>
            <View style={[styles.break, styles.breakBorder]} />
            <View style={[styles.profile2, styles.profileFlexBox]}>
              <View style={styles.iconname}>
                <View style={[styles.icon, styles.iconLayout]}>
                  <Image
                    style={[
                      styles.currencyCrushGrowth,
                      styles.currencyPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/currency-crush-growth1.png")}
                  />
                </View>
                <Text style={[styles.deborahSanchez, styles.labelTypo]}>
                  Daniel Ferrell
                </Text>
              </View>
              <Image
                style={styles.iconLayout1}
                contentFit="cover"
                source={require("../assets/moreoverflowmenuhoriz.png")}
              />
            </View>
            <View style={[styles.break, styles.breakBorder]} />
            <View style={[styles.profile2, styles.profileFlexBox]}>
              <View style={styles.iconname}>
                <View style={[styles.icon, styles.iconLayout]}>
                  <Image
                    style={[
                      styles.currencyCrushAnalytics,
                      styles.currencyLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/currency-crush-analytics.png")}
                  />
                </View>
                <Text style={[styles.deborahSanchez, styles.labelTypo]}>
                  Deborah Sanchez
                </Text>
              </View>
              <Image
                style={styles.iconLayout1}
                contentFit="cover"
                source={require("../assets/moreoverflowmenuhoriz.png")}
              />
            </View>
          </View>
        </View>
      </View>
  
    </View>
  );
};

const styles = StyleSheet.create({
  iconBg: {
    overflow: "hidden",
    backgroundColor: Color.ink07,
  },
  tabsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout1: {
    height: 26,
    width: 26,
    overflow: "hidden",
  },
  iconLayout: {
    height: 50,
    width: 50,
  },
  labelTypo: {
    fontSize: FontSize.paragraphMedium_size,
    fontFamily: FontFamily.paragraphLarge,
    lineHeight: 24,
    textAlign: "left",
  },
  breakBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#f4f7fa",
    borderStyle: "solid",
  },
  currencyPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  profileFlexBox: {
    width: 286,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  currencyLayout: {
    height: 142,
    width: 142,
    left: 0,
    position: "absolute",
  },
  transactions2: {
    textAlign: "center",
    fontFamily: FontFamily.headingH4,
    fontWeight: "600",
    lineHeight: 23,
    letterSpacing: 0,
    fontSize: FontSize.headingH5_size,
    color: Color.ink01Black,
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
    width: '100%',
    height: 102,
    padding: Padding.p_xl,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.ink07,
  },
  title: {
    width: 300,
    marginTop: 24,
    marginLeft:15,
    textAlign: "left",
    color: Color.ink01Black,
    fontFamily: FontFamily.headingH4,
    fontWeight: "400",
    lineHeight: 23,
    letterSpacing: 0,
    fontSize: FontSize.headingH5_size
  },
  buttonChild: {
    top: 20,
    left: 17,
    position: "absolute",
  },
  newAccount: {
    top: 33,
    left: 86,
    fontSize: FontSize.paragraphLarge_size,
    fontFamily: FontFamily.paragraphLarge,
    lineHeight: 24,
    textAlign: "center",
    color: Color.ink01Black,
    letterSpacing: 0,
    position: "absolute",
  },
  button: {
    backgroundColor: Color.accentGreen,
    width: '90%',
    height: 90,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: Border.br_3xs,
    marginTop: 24,
    overflow: "hidden",
  },
  label: {
    color: Color.ink01,
  },
  indicator: {
    alignSelf: "stretch",
    backgroundColor: Color.ink01,
    height: 2,
    marginTop: 8,
  },
  tabnamesChild: {
    borderColor: "#e8eef3",
    borderRightWidth: 1,
    width: 1,
    height: 21,
    marginLeft: 55,
    borderStyle: "solid",
  },
  tab1: {
    marginLeft: 55,
  },
  tabnames: {
    flexDirection: "row",
  },
  underline: {
    width: 233,
  },
  currencyCrushValue: {
    width: 28,
    height: 28,
  },
  icon: {
    borderRadius: Border.br_21xl,
    borderColor: "#cdd9e3",
    borderWidth: 0.5,
    borderStyle: "solid",
    overflow: "hidden",
    backgroundColor: Color.ink07,
  },
  deborahSanchez: {
    marginLeft: 15,
    color: Color.ink01Black,
    fontSize: FontSize.paragraphMedium_size,
  },
  iconname: {
    flexDirection: "row",
    alignItems: "center",
  },
  break: {
    width: 326,
    marginTop: 5,
  },
  currencyCrushAnalytics: {
    top: 9,
  },
  profile2: {
    marginTop: 5,
  },
  currencyCrushLock1: {
    top: 6,
    left: 6,
    width: 38,
    height: 38,
    position: "absolute",
  },
  currencyCrushStatistics: {
    top: 4,
    left: 7,
    width: 41,
    height: 41,
    position: "absolute",
  },
  currencyCrushInvestment: {
    top: 0,
    height: 142,
    width: 142,
  },
  currencyCrushGrowth: {
    width: 254,
    height: 254,
  },
  profiles: {
    marginTop: 30,
  },
  accounts: {
    borderWidth: 1,
    paddingTop: Padding.p_3xs,
    borderColor: "#f4f7fa",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: Border.br_3xs,
    marginTop: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.ink07,
  },
 
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: 100,
    backgroundColor: Color.ink03,
    width: 134,
    height: 5,
    opacity: 0.4,
    position: "absolute",
  },
  homeBar: {
    height: "4.19%",
    top: "95.81%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  transactions: {
    flex: 1,
    width: "100%",
  },
});

export default SendTo;
