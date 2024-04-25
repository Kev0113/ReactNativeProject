import React, {useState} from "react";
import {Picker} from "react-native-web";
import {View} from "react-native";


const SelectInput = ({}) => {
    const [selectedValue, setSelectedValue] = useState("option1");

    return (
        <View>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                }
            >
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
            </Picker>
        </View>
    );
}

export default SelectInput
