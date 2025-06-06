import React from "react";
import {
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
    ImageSourcePropType,
    ViewStyle,
} from "react-native";

import Color from "../constants/color";
import { LinearGradient } from "expo-linear-gradient";

type CardProp = {
	title?: string,
	image: ImageSourcePropType,
	style?: ViewStyle
};

const ButtonCard = ({title, image, style} : CardProp) => {
	return(
		<TouchableOpacity style={[styles.mainCont, style]} activeOpacity={0.75}>
			<ImageBackground style={styles.image} source={image}>
				<LinearGradient 
					colors={["transparent", "rgba(10, 10, 35, 0.75)", "rgba(10, 10, 35, 0.9)"]} 
					locations={[0.45, 0.75, 0.9]}
					style={styles.gradient}
				>
					<Text style={styles.title}>
						{title}
					</Text>
				</LinearGradient>
			</ImageBackground>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	mainCont: {
		height: 50,
		width: 50,
		borderRadius: 20,
		overflow: "hidden",
		backgroundColor: Color.baseWhite10Tint,
		shadowColor: "#000000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
	},
	image:{
		flex:1,
	},
	gradient: {
		flex: 1,
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	title: {
		position: "absolute",
		bottom: 10,
		left: 10,
		right: 0,
		fontSize: 24,
		fontWeight: 700,
		color: Color.blueKoi,
	},
});

export default ButtonCard;
