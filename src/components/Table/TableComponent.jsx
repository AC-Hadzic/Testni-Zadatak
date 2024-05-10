import React, { useContext, useState } from 'react';
import { Table, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';
import "../../assets/CSS/table.scss";
import { DataForContext } from '../../pages/HomePage/HomePage';
import { statusIndicator } from '../../utils/Utils';
import { ModalDetails } from '../Modal/ModalDetails';

function TableComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeRecord, setActiveRecord] = useState(null);
    const { data, envID } = useContext(DataForContext);

    // Kolumne tablice
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            sorter: { compare: (a, b) => a.id - b.id },
            render: (text, record) => <Link to={"/" + record.serv_env + "/" + record.id}><span className='id-render-status'>{text}</span></Link>,
            align: "center"
        },
        {
            title: 'Application ID',
            dataIndex: 'application_id',
            hidden: window.innerWidth >= 1080 ? false : true
        },
        {
            title: 'Server Name',
            dataIndex: 'name'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (text, record) => <>{statusIndicator(record?.status)}</>,
            align: "center"
        }
    ];

    const showModal = () => {
        setIsModalOpen(true);
    };

    // Props šalje data za novi Array kojim se puni tablica, dodavanje key varijable zbog potrebe .map funkcije te serv_env kao identifikator environmenta radi generiranja Link-a. Provjera postojanja svih podataka.
    const newArray = envID && data &&
        data[envID].environments.map(item => ({
            id: item.id,
            application_id: item.application_id,
            name: item.name,
            description: item.description,
            date_created: item.date_created,
            status: item.status,
            admin: item.admin,
            ip: item.ip,
            key: item.id.toString(), // Dodan key radi .map funkcije
            serv_env: envID // keyFromDropdown bude prosljeđen u serverDetails radi lociranja na kojem se environmentu nalazi server 
        }))

    return (
        <div className='table'>
            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                            rowHoverBg: "rgb(196, 227, 238)",
                            cellPaddingBlock: "14px",
                            cellPaddingInline: "10px",
                            headerBorderRadius: 25
                        }
                    }
                }}
            >
                <Table
                    columns={columns}
                    dataSource={newArray}
                    // rowKey={(record) => record.id}
                    onRow={(record) => {
                        return {
                            onDoubleClick: () => {
                                showModal();
                                setActiveRecord(record);
                            }
                        };
                    }}
                />

                <ModalDetails
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    activeRecord={activeRecord}
                />
            </ConfigProvider>
        </div>
    )
}

export { TableComponent };