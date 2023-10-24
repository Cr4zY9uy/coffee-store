import { Modal } from "antd";
import { Table } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
function Orders() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Modal title="Orders" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1000}>
                <Table hover >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>1000$</td>
                            <td style={{ textAlign: "end" }}><Link to={'/orderdetail'}>Detail</Link></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>200$</td>
                            <td style={{ textAlign: "end" }}><Link to={'/orderdetail'}>Detail</Link></td>
                        </tr>

                    </tbody>
                </Table>

            </Modal>
        </>
    );
}
export default Orders;