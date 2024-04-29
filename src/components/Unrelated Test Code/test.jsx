import { useEffect } from "react";
import { useState } from "react";
import { Table } from "antd";
export default function FetchData() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);
  const columns = [
    {
      title: "ID", //naslov kolumne
      dataIndex: "id", //sadržaj kolumne, u biti records.id
      //showSorterTooltip: {
      //target: "full-header",
      //},
      //filters: [
      // {text: "Nešto prvo", value: "prvo",},
      // {text: "Nešto drugo", value: "drugo",}, ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      //onFilter: (value, records) => records.name.indexOf(value) === 0,
      //sorter: (a, b) => a.name.length - b.name.length,
      //sortDirections: ["descend"],
    },
    {
      title: "Aplication ID", //naslov kolumne
      dataIndex: "name", //sadržaj kolumne, u biti records.name
      //defaultSortOrder: "descend",
      showSorterTooltip: {
        target: "full-header",
      },
      filters: [
        {
          text: "Nešto prvo",
          value: "prvo",
        },
        {
          text: "Nešto drugo",
          value: "drugo",
        },
      ],
      sorter: (a, b) => a.name.length - b.name.length,
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <Table
        columns={columns}
        dataSource={records}
        onChange={onChange}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
        style={{ margin: 10, overflow: "auto" }}
      />
    </>
  );
}