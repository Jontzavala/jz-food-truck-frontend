import React from "react";
import {Container, Card, Row, Col} from 'react-bootstrap'

const CategoriesList = (props) => {
    let categories = props.categories

    return (
        <div>
            <Container fluid>
                <Row xs={1} md={2} lg={4} xl={6} classname='g-8'>
                    {categories.map(category => 
                        <Col key={category.id} className='d-flex'>
                            <Card style={{ width: '15rem' }} className='text-center p-3 m-2 mx-auto shadow'>
                                {category.name}
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default CategoriesList