import React from 'react'
import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'
import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurentItems from '../components/home/RestaurentItems.'
import SearchBar from '../components/home/SearchBar'

export default function Home( {navigation}) {
    return (
        <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
            <View style={{backgroundColor: "white", padding: 15}}>
            <HeaderTabs/>
            <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <RestaurentItems 
            navigation={navigation}/>
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs/>
        </SafeAreaView>
    )
}
