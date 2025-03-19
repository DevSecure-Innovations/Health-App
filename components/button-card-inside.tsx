import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
    ImageSourcePropType,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Color from "./../constants/color";

const { width } = Dimensions.get("screen");

type ButtonCardInsideProps = {
    title?: string;
    description?: string;
    buttonText?: string;
    image?: ImageSourcePropType;
};

type Position = {
    x:number;
    y:number;
};

const ButtonCardInside = ({ title, description, buttonText, image}: ButtonCardInsideProps) => {
    let val:Position[] = [
        { x: 1, y: 0 },
        { x: 0, y: 0 }
    ]
    return (
        <View style={[styles.mainContainer]}>
            <ImageBackground imageStyle={styles.image} style={{flex:1}} source={image}>
                <LinearGradient
                    style={styles.gradient}
                    colors={["rgba(10, 10, 35, 0.8)", "rgba(10, 10, 35, 0.6)", "transparent"]}
                    locations={[0.3, 0.5, 0.8]}
                    start={val[0]} 
                    end={val[1]} 
                >
                    <View style={styles.context}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.desc}>&emsp;{description}</Text>
                    </View>
                    <View style={styles.btnCont}>
                        <TouchableOpacity style={styles.btn} activeOpacity={0.75}>
                            <Text style={styles.btnText}>{buttonText}</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: 250,
        width: width - 20,
        margin: 10,
        marginBottom: 0,
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: Color.baseWhite10Tint,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    image: {
        resizeMode: "cover",
        position: "absolute",
    },
    gradient: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    context: {
        width: "50%",
        position: "absolute",
        top: 10,
        right: 10,
    },
    title: {
        fontSize: 32,
        fontWeight: 800,
        textTransform: "capitalize",
        color: Color.blueKoi,
    },
    desc: {
        fontSize: 20,
        fontWeight: 500,
        color: Color.baseWhite,
    },
    btnCont: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    btn: {
        height: 50,
        width: "55%",
        borderRadius: 30,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginBottom: 10,
        backgroundColor: Color.olivine,
        shadowColor: Color.baseBlack,
        shadowOffset: { height: 0, width: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5,
    },
    btnText: {
        fontSize: 28,
        fontWeight: "bold",
        textTransform: "capitalize",
        textAlign: "center",
        color: Color.seaweed,
    },
});

export default ButtonCardInside;