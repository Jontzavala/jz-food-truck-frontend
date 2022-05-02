import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../actions/fetchCategories";

class Categories extends Component {

    componentDidMount() {
        this.fetchCategories()
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, {fetchCategories})(Categories)