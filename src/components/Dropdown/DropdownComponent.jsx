import React, { useContext, useEffect, useState } from 'react';
import { DataForContext } from '../../pages/HomePage/HomePage';
import "./../../assets/CSS/dropdown.scss";
import { DropdownRender } from './DropdownRender';
import { dropdownDataParser } from '../../utils/Utils';

function DropdownComponent() {
    const [selectedEnv, setSelectedEnv] = useState("");
    const { data, setEnvID } = useContext(DataForContext);

    // Funkcija vraća Dropdownu iskoristiv array od data
    const items = dropdownDataParser(data)

    // useEffect poziva update funkciju i postavlja početnu tablicu na Production Environment
    useEffect(() => {
        data.length > 0 &&
            updateSelectedEnv(items[0].key, items[0].label);
            // console.log("useEffect called");
    }, [data])

    // Handle funkcija za onClick koja poziva update funkciju
    const handleSelectedEnv = (item) => {
        updateSelectedEnv(item.key, items[item.key].label);
        // console.log("handler called");
    };

    // Funckija koja postavlja Environment Key (potrebno za Table) i label (potrebno za prikaz u Dropdown)
    const updateSelectedEnv = (key, label) => {
        setSelectedEnv("Selected: " + label);
        setEnvID(key);
        // console.log("setter called");
    };

    return (
        <DropdownRender
            menu={{
                items,
                selectable: true,
                onClick: handleSelectedEnv,
                defaultSelectedKeys: "0",
            }}
            selectedEnv={selectedEnv}
        />
    )
}

export { DropdownComponent };