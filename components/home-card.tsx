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
import Animated, { 
	interpolate, 
	SharedValue, 
	useAnimatedStyle, 
	Extrapolation,
	useSharedValue
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

import Color from "./../constants/color";
import { HomeCardDataType } from "@/data/home-card-data";
import { RootStackParam } from "@/data/navigation-type";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const {width} = Dimensions.get("screen");

type HomeCardProps= {
	item: HomeCardDataType;
	index: number;
	scrollX: SharedValue<number>;
};
type NavigationProp = StackNavigationProp<RootStackParam>;

const HomeCard = (Props: HomeCardProps) => {
	const navigation = useNavigation<NavigationProp>();
	const rnAnimation = useAnimatedStyle(() => {
		return {
			transform: [
				{
					scale: interpolate(
						Props.scrollX.value,
						[(Props.index - 1)*width, Props.index * width, (Props.index + 1) * width],
						[0.8, 1, 0.8],
						Extrapolation.CLAMP
					)
				}
			]
		}
	});
	const onPressHandler = () => {
		if((Props.index % 3) === 1){
			navigation.navigate("Ambulance");
		}
		if((Props.index % 3) === 2){
			navigation.navigate("ChatBot");
		}
	};

	return(
		<Animated.View style={[styles.mainCont, rnAnimation]}>
			<ImageBackground style={styles.cntxtCont} source={Props.item.imageLink}>
				<LinearGradient 
					style={styles.gradient}
					colors={["rgba(10, 10, 35, 0.8)", "rgba(10, 10, 35, 0.6)", "transparent"]} 
					locations={[0.2, 0.5, 0.8]}
				>
					<Text style={styles.title}>{Props.item.title}</Text>
					<Text style={styles.desc}>&emsp;{Props.item.description}</Text>
					<View style={styles.btnCont}>
						<TouchableOpacity style={styles.btn} activeOpacity={0.75} onPress={onPressHandler}>
							<Text style={styles.btnText}>{Props.item.buttonText}</Text>
						</TouchableOpacity>
					</View>
				</LinearGradient>
			</ImageBackground>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	mainCont: {
		height: 250,
		width: width-20,
		margin: 10,
		borderRadius: 20,
		overflow: "hidden",
		backgroundColor: Color.baseWhite10Tint,
		shadowColor: "#000000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
	},
	cntxtCont:{
		flex:1,
	},
	gradient: {
		flex: 1,
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 32,
		fontWeight: 800,
		textTransform: "uppercase",
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
		shadowOffset: { height: 0, width: 2},
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

export default HomeCard;
