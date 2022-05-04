import React from "react";
import {Container, Card, CardGroup} from 'react-bootstrap'

const CategoriesList = (props) => {
    let categories = props.categories

    return (
        <div>
            <Container fluid>
                {categories.map(category =>
                <CardGroup key={category.id}>
                        <Card>
                            <Card.Img variant="top" src="https://www.tastingtable.com/img/gallery/chilaquiles-mexican-breakfast-recipe/intro-1641246535.jpg" />
                            <Card.Body>
                            <Card.Title>{category.name}</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                </CardGroup>
                )}
            </Container>
        </div>
    )
}

export default CategoriesList