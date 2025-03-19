import React, { useEffect, useRef, useState } from 'react';
import { 
	View, 
	Text, 
	FlatList, 
	StyleSheet,
	ViewToken,
	Dimensions, 
} from 'react-native';
import Animated, { 
	scrollTo,
	useAnimatedRef, 
	useAnimatedScrollHandler, 
	useDerivedValue, 
	useSharedValue, 
} from "react-native-reanimated";
import { HomeCardDataType } from "./../data/home-card-data";
import HomeCard from './home-card';
import Pagination from './pagination';

const {width} = Dimensions.get("screen");

type Props = {
	itemData: HomeCardDataType[];
};

const HomeSlider = ({itemData}:Props) => {
	const scrollX = useSharedValue(0); 
	const [paginationIndex, setPaginationIndex] = useState(0);
	const [data, setData] = useState(itemData);
	const ref = useAnimatedRef<Animated.FlatList<any>>();
	const [isAutoPlay, setIsAutoPlay] = useState(true);
	const interval = useRef<NodeJS.Timeout>();
	const offSet = useSharedValue(0);

	const onScrollHandler = useAnimatedScrollHandler({
		onScroll: (e) => {
			scrollX.value = e.contentOffset.x;
		},
		onMomentumEnd: (e) => {
			offSet.value = e.contentOffset.x;
		},
	});
	
	useEffect(() => {
		if(isAutoPlay == true) {
			interval.current = setInterval(() => {
				offSet.value =offSet.value + width;
			}, 3000)
		}
		else{
			clearInterval(interval.current);
		}
		return () => {
			clearInterval(interval.current);
		}
	}, [isAutoPlay, offSet, width]);
	
	useDerivedValue(() => {
		scrollTo(ref, offSet.value, 0, true);
	});

	const viewabilityConfig = {
		itemVisiblePercentThreshold: 50
	};
	
	const onViewableItemsChanged = ({viewableItems} : {viewableItems: ViewToken[]}) => {
		if(viewableItems[0].index !== undefined  && viewableItems[0].index !== null){
			setPaginationIndex(viewableItems[0].index % itemData.length);
		}
	}
	
	const viewabilityConfigCallbackPairs = useRef([
		{viewabilityConfig, onViewableItemsChanged}
	]);

	return (
		<View>
			<Animated.FlatList 
				ref={ref}
				data={data} 
				renderItem={({item, index}) => 
				<HomeCard
					item={item}
					index={index}
					scrollX={scrollX}
				/>}
				horizontal
				showsHorizontalScrollIndicator={false}
				pagingEnabled
				onScroll={onScrollHandler}
				scrollEventThrottle={16}
				viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
				onEndReached={() => setData([...data, ...itemData])}
				onEndReachedThreshold={0.5}
				onScrollBeginDrag={() => {
					setIsAutoPlay(false);
				}}
				onScrollEndDrag={() => {
					setIsAutoPlay(true);
				}}
			/>
			<Pagination
				items={itemData}
				paginationIndex={paginationIndex}
				scrollX={scrollX}
			/>
		</View>
	);
};

export default HomeSlider;
