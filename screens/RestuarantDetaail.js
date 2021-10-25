import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/restaurantDetail/About'
import MenuItem from '../components/restaurantDetail/MenuItem'
import ViewCart from '../components/restaurantDetail/ViewCart';

const foods = [
    {
        title: 'Dry Steak',
        description: 'With rice, Chips and sauce bachamel',
        price: '$7.20',
        image: 
        "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    },
    {
        title: 'Fried Chicken',
        description: 'With spachetti, tomato and sauce bachamel',
        price: '$5.60',
        image: 
        "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80"
    },
    {
        title: 'Burger Meat',
        description: 'With chips, tomato and sauce bachamel',
        price: '$4.50',
        image: 
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
    },
    {
        title: 'Fish Biryani',
        description: 'With rice, tomato and sauce bachamel',
        price: '$7.20',
        image: 
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
    },
];

export default function RestuarantDetail({ route, navigation }) {
    return (
        <View>
            <About route={route}/>
            <Divider width={1.5} style={{marginVertical: 20,}}/>
            <MenuItem restaurantName={route.params.name} foods={foods} />
            <ViewCart navigation={navigation} />
        </View>
    )
}
