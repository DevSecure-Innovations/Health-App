import React from "react";
import { 
    Text, 
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    ImageSourcePropType,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MetarialIcons from "@expo/vector-icons/MaterialIcons";
import Color from "./../constants/color";

type CardMedFullProps = {
    title?: string;
    info0?: string;
    info1?: string;
    info2?: string;
    quantity?: string;
    price?: number;
    imageLink?: ImageSourcePropType;
};

const defaultProps:CardMedFullProps = {
    title: "Card Title",
    info0: "Info 0",
    info1: "Info 1",
    info2: "Info 2",
    quantity: "Quantity",
    price: 0,
    imageLink: require("./../assets/images/react-logo.png"),
};

const CardMedFull = (props:CardMedFullProps) => {
    const CardProps = {...defaultProps, ...props};
    return (
        <View style={styles.mainCont}>
            <ImageBackground style={styles.image} source={CardProps.imageLink}>
                <LinearGradient colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.6)", "transparent"]} style={styles.gradient}>
                    <View style={styles.closeCont}>
                        <TouchableOpacity style={styles.closeBtn}>
                            <MetarialIcons name="close" style={styles.closeBtn}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contextCont}>
                        <Text>{CardProps.title}</Text>
                        <Text>{CardProps.info0}</Text>
                        <Text>{CardProps.info1}</Text>
                        <Text>{CardProps.info2}</Text>
                        <View style={styles.quantityCont}>
                            <View style={styles.amount}>
                                <Text style={styles.quantity}>{CardProps.quantity}</Text>
                                <Text style={}>{CardProps.price}</Text>
                            </View>
                            <TouchableOpacity>
                                <MetarialIcons name="add" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>            
        </View>
    );
};

const styles = StyleSheet.create({
    mainCont: {
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: "hidden",
        backgroundColor: Color.baseWhite,
    },
    contextCont: {},

});

export default CardMedFull;