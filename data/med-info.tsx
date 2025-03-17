import { ImageSourcePropType } from "react-native";

type AmountDataType = {
	quantity: string;
	price: number;
};

type FixedArray<T, N extends number> = [T, ...T[]] & { length: N };

type CardDataType = {
	title?: string;
	dosage?: string;
	formFac?: string;
	ageRes?: string;
	amount: FixedArray<AmountDataType, 3>;
	image: ImageSourcePropType;
};

const CardData:CardDataType[] = [
    {
        title: "Paracetamol",
        dosage: "500mg",
        formFac: "Tablet",
        ageRes: "12+",
		amount: [
			{ quantity: "15 tablets", price: 29 },
			{ quantity: "30 tablets", price: 59 },
			{ quantity: "45 tablets", price: 89 },
		],
		image: require("./../assets/images/medicine/paracetamol.png")
    },
	{
		title:"Aspirin",
		dosage:"300mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: [
			{ quantity: "10 tablets", price: 29 },
			{ quantity: "20 tablets", price: 59	},
			{ quantity: "30 tablets", price: 89	},
		],
		image: require("./../assets/images/medicine/aspirin.png")
	},
	{
		title:"Saridon",
		dosage:"450mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: [
			{ quantity: "5 tablets", price: 25 },
			{ quantity: "10 tablets", price: 49	},
			{ quantity: "20 tablets", price: 99 },
		],
		image: require("./../assets/images/medicine/saridon.png")
	}, 
	{
		title: "Crocin",
		dosage: "650mg",
		formFac:"Tablet",
		ageRes:"12+",
		amount: [
			{ quantity: "15 tablets", price: 33.50 },
			{ quantity: "30 tablets", price: 67 },
			{ quantity: "45 tablets", price: 100.50 },
		],
		image: require("./../assets/images/medicine/crocin.png")
	},
	{
		title: "Rantac",
		dosage: "150mg",
		formFac:"Tablet",
		ageRes:"12+",
		amount: [
			{ quantity: "10 tablets", price: 12.50 },
			{ quantity: "15 tablets", price: 18.750 },
			{ quantity: "30 tablets", price: 37.50 },
		],
		image: require("./../assets/images/medicine/rantac.png")
	},
	{
		title: "ORS",
		dosage: "21.5gm",
		formFac: "Sachets",
		ageRes: "12+",
		amount: [
			{ quantity: "1 Sachets", price: 20.50 },
			{ quantity: "5 tablets", price: 102.50 },
			{ quantity: "10 tablets", price: 205 },
		],
		image: require("./../assets/images/medicine/ors.png")
	},
]

