import React, { useContext, useEffect, useMemo, useState } from 'react';
import { DataForContext } from '../../pages/HomePage/HomePage';
import "./../../assets/CSS/dropdown.scss";
import { DropdownRender } from './DropdownRender';
import { dropdownDataParser } from '../../utils/Utils';

function DropdownComponent() {
    const { data, setEnvID, searchParams, setSearchParams } = useContext(DataForContext);
    const envParams = searchParams.get("env");
    const [selectedEnv, setSelectedEnv] = useState(envParams);
    const items = useMemo(() => dropdownDataParser(data), [data]);

    // useEffect poziva update funkciju i postavlja početnu tablicu na Production Environment
    useEffect(() => {
        data.length > 0 && 
            updateSelectedEnv(
                items[envParams].key, 
                items[envParams].label
            );
    }, [data])

    // Funckija koja postavlja Environment Key (potrebno za Table) i label (potrebno za prikaz u Dropdown) Update na Params
    const updateSelectedEnv = (key, label) => {
        setSelectedEnv("Selected: " + label);
        setEnvID(key);
        setSearchParams({env: key});
    };

    return (
        <DropdownRender
            menu={{
                items,
                selectable: true,
                onClick: (item) => updateSelectedEnv(item.key, items[item.key].label),
                defaultSelectedKeys: [envParams],
            }}
            selectedEnv={selectedEnv}
        />
    )
}

export { DropdownComponent };