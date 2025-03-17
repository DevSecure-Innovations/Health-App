import React from "react";
import {
    View,
    Image,
    StyleSheet
} from "react-native";

const BottomIcon = () => {
    return (
        <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require("@/assets/images/icon/bottom-icon.png")} />
        </View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        height: 400,
        width: "100%",
        justifyContent: "center",
        marginBottom: 100,
        alignItems: "flex-start",
    },
    icon: {
        height: 300,
        width: 300,
    }
});

export default BottomIcon;