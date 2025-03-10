import React, {useState} from 'react';
import {
	View, 
	Text, 
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
    ImageSourcePropType,
	Modal,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import Color from '../constants/color';
import MedicineCardFull from './medicine-card-full';

type MedicineCardProps ={
	title?: string;
	info0?: string;
	info1?: string;
	info2?: string;
	amount0: {quantity: string; price: number;};
	amount1: {quantity: string; price: number;};
	amount2: { quantity: string; price: number;};
	imageLink?: ImageSourcePropType;
	cartOnPress?: () => void;
};

const defaultProps:MedicineCardProps = {
	title: 'Medicine 1',
	info0: '300mg',
	info1: 'Tablet',
	info2: '13+',
	amount0:{quantity: "5 tablets", price: 20},
	amount1:{quantity: "10 tablets", price: 40},
	amount2:{quantity: "15 tablets", price: 60},
	imageLink: require('./../assets/images/tablets.jpg'),
};

const MedicalCard = (props:MedicineCardProps) => {
	const Props = {...defaultProps,...props};
	const [modalState, setModalState] = useState(false);

	return(
		<View style={styles.mainCont}>
			<ImageBackground imageStyle={styles.image} style={{flex:1}} source={Props.imageLink}>
				<LinearGradient 
					colors={[ "transparent", Color.baseWhite10Tint]} 
					locations={[0.35, 0.5]}
					style={styles.gradient}
				>
					<View style={styles.overlay}>
						<View style={styles.cartCont}>
							<TouchableOpacity style={styles.cartBtn} onPress={Props.cartOnPress}>
								<MaterialIcons style={styles.cartIcon} name="add-shopping-cart"/>
							</TouchableOpacity>
						</View>
						<View style={styles.context}>
							<View style={styles.contextInfo}>
								<Text style={styles.title}>{Props.title}</Text>
								<Text style={styles.desc}>
									Dosage: {Props.info0}{"\n"}
									Form Factor: {Props.info1}{"\n"}
									Age Restriction: {Props.info2}
								</Text>
							</View>
							<View style={styles.priceDetailsCont}>
								<View>
									<Text style={styles.quantity}>{Props.amount0.quantity}</Text>
									<Text style={styles.price}>₹ {Props.amount0.price}</Text>
								</View>
								<TouchableOpacity style={styles.detailsBtn} onPress={() => setModalState(true)}>
									<Text style={styles.detailsBtnText}>see details</Text>
								</TouchableOpacity>
								<Modal
									animationType="slide"
									transparent
									visible={modalState}
									onRequestClose={() => setModalState(false)}
								>
									<View style={styles.popupOverlay}>
										<MedicineCardFull
											title={Props.title}
											info0={Props.info0}
											info1={Props.info1}
											info2={Props.info2}
											imageLink={Props.imageLink}
											amount0={{
												quantity: props.amount0.quantity,
												price : props.amount0.price
											}}
											amount1={{
												quantity: props.amount1.quantity,
												price : props.amount1.price
											}}
											amount2={{
												quantity: props.amount2.quantity,
												price : props.amount2.price
											}}
											closeOnPress={() => setModalState(false)}
										/>
									</View>
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
		width: 200,
		borderRadius: 20,
		overflow: "hidden",
		backgroundColor: Color.baseWhite10Tint,
		shadowColor: "#000000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
	},
	image: {
		resizeMode: "cover",
		position: "absolute",
		bottom: 100,
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
		fontSize: 14,
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
		fontSize: 11,
		fontWeight: 600,
		color: Color.graniteGrey,
	},
	price: {
		fontSize: 18,
		fontWeight: 800,
		lineHeight: 18,
		color: Color.seaweed20LTint,
	},
	contextButton: {
	},
	detailsBtn: {
		height: 40,
		width: "60%",
		borderRadius: 20,
		backgroundColor: Color.seaweed20LTint
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
		justifyContent: "flex-end"
	},
});

export default MedicalCard;