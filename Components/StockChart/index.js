import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const StockChart = (props) => {
    return(
            <View style={styles.stockInfo}>
                <Text style={styles.stockName}>Johnson & Johnson (JNJ)</Text>
                <Text style={styles.stockPrice}>$200.00</Text>
           </View>
    );
};

export default StockChart;



