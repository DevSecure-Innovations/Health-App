import { Text, View } from "react-native";
import CardHome from "./../components/card-home";
import Card from "./../components/card";

const Index = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Card/>
			<CardHome
				title="urgent care"
				description="Need to Consult a Doctor but it’s night? Contact with a doctor anytime, anywhere."
				buttonText="chat now"
				imageLink={require("./../assets/images/ambulance-at-night.jpg")}
			/>
		</View>
	);
}

export default Index;
