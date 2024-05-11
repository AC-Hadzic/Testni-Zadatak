import { Modal, Button, ConfigProvider } from "antd";
import "../../assets/CSS/modal.scss";
import { statusIndicator } from "../../utils/Utils";
import { DetailsComponent } from "../../layout/LayoutComponents/DetailsComponent";

function ModalComponent({ activeRecord, isModalOpen, setIsModalOpen, title, text }) {
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

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
                title={title}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={[
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Close window
                    </Button>
                ]}>

                <p> {text} </p>
                <div className='modal'>
                    <div>
                        <DetailsComponent title="Server name:" data={activeRecord?.name} />
                        <DetailsComponent title="Server created at:" data={activeRecord?.date_created} />
                        <DetailsComponent title="Server managed by:" data={activeRecord?.admin} />
                        <DetailsComponent title="Server description:" data={activeRecord?.description} />
                    </div>

                    <div>
                        <DetailsComponent title="Server ID:" data={activeRecord?.id} />
                        <DetailsComponent title="Server App ID:" data={activeRecord?.application_id} />
                        <DetailsComponent title="Server IP Adress:" data={activeRecord?.ip} />
                        <DetailsComponent title="Server status:" data={statusIndicator(activeRecord?.status, "small")} />
                    </div>
                </div>
            </Modal>
        </ConfigProvider>
    )
}

export { ModalComponent };