import React from 'react';
import {
	View, 
	Text, 
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
    ImageSourcePropType,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Color from './../constants/color';

type CardProps ={
	title?: string;
	info0?: string;
	info1?: string;
	info2?: string;
	quantity?: string;
	price?: number;
	imageLink?: ImageSourcePropType;
};

const defaultProps:CardProps = {
	title: 'Medicine 1',
	info0: 'Dosage: 300mg',
	info1: 'Form Factor: Tablet',
	info2: 'Age restriction: 13+',
	quantity: '15 tablets',
	price: 370,
	imageLink: require('./../assets/images/tablets.jpg'),
};

const Card = (props:CardProps)=>{
	const Props = {...defaultProps,...props};
	return(
		<View style={styles.mainCont}>
			<ImageBackground imageStyle={styles.image} style={{flex:1}} source={Props.imageLink}>
				<View style={styles.overlay}>
					<View style={styles.cartCont}>
						<TouchableOpacity style={styles.cartBtn}>
							<MaterialIcons style={styles.cartIcon} name="add-shopping-cart"/>
						</TouchableOpacity>
					</View>
					<View style={styles.context}>
						<View style={styles.contextInfo}>
							<Text style={styles.title}>{Props.title}</Text>
							<Text style={styles.desc}>
								{Props.info0}{"\n"}
								{Props.info1}{"\n"}
								{Props.info2}
							</Text>
						</View>
						<View style={styles.priceDetailsCont}>
							<View>
								<Text style={styles.quantity}>{Props.quantity}</Text>
								<Text style={styles.price}>${Props.price}</Text>
							</View>
							<TouchableOpacity style={styles.detailsBtn}>
								<Text style={styles.detailsBtnText}>SEE DETAILS</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	mainCont: {
		height: 250,
		width: 200,
		borderRadius: 20,
		overflow: "hidden",
		backgroundColor: Color.baseWhite,
		shadowColor: "#000",
		shadowOffset: {width: 0, height: 2},
	},
	image: {
		resizeMode: "cover",
		position: "absolute",
		bottom: 100,
	},
	overlay: {
		flex: 1,
	},
	cartCont: {
		position: "absolute",
		top: 5,
		right: 5,
	},
	cartBtn: {
		height: 40,
		width: 40,
		borderRadius: "100%",
		backgroundColor: Color.baseWhiteTransparent,
		justifyContent: "center",
		alignItems: "center",
	},
	cartIcon: {
		fontSize: 25,
		color: Color.seaweed
	},
	context: {
		height: "55%",
		flex: 1,
		padding: 5,
		borderRadius: 15,
		position: "absolute",
		inset: 5,
		top: "auto",
		backgroundColor: Color.olivine,
	},
	contextInfo: {
		margin: 5,
	},
	title: {
		fontSize: 20,
		lineHeight: 20,
		fontWeight: 700,
		marginBottom: 2,
		color: Color.seaweed,
	},
	desc: {
		fontSize: 14,
		lineHeight: 16,
		color: Color.baseBlack,
	},
	priceDetailsCont: {
		width: "100%",
		position: "absolute",
		inset: 5,
		top: "auto",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	quantity: {
		fontSize: 11,
		fontWeight: 600,
		color: Color.graniteGrey,
	},
	price: {
		fontSize: 18,
		fontWeight: 800,
		lineHeight: 18,
		color: Color.baseBlack,
	},
	contextButton: {
	},
	detailsBtn: {
		height: 40,
		width: "60%",
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Color.seaweed
	},
	detailsBtnText: {
		fontWeight: 700, 
		color: Color.baseWhite
	},
});

export default Card;
