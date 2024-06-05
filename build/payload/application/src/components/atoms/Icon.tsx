import React from "react";
import 'material-symbols/outlined.scss'

const Icon = ({iconName}: { iconName: String }) => (
    <span className={'material-symbols-outlined'}>
        {iconName}
    </span>
)

export default Icon
