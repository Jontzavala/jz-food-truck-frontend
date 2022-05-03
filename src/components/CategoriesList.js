import React from "react";
import {Container, Card, Stack} from 'react-bootstrap'

const CategoriesList = (props) => {
    let categories = props.categories

    return (
        <div>
            <Container fluid>
                <Stack direction="horizontal">
                    {categories.map(category => 
                        <Card style={{ width: '15rem' }} className='text-center p-3 m-2 mx-auto shadow'>
                            {category.name}
                        </Card>
                    )}
                </Stack>
            </Container>
        </div>
    )
}

export default CategoriesList