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
import Color from "./../constants/color";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { 
	interpolate, 
	SharedValue, 
	useAnimatedStyle, 
	Extrapolation,
	useSharedValue
} from "react-native-reanimated";
import { HomeCardDataType } from "@/data/home-card-data";

const {width} = Dimensions.get("screen");

type HomeCardProps= {
	item: HomeCardDataType;
	index: number;
	scrollX: SharedValue<number>;
};

const HomeCard = (Props: HomeCardProps) => {
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

	return(
		<Animated.View style={[styles.mainCont, rnAnimation]}>
			<ImageBackground style={styles.cntxtCont} source={Props.item.imageLink}>
				<LinearGradient colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.6)", "transparent"]} style={styles.gradient}>
					<View style={styles.titleCont}>
						<Text style={styles.title}>{Props.item.title}</Text>
					</View>
					<View style={styles.descCont}>
						<Text style={styles.desc}>&emsp;{Props.item.description}</Text>
					</View>
					<View style={styles.btnCont}>
						<TouchableOpacity style={styles.btn}>
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
	titleCont: {},
	title: {
		fontSize: 32,
		fontWeight: 900,
		textTransform: "uppercase",
		color: Color.blueKoi,
	},
	descCont: {},
	desc: {
		fontSize: 20,
		fontWeight: 400,
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