const TempData:CardDataType[] = [
    {
        title: "Paracetamol",
        dosage: "500mg",
        formFac: "Tablet",
        ageRes: "12+",
		amount: [
			{ quantity: "15 tablets", price: 29 },
			{ quantity: "30 tablets", price: 59 },
			{ quantity: "45 tablets", price: 89 },
		],
		image: require("./../assets/images/medicine/paracetamol.png")
    },
	{
		title: "Calpol",
		dosage: "5 ml",
		formFac: "Syrup",
		ageRes: "3 months+",
		amount: [
			{ quantity: "250ml", price: 10},
			{ quantity: "500ml", price: 20},
			{ quantity: "750ml", price: 30 }
		],
		image: require("./../assets/images/tablets.jpg")
	},
	{
		title: "Dolo 650",
		dosage: "650mg",
		formFac: "Tablet",
		ageRes: "18+",
		amount: [
			{ quantity: "5 tablets", price: 20 },
			{ quantity: "10 tablets", price: 40 },
			{ quantity: "15 tablets", price: 60 },
		],
		image: require("./../assets/images/tablets.jpg")
	},
	{
		title: "Crocin",
		dosage: "500mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: [
			{ quantity: "5 tablets", price: 20 },
			{ quantity: "10 tablets", price: 40 },
			{ quantity: "15 tablets", price: 60 },
		],
		image: require("./../assets/images/tablets.jpg")
	},
	{
		title:"Saridon",
		dosage:"500mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: [
			{ quantity: "5 tablets", price: 20 },
			{ quantity: "10 tablets", price: 40	},
			{ quantity: "15 tablets", price: 60	},
		],
		image: require("./../assets/images/tablets.jpg")
	}, 
	{
		title:"Combiflam",
		dosage:"400mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: [
			{ quantity: "5 tablets", price: 20 },
			{ quantity: "10 tablets", price: 40 },
			{ quantity: "15 tablets", price: 60	},
		],
		image: require("./../assets/images/tablets.jpg")
	},
	{
		title:"Disprin",
		dosage:"500mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: [
			{ quantity: "5 tablets", price: 20 },
			{ quantity: "10 tablets", price: 40 },
			{ quantity: "15 tablets", price: 60 },
		],
		image: require("./../assets/images/tablets.jpg")
	},
	{
		title:"Aspirin",
		dosage:"300mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: [
			{ quantity: "10 tablets", price: 29 },
			{ quantity: "20 tablets", price: 59	},
			{ quantity: "30 tablets", price: 89	},
		],
		image: require("./../assets/images/medicine/aspirin.png")
	},
	{  
		title:"Ibuprofen",
		dosage:"400mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: [
			{ quantity: "5 tablets", price: 20 },
			{ quantity: "10 tablets", price: 40 },
			{ quantity: "15 tablets", price: 60 },
		],
		image: require("./../assets/images/tablets.jpg")
	},
	{
		title:"Brufen",
		dosage:"250mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: [
			{ quantity: "5 tablets", price: 20 },
			{ quantity: "10 tablets", price: 40 },
			{ quantity: "15 tablets", price: 60 },
		],
		image: require("./../assets/images/tablets.jpg")
	},  
	{  
		title:"Naproxen",
		dosage:"300mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: [
			{ quantity: "5 tablets", price: 20 },
			{ quantity: "10 tablets", price: 40	},
			{ quantity: "15 tablets", price: 60	},
		],
		image: require("./../assets/images/tablets.jpg")
	},  
	{  
		title:"Diclofenac",
		dosage:"50mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: [
			{ quantity: "5 tablets", price: 20 },
			{ quantity: "10 tablets", price: 40	},
			{ quantity: "15 tablets", price: 60 },
		],
		image: require("./../assets/images/tablets.jpg")
	},  
	{  
		title:"Voltaren",
		dosage:"50mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: [
			{ quantity: "5 tablets", price: 20 },
			{ quantity: "10 tablets", price: 40	},
			{ quantity: "15 tablets", price: 60 },
		],
		image: require("./../assets/images/tablets.jpg")
	},  
	{  
		title:"Nimesulide",
		dosage:"100mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: [
			{ quantity: "5 tablets", price: 20 },
			{ quantity: "10 tablets", price: 40	},
			{ quantity: "15 tablets", price: 60	},
		],
		image: require("./../assets/images/tablets.jpg")
	},  
	{  
		title:"Nimulid",
		dosage:"120mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: [
			{ quantity: "5 tablets", price: 20 },
			{ quantity: "10 tablets", price: 40 },
			{ quantity: "15 tablets", price: 60 },
		],
		image: require("./../assets/images/tablets.jpg")
	},  
	{  
		title:"Ketorolac",
		dosage:"10mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: [
			{ quantity: "5 tablets", price: 20 },
			{ quantity: "10 tablets", price: 40 },
			{ quantity: "15 tablets", price: 60	},
		],
		image: require("./../assets/images/tablets.jpg")
	},  
	{  
		title:"Tramadol",
		dosage:"50mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: [
			{ quantity: "5 tablets", price: 20 },
			{ quantity: "10 tablets", price: 40 },
			{ quantity: "15 tablets", price: 60 },
		],
		image: require("./../assets/images/tablets.jpg")
	},  
	{  
		title:"Tylenol",
		dosage:"500mg",
		formFac:"Tablet",
		ageRes:"18+",
		amount: [
			{ quantity: "5 tablets", price: 20 },
			{ quantity: "10 tablets", price: 40 },
			{ quantity: "15 tablets", price: 60	},
		],
		image: require("./../assets/images/tablets.jpg")
  
	},  
	{  
		title:"Doliprane",
		dosage:"5 ml",
		formFac:"Syrup",
		ageRes:"15+",
		amount: [
			{ quantity: "5 tablets", price: 20 },
			{ quantity: "10 tablets", price: 40 },
			{ quantity: "15 tablets", price: 60 },
		],
		image: require("./../assets/images/tablets.jpg")
	},  
	{  
		title: "Babygesic",
		dosage: "5 ml",
		formFac: "Syrup",
		ageRes: "6 months+",
		amount: [
			{ quantity: "5 tablets", price: 20 },
			{ quantity: "10 tablets", price: 40 },
			{ quantity: "15 tablets", price: 60 },
		],
		image: require("./../assets/images/tablets.jpg")
	}
]

export {AmountDataType, CardDataType, CardData};
