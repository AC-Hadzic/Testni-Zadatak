import React, {useState} from 'react';
import { Table, Modal, Button, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';
import "./table.scss";

// Kolumne tablice

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        sorter: {compare: (a, b) => a.id - b.id},
        render: (text, record) => <Link to={"/" + record.serv_env + "/" + record.id}><span className='ID_render_status'>{text}</span></Link>,
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
        render: (text, record) => <>{record.status == 0 ? (<span className='inactive_status'> Inactive </span>) : (<span className='active_status'> Active </span>)}</>,
        align: "center"
    }
];

function TableComponent({keyFromDropdown, dataToTable}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeRecord, setActiveRecord] = useState(null);  

    const showModal = () => {
        setIsModalOpen(true);
    };
    
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // Props šalje data za novi Array kojim se puni tablica, dodavanje key varijable zbog potrebe .map funkcije te serv_env kao identifikator environmenta radi generiranja Link-a. Provjera postojanja svih podataka.
    const newArray = keyFromDropdown && dataToTable  &&
        dataToTable[keyFromDropdown].environments.map( item => ({
            id: item.id,
            application_id: item.application_id,
            name: item.name,
            description: item.description,
            date_created: item.date_created,
            status: item.status,
            admin: item.admin,
            ip: item.ip,
            key: item.id, // Dodan key radi .map funkcije
            serv_env: keyFromDropdown // keyFromDropdown bude prosljeđen u serverDetails radi lociranja na kojem se environmentu nalazi server 
        })) 
    
    // const data = keyFromDropdown && dataToTable && dataToTable[keyFromDropdown].environments;

    // stat_indicator će dodati class na element te biti prozvan u Modalu
    function status_indicator() {
        return (
            <>
                {activeRecord?.status == 0 ? (<span className='inactive_status_short'> Inactive </span>) : (<span className='active_status_short'> Active </span>)}         
            </>
        )
    }

    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                            rowHoverBg: "rgb(196, 227, 238)",
                            cellPaddingBlock: "14px",
                            cellPaddingInline: "10px",
                            headerBorderRadius: 25
                        },
                        Modal: {
                            borderRadiusLG: 25,
                        },

                        Button: {
                            borderRadius: 25,
                            paddingBlock: 20,
                            contentLineHeight: 0,
                            contentFontSize: 15
                        },

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
            
                <Modal
                    title="Server details" 
                    open={isModalOpen}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="submit" type="primary" onClick={handleOk}>
                            Close window
                        </Button>
                    ]}>

                    <p> Here you can view details about selected server. For further details click on the ID from the table content.</p>
                    <div className='modal'>
                        <div>
                            <div>
                                <span>Server name: </span> <br /> {activeRecord?.name}
                            </div>

                            <div>
                                <span>Server created at: </span> <br /> {activeRecord?.date_created}
                            </div>

                            <div>
                                <span>Server managed by: </span> <br /> {activeRecord?.admin}  
                            </div>

                            <div>
                                <span>Server description: </span> <br /> {activeRecord?.description}    
                            </div>                         
                        </div>

                        <div>
                            <div>
                                <span>Server ID: </span> <br /> {activeRecord?.id}
                                </div>

                            <div>
                                <span>Server App ID: </span> <br /> {activeRecord?.application_id}
                            </div>

                            <div>
                                <span>Server IP Adress: </span> <br /> {activeRecord?.ip}
                            </div>

                            <div>
                                <span>Server status: </span> <br /> {status_indicator()}
                            </div>
                        </div>                    
                    </div>
                </Modal>
            </ConfigProvider>
        </>
    )
}
export default TableComponent;