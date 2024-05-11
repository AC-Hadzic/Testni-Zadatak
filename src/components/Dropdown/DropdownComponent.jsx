import React, { useContext, useEffect, useState } from 'react';
import { DataForContext } from '../../pages/HomePage/HomePage';
import "./../../assets/CSS/dropdown.scss";
import { DropdownRender } from './DropdownRender';
import { dropdownDataParser } from '../../utils/Utils';

function DropdownComponent() {
    const [selected, setSelected] = useState("");
    const { data, setEnvID } = useContext(DataForContext);

    // Funkcija vraća Dropdownu iskoristiv array od data
    const items = dropdownDataParser(data)

    // useEffect poziva update funkciju i postavlja početnu tablicu na Production Environment
    useEffect(() => {
        data.length > 0 &&
            updateSelected(items[0].key, items[0].label);
            // console.log("useEffect called");
    }, [data])

    // Handle funkcija za onClick koja poziva update funkciju
    const handleSelected = (item) => {
        updateSelected(item.key, items[item.key].label);
        // console.log("handler called");
    };

    // Funckija koja postavlja Environment Key (potrebno za Table) i label (potrebno za prikaz u Dropdown)
    const updateSelected = (key, label) => {
        setSelected("Selected: " + label);
        setEnvID(key);
        // console.log("setter called");
    };

    return (
        <DropdownRender
            menu={{
                items,
                selectable: true,
                onClick: handleSelected,
                defaultSelectedKeys: "0",
            }}
            selected={selected}
        />
    )
}

export { DropdownComponent };