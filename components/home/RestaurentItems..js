import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import RestuarantDetail from '../../screens/RestuarantDetaail'

const localRestaurent = [
    {
        name : 'Fish & Steak House',
        image_url: "https://images.unsplash.com/photo-1621705585968-22b488d03524?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
        categories: [{title: 'Sandwich'},{title: 'Juices'}],
        price: '$$',
        reviews: 35,
        rating: 4.5,
    },
    {
        name : 'Indiana (Indian Restaurant',
        image_url: "https://images.unsplash.com/photo-1567337710282-00832b415979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1330&q=80",
        categories: [{title: 'Chicken'},{title: 'Mutton'},{title: 'Briyani'}],
        price: '$$',
        reviews: 55,
        rating: 3.5,
    },
    {
        name : 'Ramaas Restuarant',
        image_url: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        categories: [{title: 'Meat'},{title: 'Steak'},{title:  'Fish'},{title:  'Chicken'}],
        price: '$$',
        reviews: 125,
        rating: 4.9,
    },
    {
        name : 'My Sandwich Fast Food',
        image_url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        categories: [{title: 'Sandwich'},{title: 'Burger'},{title: 'Chicken'}],
        price: '$$',
        reviews: 335,
        rating: 5.0,
    },
]

export default function RestaurentItem({navigation, ...props}) {
    return (
        
        <>
            {localRestaurent.map((restaurent, index) => (
                <TouchableOpacity key = {index} activeOpacity={1} style={{marginBottom: 30,
                
                }}
                onPress={() => navigation.navigate('RestuarantDetaail', {
                    name: restaurent.name,
                    image: restaurent.image_url,
                    price: restaurent.price,
                    reviews: restaurent.reviews,
                    rating: restaurent.rating,
                    categories: restaurent.categories,
                })}>
                
        <View  style={{ marginTop: 10, padding: 15, backgroundColor: 'white'}}>
            <RestaurentImage image={restaurent.image_url}/>
            <RestuarentInfo name={restaurent.name} rating={restaurent.rating}/>
            
        </View>
        </TouchableOpacity>
        ))}
        </>
        
    )
}

const RestaurentImage = (props) => (
    <>
    <Image source={{
        uri: props.image,
    }}
    style={{
        width: "100%",
        height: 180,
    }}
    />
    <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
        <MaterialCommunityIcons name='heart-outline' size={25} color='#fff'/>
    </TouchableOpacity>
    </>
);

const RestuarentInfo = (props) => (
    <View style={{
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,}}>
            <View>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{props.name}</Text>
        <Text style={{fontSize: 13, color: 'grey'}}>30-45 • min </Text>
        </View>
        <View style={{
            backgroundColor: '#eee',
            height: 30,
            width: 30,
            alignItems: 'center',
            borderRadius: 15,
            justifyContent: 'center'
            

        }}>
        <Text >{props.rating}</Text>
        </View>

    </View>
    

);