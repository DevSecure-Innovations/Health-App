import { HomeCardDataType } from "@/data/home-card-data";
import React from "react";
import { 
    View,
    StyleSheet, 
    Text,
    Dimensions, 
} from "react-native";
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";

let {width} = Dimensions.get("screen");
width -= 20;

type Props = {
    items: HomeCardDataType[];
    paginationIndex: number;
    scrollX: SharedValue<number>;
}

const Pagination = ({items, paginationIndex, scrollX}:Props) => {
    return(
        <View style={styles.mainCont}>
            {items.map((_,index) => {
                const pgAnimationStyle = useAnimatedStyle(() => {
                    const dotWidth = interpolate(
                        scrollX.value,
                        [(index - 1)*width, index * width, (index + 1) * width],
                        [8, 20, 8],
                        Extrapolation.CLAMP
                    );
                    return{
                        width: dotWidth,
                    };
                });
                return(
                    <Animated.View 
                        key={index} 
                        style={[
                            styles.dots,
                            {backgroundColor: paginationIndex === index ? "black" : "gray"},
                        ]}
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    mainCont:{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: 10,
    },
    dots: {
        backgroundColor: "black",
        height: 8,
        width: 8,
        marginHorizontal: 2,
        borderRadius: 8,
    },
});

export default Pagination;