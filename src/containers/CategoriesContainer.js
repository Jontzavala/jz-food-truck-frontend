import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../actions/fetchCategories";
import CategoriesList from "../components/CategoriesList";


class CategoriesContainer extends Component {

    componentDidMount() {
        this.props.fetchCategories()
    }


    render() {
        return (
            <div>
                <CategoriesList categories={this.props.categories}/>     
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer)