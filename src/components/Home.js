import React, {Component} from 'react'
import CategoriesContainer from '../containers/CategoriesContainer'

class Home extends Component {

    render() {
        return (
            <div>
                <h1 className='main-header'>Welcome to JZ's Food Truck</h1>
                <CategoriesContainer/>
            </div>
        )
    }
}

export default Home