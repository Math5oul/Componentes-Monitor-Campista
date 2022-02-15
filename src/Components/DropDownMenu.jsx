import React, { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown'
//https://github.com/srigar/multiselect-react-dropdown


export default function DropDownMenu(props) {




    const [selectedList, setSelected] = useState([]);

    
    return (
        <div>
            <Multiselect
                options={props.lista}
                selectedValues={selectedList}
                displayValue="label"
                onSelect={setSelected}
                onRemove={setSelected} />

        </div>
    )
}