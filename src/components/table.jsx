import React from 'react';
import { Table } from 'antd';

// Kolumne tablice - ID, App.ID i Name
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: {compare: (a, b) => a.id - b.id},
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Application ID',
    dataIndex: 'application_id',
  },
  {
    title: 'Server Name',
    dataIndex: 'name',
  },
];

function TableComponent({keyFromDropdown, dataToTable}) {

    // Props šalje data za novi Array kojim se puni tablica, dodavanje key varijable zbog potrebe .map funkcije. Provjera postojanja svih potrebnih podataka.
    const newArray = keyFromDropdown && dataToTable  &&
        dataToTable[keyFromDropdown].environments.map( item => ({
            key: item.id,
            id: item.id,
            application_id: item.application_id,
            name: item.name
        })) 

    return (
        <Table columns={columns} dataSource={newArray}  />
    )
}
export default TableComponent;