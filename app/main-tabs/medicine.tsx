import React from "react";
import { 
	View, 
	Text,
	FlatList, 
	StyleSheet,
	Image,
	ScrollView, 
} from "react-native";

import MedicalCard from "../../components/medical-card";
import Color from "@/constants/color";
import { CardData, CardDataType } from "@/data/med-info";
import GridBox from "@/components/grid-box";
import BottomIcon from "@/components/bottom-icon";

const MedicineScreen = () => {
	const data:CardDataType[] = CardData;
	return(
		<ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
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
			<Text style={styles.headerTitle}>Essentials</Text>
			<GridBox/>
			<BottomIcon/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		paddingVertical: 60,
		paddingHorizontal: 10,
		backgroundColor: Color.baseWhite,
	},
	header: {
		height: 250,
		borderRadius: 20,
		overflow: "hidden"
	},
	headerTitle: {
		fontSize: 22,
		fontWeight: "bold",
		color: Color.baseBlack,
		marginVertical: 5,
	},
	listContainer: {
		gap: 10,
	},
});
	
export default MedicineScreen;
