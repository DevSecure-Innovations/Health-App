import React from "react";
import {
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
    ImageSourcePropType,
    ViewStyle,
} from "react-native";

import Color from "./../constants/color";
import { LinearGradient } from "expo-linear-gradient";

type CardProp = {
	title?: string,
	image: ImageSourcePropType,
	style?: ViewStyle
};

const Card = ({title, image, style} : CardProp) => {
	return(
		<TouchableOpacity style={[styles.mainCont, style]}>
			<ImageBackground style={styles.image} source={image}>
				<LinearGradient 
					colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.6)", "transparent"]} 
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
	image:{
		flex:1,
	},
	gradient: {
		flex: 1,
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 32,
		fontWeight: 900,
		textTransform: "uppercase",
		color: Color.blueKoi,
	},
});

export default Card;
