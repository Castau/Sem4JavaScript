import React, { useState } from "react";
import { Button, Text, View } from "react-native";


function Cat(props) {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View>
            <Text>
                I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
            <Button
                onPress={() => {
                    setIsHungry(false);
                }}
                disabled={!isHungry}
                title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
            />
        </View>
    );
}

function Cafe() {
    return (
        <>
            <Cat name="Munkustrap" />
            <Cat name="Spot" />
        </>
    );
}


// https://reactnative.dev/docs/intro-react#state
export default function StateScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}>State Demo</Text>
            <Cafe />
        </View>
    );
}

