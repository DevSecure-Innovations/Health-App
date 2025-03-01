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
};

const defaultProps:CardMedFullProps = {
    title: "Card Title",
    info0: "Info 0",
    info1: "Info 1",
    info2: "Info 2",
    quantity: "Quantity",
    price: 0,
};

const CardMedFull = (props:CardMedFullProps) => {
    const CardProps = {...defaultProps, ...props};
    return (
        <View style={styles.mainCont}>
            <ImageBackground>
                <LinearGradient colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.6)", "transparent"]}>
                    <View>
                        <TouchableOpacity>
                            <MetarialIcons name="close" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View>
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
        backgroundColor: Color.baseWhite,
    },
});

export default CardMedFull;