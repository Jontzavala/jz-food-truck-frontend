import React from "react";

const CategoriesList = (props) => {
    let categories = props.categories

    return (
        <div>
            {categories.map(category => <div>{category.name}</div>)}
        </div>
    )
}

export default CategoriesList