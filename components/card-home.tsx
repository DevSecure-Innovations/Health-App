<<<<<<< HEAD
import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	ImageBackground,
    ImageSourcePropType,
} from "react-native";
import Color from "./../constants/color";
import color from "./../constants/color";

type CardHomeProps= {
	title?: string;
	description?: string;
	buttonText?: string;
	imageLink?: ImageSourcePropType;
};

const defaultProps:CardHomeProps = {
	title: "Card Title",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing quam velit hic molestiae aliquid?",
	buttonText: "Call Now",
	imageLink: require("./../assets/images/react-logo.png"),
};

const CardHome = (props: CardHomeProps) => {
	const CardProps = {...defaultProps, ...props};

	return(
		<View style={styles.mainCont}>
			<ImageBackground style={styles.cntxtCont} source={CardProps.imageLink}>
				<View style={styles.titleCont}>
					<Text style={styles.title}>{CardProps.title}</Text>
				</View>
				<View style={styles.descCont}>
					<Text style={styles.desc}>&emsp;{CardProps.description}</Text>
				</View>
				<View style={styles.btnCont}>
					<TouchableOpacity style={styles.btn}>
						<Text style={styles.btnText}>{CardProps.buttonText}</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	mainCont: {
		height: 250,
		width: "90%",
		margin: 10,
		borderRadius: 20,
		overflow: "hidden",
		backgroundColor: Color.baseWhite,
		shadowColor: "#000000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
	},
	cntxtCont:{
		flex:1,
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
		width: "50%",
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

export default CardHome;
=======
import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	ImageBackground,
    ImageSourcePropType,
} from "react-native";
import Color from "./../constants/color";
import { LinearGradient } from "expo-linear-gradient";

type CardHomeProps= {
	title?: string;
	description?: string;
	buttonText?: string;
	imageLink?: ImageSourcePropType;
};

const defaultProps:CardHomeProps = {
	title: "Card Title",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing quam velit hic molestiae aliquid?",
	buttonText: "Call Now",
	imageLink: require("./../assets/images/react-logo.png"),
};

const CardHome = (props: CardHomeProps) => {
	const CardProps = {...defaultProps, ...props};

	return(
		<View style={styles.mainCont}>
			<ImageBackground style={styles.cntxtCont} source={CardProps.imageLink}>
				<LinearGradient colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.6)", "transparent"]} style={styles.gradient}>
					<View style={styles.titleCont}>
						<Text style={styles.title}>{CardProps.title}</Text>
					</View>
					<View style={styles.descCont}>
						<Text style={styles.desc}>&emsp;{CardProps.description}</Text>
					</View>
					<View style={styles.btnCont}>
						<TouchableOpacity style={styles.btn}>
							<Text style={styles.btnText}>{CardProps.buttonText}</Text>
						</TouchableOpacity>
					</View>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	mainCont: {
		height: 250,
		width: "90%",
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

export default CardHome;
>>>>>>> 30fec46d1a12ad1737ae0055e3d83a660409288e
