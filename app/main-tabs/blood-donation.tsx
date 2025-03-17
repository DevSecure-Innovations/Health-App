import React from "react";
import { 
	View, 
	Text, 
	Image, 
	StyleSheet,
	ScrollView, 
} from "react-native";

import Color from "@/constants/color";
import HomeSlider from "@/components/home-slider";
import { BloodDonationCardData } from "@/data/home-card-data";
import ButtonCardInside01 from "@/components/button-card-inside-01";
import BottomIcon from "@/components/bottom-icon";

const BloodDonationScreen = () => {
	return(
		<ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
			<ButtonCardInside01
				title="03"
				buttonText="Know More"
				image={require("@/assets/images/blood-donation-1.jpg")}
			/>
			<HomeSlider itemData={BloodDonationCardData}/>
			<BottomIcon/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		paddingVertical: 60,
		backgroundColor: Color.baseWhite,
	},
});

export default BloodDonationScreen;