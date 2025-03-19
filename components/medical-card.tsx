import React, {useState} from 'react';
import {
	View, 
	Text, 
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback, 
	ImageBackground,
    Dimensions, 
	Modal,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';

import Color from '../constants/color';
import MedicineCardFull from './medicine-card-full';
import { CardDataType } from "./../data/med-info";

const {width} = Dimensions.get("screen");

type MedicineCardProps ={
	content: CardDataType;
	cartOnPress?: () => void;
};

const defaultProps:MedicineCardProps = {
	content: {
		title: 'Medicine 1',
		dosage: '300mg',
		formFac: 'Tablet',
		ageRes: '13+',
		amount:[
			{quantity: "5 tablets", price: 20},
			{quantity: "10 tablets", price: 40},
			{quantity: "15 tablets", price: 60},
		],
		image: require('./../assets/images/tablets.jpg'),
	}
};

const MedicalCard = (props : MedicineCardProps) => {
	const {content} = {...defaultProps,...props};
	const [modalState, setModalState] = useState(false);

	return(
		<View style={styles.mainCont}>
			<ImageBackground imageStyle={styles.image} style={{flex:1}} source={content.image}>
				<LinearGradient 
					colors={[ "transparent", Color.baseWhite10Tint]} 
					locations={[0.35, 0.5]}
					style={styles.gradient}
				>
					<View style={styles.overlay}>
						<View style={styles.cartCont}>
							<TouchableOpacity style={styles.cartBtn} onPress={props.cartOnPress}>
								<MaterialIcons style={styles.cartIcon} name="add-shopping-cart"/>
							</TouchableOpacity>
						</View>
						<View style={styles.context}>
							<View style={styles.contextInfo}>
								<Text style={styles.title}>{content.title}</Text>
								<Text style={styles.desc}>
									Dosage: {content.dosage}{"\n"}
									Form Factor: {content.formFac}{"\n"}
									Age Restriction: {content.ageRes}
								</Text>
							</View>
							<View style={styles.priceDetailsCont}>
								<View>
									<Text style={styles.quantity}>{content.amount[0].quantity}</Text>
									<Text style={styles.price}>₹ {content.amount[0].price}</Text>
								</View>
								<TouchableOpacity 
									style={styles.detailsBtn} 
									onPress={() => setModalState(true)} 
									activeOpacity={0.65}
								>
									<Text style={styles.detailsBtnText}>see details</Text>
								</TouchableOpacity>
								<Modal
									animationType="slide"
									transparent
									visible={modalState}
									onRequestClose={() => setModalState(false)}
								>
									<TouchableWithoutFeedback onPress={() => setModalState(false)}>
									<View style={styles.popupOverlay}>
										<MedicineCardFull
											content={content}
											closeOnPress={() => setModalState(false)}
										/>
									</View>
									</TouchableWithoutFeedback>
								</Modal>
							</View>
						</View>
					</View>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	mainCont: {
		height: 250,
		width: (width-60)/2,
		borderRadius: 20,
		overflow: "hidden",
		backgroundColor: Color.baseWhite10Tint,
	},
	image: {
		resizeMode: "contain",
		position: "absolute",
		top: 5,
		bottom: 130,
	},
	gradient: {
		flex: 1,
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
		backgroundColor: "rgba(255,255,255,0.65)",
		justifyContent: "center",
		alignItems: "center",
	},
	cartIcon: {
		fontSize: 25,
		color: Color.seaweed20LTint
	},
	context: {
		height: "55%",
		flex: 1,
		padding: 5,
		borderRadius: 15,
		position: "absolute",
		inset: 5,
		top: "auto",
		backgroundColor: Color.olivine40LTint,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	contextInfo: {
		margin: 5,
	},
	title: {
		fontSize: 20,
		lineHeight: 20,
		fontWeight: 700,
		marginBottom: 2,
		textTransform: "capitalize",
		color: Color.seaweed20LTint,
	},
	desc: {
		fontSize: 12.5,
		lineHeight: 16,
		textTransform: "capitalize",
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
		fontSize: 11.25,
		fontWeight: 600,
		color: Color.graniteGrey,
	},
	price: {
		fontSize: 18,
		fontWeight: 800,
		lineHeight: 18,
		color: Color.seaweed20LTint,
	},
	detailsBtn: {
		height: 40,
		width: "60%",
		borderRadius: 20,
		backgroundColor: Color.seaweed20LTint,
		shadowColor: "#000000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
	},
	detailsBtnText: {
		width: "100%",
		height: "100%",
		textAlignVertical: "center",
		textAlign: "center",
		fontSize: 16,
		fontWeight: 700, 
		textTransform: "capitalize",
		color: "#FFFFFF"
	},
	popupOverlay: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.3)",
		justifyContent: "flex-end"
	},
});

export default MedicalCard;
