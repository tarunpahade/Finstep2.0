import React from "react";
import { View, Image, Text, FlatList, StyleSheet } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";


const CarouselItem = ({ item }) => {
  return (
    <View style={carouselStyles.creditCard}>
      <View style={[carouselStyles.balancebrand, carouselStyles.namedateFlexBox]}>
        <View>
          <Text style={[carouselStyles.currentBalance, carouselStyles.expDateTypo]}>
            Current Balance
          </Text>
          <Text style={[carouselStyles.amount, carouselStyles.amountTypo]}>
            {item.balance}
          </Text>
        </View>
        <Image
          style={carouselStyles.logoIcon}
          contentFit="cover"
          source={item.logo}
        />
      </View>
      <View style={[carouselStyles.information, carouselStyles.informationPosition]}>
        <Text style={[carouselStyles.creditCardNumber, carouselStyles.valueLayout]}>
          {item.cardNumber}
        </Text>
        <View style={[carouselStyles.namedate, carouselStyles.namedateFlexBox]}>
          <Text style={[carouselStyles.currentBalance, carouselStyles.expDateTypo]}>
            {item.cardHolder}
          </Text>
          <Text style={carouselStyles.date}>
            <Text
              style={[carouselStyles.expDate, carouselStyles.expDateTypo]}
            >{`Exp. Date `}</Text>
            <Text style={[carouselStyles.text, carouselStyles.textTypo]}>{item.expDate}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const Carousel1 = () => {
  const carouselData = [
    {
      balance: "₹3,360.00",
      logo: require('../assets/logo1.png'),
      cardNumber: "**** **** **** 2230",
      cardHolder: "Louis Scottson",
      expDate: "09/26",
    },
   
    // Add more carousel data here if needed
  ];

  return (
    <FlatList
      data={carouselData}
      horizontal
      style={{ flex: 1, width: "100%", height: "100%" }}
      contentContainerStyle={{ alignItems: "center" }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <CarouselItem item={item} />}
    />
  );
};


const carouselStyles = StyleSheet.create({
    creditCard: {
      backgroundColor: Color.accentOrange,
      height: 174,
      width: 281,
      borderRadius: Border.br_xl,
      margin: 10
    },
    balancebrand: {
        top: 25,
        width: '85%',
        left: 20,
        position: "absolute",
      },
      amount: {
        marginTop: 10,
        lineHeight: 23,
        fontFamily: FontFamily.headingH4,
        fontSize: FontSize.paragraphCreditCardNumbers_size,
        textAlign: "center",
        letterSpacing: 0,
        color: Color.ink01,
      },
      amountTypo: {
        fontFamily: FontFamily.headingH4,
        fontWeight: "600",
      },
      currentBalance: {
        fontFamily: FontFamily.paragraphMedium,
        textAlign: "center",
        color: Color.ink01,
      },
      namedate: {
        width: '83%',
        marginTop: 15,
        alignItems: "center",
      },
    iconnameFlexBox: {
      justifyContent: "center",
      alignItems: "center",
    },
    logoIcon: {
        width: 55,
        height: 34,
      },
    namedateFlexBox: {
      justifyContent: "space-between",
      flexDirection: "row",
    },
    expDateTypo: {
      lineHeight: 16,
      fontSize: FontSize.paragraphSmall_size,
      fontFamily: FontFamily.paragraphMedium,
    },
    informationPosition: {
      left: 15,
      position: "absolute",
    },
    information: {
        top: 97,
      },
    valueLayout: {
      lineHeight: 24,
      textAlign: "center",
    },
    textTypo: {
      fontFamily: FontFamily.paragraphLargeBold,
      fontWeight: "700",
      lineHeight: 24,
    },
    creditCardNumber: {
      letterSpacing: 2,
      fontWeight: "500",
      fontFamily: FontFamily.paragraphCreditCardNumbers,
      fontSize: FontSize.paragraphCreditCardNumbers_size,
      lineHeight: 24,
      color: Color.ink01,
    },
    expDate: {
      fontFamily: FontFamily.paragraphMedium,
    },
    text: {
      fontSize: FontSize.paragraphMedium_size,
    },
    date: {
      textAlign: "center",
      color: Color.ink01,
    },
  });
export default  Carousel1;
  
