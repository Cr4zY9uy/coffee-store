import { Button, Row, Col, Card } from "react-bootstrap";
import './favourite.css'
function Favourite() {
    return (
        <>
            <h2>Favourite</h2>
            <Button variant="outline-danger">Delele all</Button>
            <div className="container">
                <Row className="h-30">
                    <Col xs={3} className="mt-2 mb-2 text-center h-50">
                        <div className="delete_button" typeof="submit"><i class="bi bi-x-lg"></i></div>
                        <Card>
                            <Card.Img variant="top" src="./images/product1.jfif" alt="product-img" height={"250px"} loading="lazy" />
                            <Card.Title>The Coffe</Card.Title>
                        </Card>
                    </Col>
                    <Col xs={3} className="mt-2 mb-2 text-center h-50">
                        <div className="delete_button" typeof="submit"><i class="bi bi-x-lg"></i></div>
                        <Card>
                            <Card.Img variant="top" src="./images/product1.jfif" alt="product-img" height={"250px"} loading="lazy" />
                            <Card.Title>The Coffe</Card.Title>
                        </Card>
                    </Col>
                    <Col xs={3} className="mt-2 mb-2 text-center h-50">
                        <div className="delete_button" typeof="submit"><i class="bi bi-x-lg"></i></div>
                        <Card>
                            <Card.Img variant="top" src="./images/product1.jfif" alt="product-img" height={"250px"} loading="lazy" />
                            <Card.Title>The Coffe</Card.Title>
                        </Card>
                    </Col>
                    <Col xs={3} className="mt-2 mb-2 text-center h-50">
                        <div className="delete_button" typeof="submit"><i class="bi bi-x-lg"></i></div>
                        <Card>
                            <Card.Img variant="top" src="./images/product1.jfif" alt="product-img" height={"250px"} loading="lazy" />
                            <Card.Title>The Coffe</Card.Title>
                        </Card>
                    </Col>
                    <Col xs={3} className="mt-2 mb-2 text-center h-50">
                        <div className="delete_button" typeof="submit"><i class="bi bi-x-lg"></i></div>
                        <Card>
                            <Card.Img variant="top" src="./images/product1.jfif" alt="product-img" height={"250px"} loading="lazy" />
                            <Card.Title>The Coffe</Card.Title>
                        </Card>
                    </Col>
                </Row>
            </div>

        </>
    );
}
export default Favourite;