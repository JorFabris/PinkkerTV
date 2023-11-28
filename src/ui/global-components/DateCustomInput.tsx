import React, { useEffect, useRef, useState } from 'react';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../../assets/Colors';
import Fonts from '../../assets/Fonts';
import FontSize from '../../assets/FontSize';
import { getText } from '../../i18n/manageLocales';




const DateCustomInput = () => {
    const minYear = Number(new Date().toLocaleDateString().split('/')[2]) - 15;

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const refDay = useRef<TextInput>(null);
    const refMonth = useRef<TextInput>(null);
    const refYear = useRef<TextInput>(null);



    useEffect(() => {
        if (day.length > -1 && (Number(day) > 31 || Number(day) < 0)) {
            setDay('');
            return;
        }
        if (day.length === 2) {
            refMonth.current!.focus();
        }
        if (month.length > -1 && (Number(month) > 12 || Number(month) < 0)) {
            setMonth('');
            return;
        }
        if (day.length === 2 && month.length === 2) {
            refYear.current!.focus();
        }

        if (year.length > 3 && (Number(year) > minYear || Number(year) < 1900)) {
            setYear('');
            return;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [day, month, year]);

    return (
        <View>
            <Text style={{ color: Colors.textColor, fontFamily: Fonts.BOLD, fontSize: FontSize.fontBigMedium }}>{getText().register.inputs.birthday}</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 50,
                justifyContent: 'space-evenly',
            }}>
                <TextInput
                    placeholder="DD"
                    placeholderTextColor={Colors.placeholderText}
                    keyboardType="number-pad"
                    maxLength={2}
                    value={day}
                    ref={refDay}
                    style={styles.input}
                    onChangeText={(text) => setDay(text)} />
                <Text style={{ color: Colors.textColor, fontFamily: Fonts.BOLD, fontSize: FontSize.fontTitle }}>/</Text>
                <TextInput
                    placeholder="MM"
                    placeholderTextColor={Colors.placeholderText}
                    keyboardType="number-pad"
                    maxLength={2}
                    value={month}
                    ref={refMonth}
                    style={styles.input}
                    onChangeText={(text) => setMonth(text)} />
                <Text style={{ color: Colors.textColor, fontFamily: Fonts.BOLD, fontSize: FontSize.fontTitle }}>/</Text>
                <TextInput
                    placeholder="YYYY"
                    ref={refYear}
                    value={year}
                    placeholderTextColor={Colors.placeholderText}
                    keyboardType="number-pad"
                    maxLength={4}
                    style={styles.input}
                    onChangeText={(text) => setYear(text)} />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    input: {
        height: Platform.OS === 'ios' ? 40 : 45,
        textAlign: 'center',
        width: 60,
        color: Colors.textColor,
        fontFamily: Fonts.BOLD,
        fontSize: FontSize.seventeen,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.mainColor,
    },
});


export default DateCustomInput;
