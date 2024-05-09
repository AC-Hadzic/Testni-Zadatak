import { Modal, Button, ConfigProvider } from "antd";
import "../../assets/CSS/modal.scss";
import { statusIndicator } from "../../utils/Utils";

function ModalComponent({isModalOpen, handleCancel, handleOk, activeRecord}) {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Modal: {
                        borderRadiusLG: 25,
                    },
                    Button: {
                        borderRadius: 25,
                        paddingBlock: 20,
                        contentLineHeight: 0,
                        contentFontSize: 15
                    }
                }
            }}
        >
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
                            <span>Server status: </span> <br /> {statusIndicator(activeRecord?.status)}
                        </div>
                    </div>                    
                </div>
            </Modal>              
        </ConfigProvider>
    )
}

export { ModalComponent };