import React from "react";
import { 
	View, 
	Text,
	FlatList, 
	StyleSheet, 
} from "react-native";

import MedicalCard from "../../components/medical-card";
import Color from "@/constants/color";
import { CardData, CardDataType } from "@/data/med-info";

const MedicineScreen = () => {
	const data:CardDataType[] = CardData;
	return(
		<View style={styles.mainContainer}>
			<Text style={styles.headerTitle}>Frequently Bought</Text>
			<View style={styles.header}>
				<FlatList
					data={data}
					renderItem={({item}) => 
						<MedicalCard content={item} />
					}
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.listContainer}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		paddingVertical: 70,
		paddingHorizontal: 10,
		backgroundColor: Color.baseWhite,
	},
	header: {
		height: 250,
	},
	headerTitle: {
		fontSize: 22,
		fontWeight: "bold",
		color: Color.baseBlack,
		marginBottom: 10,
	},
	listContainer: {
		gap: 10,
	}
});

export default MedicineScreen;
