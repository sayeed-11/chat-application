import { View, Text } from 'react-native'
import React from 'react'
import { Svg, Path, G } from 'react-native-svg'

const StatusIcon = ({focused}) => {
    return (
        <View className={`border-2 ${focused ? "border-pink-700" : "bg-pink-700"} rounded-full p-1.5`}>
            <Svg width={40} height={40} fill="none">
                <G transform={"scale(1.7)"}>
                    <Path fill={focused ? "#FFF" : "#FFF"} fill-rule="evenodd" d="M12 3.5a8.5 8.5 0 0 0-7.183 13.047.5.5 0 0 1 .052.426L3.791 20.21l3.236-1.078a.5.5 0 0 1 .426.052A8.5 8.5 0 1 0 12 3.5ZM2.5 12a9.5 9.5 0 1 1 4.621 8.153l-3.963 1.321a.5.5 0 0 1-.632-.632l1.32-3.963A9.458 9.458 0 0 1 2.5 12Z" clip-rule="evenodd"></Path>
                    <Path fill={focused ? "#FFF" : "#FFF"} fill-rule="evenodd" d="M6.686 10.577A5.477 5.477 0 0 1 8.111 8.11a5.477 5.477 0 0 1 2.466-1.425l.258.967a4.477 4.477 0 0 0-2.017 1.165 4.477 4.477 0 0 0-1.165 2.017l-.967-.258Zm6.737-3.89A5.477 5.477 0 0 1 15.89 8.11a5.477 5.477 0 0 1 1.424 2.466l-.966.258a4.477 4.477 0 0 0-1.165-2.017 4.476 4.476 0 0 0-2.017-1.165l.258-.967Zm-5.312 9.202a5.477 5.477 0 0 1-1.425-2.466l.967-.258a4.477 4.477 0 0 0 1.165 2.017c.58.58 1.278.968 2.017 1.165l-.258.966A5.477 5.477 0 0 1 8.11 15.89Zm7.778 0a5.477 5.477 0 0 1-2.466 1.425l-.258-.967a4.477 4.477 0 0 0 2.017-1.165c.58-.58.968-1.278 1.165-2.017l.966.258a5.477 5.477 0 0 1-1.424 2.466Z" clip-rule="evenodd"></Path>
                </G>
            </Svg>
        </View>
    )
}

export default StatusIcon