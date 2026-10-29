import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Boat = ({ name, description, picture }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleRow}>
                <MaterialCommunityIcons name="sail-boat" size={24} color="#333" />
                <Text style={styles.name}>{name.toUpperCase()}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Image source={picture} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        marginLeft: 5,
        color: '#333',
    },
    description: {
        fontSize: 12,
        color: '#666',
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
});

export default Boat;