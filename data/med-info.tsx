import { ImageSourcePropType } from "react-native";

type CardDataType ={
	title: string;
	dosage: string;
	formFac: string;
	ageRes: string;
	amount: {quantity: string; price: number;};
	image: ImageSourcePropType;
}

const CardData = [
    {
        title: "Paracetamol",
        dosage: "300mg",
        formFac: "Tablet",
        ageRes: "13+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		},
		image: require("./../assets/images/tablets.jpg")
    },
	{
		title: "Calpol",
		dosage: "5 ml",
		formFac: "Syrup",
		ageRes: "3 months+",
		amount: {
			quantity: "250ml", 
			price: 10
		},
		image: require("./../assets/images/tablets.jpg")
	},

	{
		title: "Dolo 650",
		dosage: "650mg",
		formFac: "Tablet",
		ageRes: "18+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		},
		image: require("./../assets/images/tablets.jpg")
	},

	{
		title: "Crocin",
		dosage: "500mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		},
		image: require("./../assets/images/tablets.jpg")
	},
	{
		title:"Saridon",
		dosage:"500mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		}, 
		image: require("./../assets/images/tablets.jpg")
	}, 
	{
		title:"Combiflam",
		dosage:"400mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		}, 
		image: require("./../assets/images/tablets.jpg")
	},
	{
		title:"Disprin",
		dosage:"500mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		}, 
		image: require("./../assets/images/tablets.jpg")
	},
	{
		title:"Aspirin",
		dosage:"500mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		}, 
		image: require("./../assets/images/tablets.jpg")
	},  
	{  
		title:"Ibuprofen",
		dosage:"400mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		},  
		image: require("./../assets/images/tablets.jpg")
	},
	{
		title:"Brufen",
		dosage:"250mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		}, 
		image: require("./../assets/images/tablets.jpg")
	},  
	{  
		title:"Naproxen",
		dosage:"300mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		}, 
		image: require("./../assets/images/tablets.jpg")
	},  
	{  
		title:"Diclofenac",
		dosage:"50mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		}, 
		image: require("./../assets/images/tablets.jpg")
	},  
	{  
		title:"Voltaren",
		dosage:"50mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		}, 
		image: require("./../assets/images/tablets.jpg")
	},  
	{  
		title:"Nimesulide",
		dosage:"100mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		}, 
		image: require("./../assets/images/tablets.jpg")
	},  
	{  
		title:"Nimulid",
		dosage:"120mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		}, 
		image: require("./../assets/images/tablets.jpg")
	},  
	{  
		title:"Ketorolac",
		dosage:"10mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		}, 
		image: require("./../assets/images/tablets.jpg")
	},  
	{  
		title:"Tramadol",
		dosage:"50mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		}, 
		image: require("./../assets/images/tablets.jpg")
	},  
  
	{  
		title:"Tylenol",
		dosage:"500mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		}, 
		image: require("./../assets/images/tablets.jpg")
  
	},  
	{  
		title:"Doliprane",
		dosage:"5 ml",
		formFac:"Syrup",
		ageRes:"15+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		}, 
		image: require("./../assets/images/tablets.jpg")
	},  
  
	{  
		title: "Babygesic",
		dosage: "5 ml",
		formFac: "Syrup",
		ageRes: "6 months+",
		amount: {
			quantity: "5 tablets", 
			price: 20
		},
		image: require("./../assets/images/tablets.jpg")
	}
]
