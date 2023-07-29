import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Text,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import * as Contacts from "expo-contacts";

const Transactions = ({navigation}) => {
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
      });

      if (data.length > 0) {
        for (let index = 0; index < data.length; index++) {
         
          if (
            data[index].name.startsWith("+") ||
            data[index].name.startsWith("null") ||
            data[index].name.startsWith("9")
          ) {
          } else if (data[index].name.startsWith(" ")) {
            console.log("null");
          }else if(data[index].phoneNumbers===undefined){
console.log('no number defined');
          } else if (data[index].name.startsWith("a") || data[index].name.startsWith("b") || data[index].name.startsWith("c") || data[index].name.startsWith("d") || data[index].name.startsWith("e") ) {
            console.log(data[index].phoneNumbers[0].number, "passed");
            const obj = {
              name: data[index].name,
              number: data[index].phoneNumbers[0].number,
            };
            if (contacts.some((contact) => contact.name === obj.name)) {
              console.log('Already exists:', obj.name);
            } else if (contacts.length >= 500) {
              console.log('List full. Cannot add:', obj.name);
            } else {
              setContacts((prevNameList) => [...prevNameList, obj]);
            }


            
          }
        }
      }
    }
  };
  const renderMonthButton = ({ item }) => {
    return (
      <TouchableOpacity style={styles.profileFlexBox} onPress={()=>{navigation.navigate('SendMoney')}}>
        <View style={styles.iconname}>
          <View style={[styles.icon, styles.iconLayout]}>
            <Image
              style={[styles.currencyCrushValue, styles.currencyPosition]}
              contentFit="cover"
              source={require("../assets/currency-crush-value.png")}
            />
          </View>
          <Text style={[styles.deborahSanchez, styles.labelTypo]}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
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
        <Text style={styles.title}>Choose which account to transfer to</Text>
        <View style={styles.button}>
          <Image
            style={[styles.buttonChild, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group-4.png")}
          />
          <Text style={styles.newAccount}>New account</Text>
        </View>
        <View style={styles.accounts}>
          <View style={styles.tabsFlexBox}>
            <View
              style={[
                styles.tabnames,
                { 
                  alignItems: "flex-start",
                  alignContent: "flex-start",
                  justifyContent: "flex-start",
                },
              ]}
            >
              <Image
                style={[styles.iconLayout1, { matchMedia: "cover" }]}
                contentFit="cover"
                source={require("../assets/icon-left1.png")}
              />

              <View style={styles.tab1}>
                <TextInput
                  placeholder="Search for a contact"
                  style={{
                    borderWidth: 1,
                    fontSize: 11,
                    width: 200,
                    padding: 5,
                    borderColor: Color.ink04,
                    borderRadius: 9,
                  }}
                />
              </View>
            </View>
          </View>

          <View style={{ width: "100%", marginBottom: 100 }}>
            <FlatList
              data={contacts}
              style={{ width: "90%", marginHorizontal: "5%",height:300 }}
              contentContainerStyle={[styles.profiles]}
              keyExtractor={(item) => Math.random()}
              renderItem={renderMonthButton}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconBg: {
    overflow: "scroll",
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
    height: 40,
    width: 40,
    marginVertical: 5,
  },
  labelTypo: {
    fontSize: FontSize.paragraphMedium_size,
    fontFamily: FontFamily.paragraphLarge,
    lineHeight: 24,
    textAlign: "left",
  },

  currencyPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  profileFlexBox: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 9,
    borderColor: Color.ink04,
    backgroundColor: "#fff",
    padding: 3,
    marginVertical: 5,
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
    width: "100%",
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
    marginLeft: 15,
    textAlign: "left",
    color: Color.ink01Black,
    fontFamily: FontFamily.headingH4,
    fontWeight: "400",
    lineHeight: 23,
    letterSpacing: 0,
    fontSize: FontSize.headingH5_size,
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
    width: "90%",
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
    marginLeft: 10,
  },
  tabnames: {
    flexDirection: "row",
  },
  underline: {
    width: 233,
  },
  currencyCrushValue: {
    width: 28,
    height: 128,
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

  profiles: {
    marginTop: 10,
    width: "100%",
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
    width: "100%",
  },

  transactions: {
    flex: 1,
    width: "100%",
  },
});

export default Transactions;
