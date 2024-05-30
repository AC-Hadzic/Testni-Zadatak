// src/pages/HomePage/HomePage.jsx
import React from "react";
import { DropdownComponent } from "../../components/Dropdown/DropdownComponent";
import { TableComponent } from "../../components/Table/TableComponent";
import { DataProvider } from "../../context/DataContext";

function HomePage() {
    return (
        <DataProvider>
                <DropdownComponent />
                <TableComponent />
        </DataProvider>
    );
}

export { HomePage };