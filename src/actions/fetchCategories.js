export function fetchCategories() {
    return (dispatch) => {
        fetch('http://localhost:3001/categories')
        .then(response => response.json())
        .then(categories => {
            if (categories.error) {
                alert(categories.error)
            }else{
                dispatch({type: 'FETCH_CATEGORIES', payload: categories})
            }
        })
        .catch(err => alert(err))
    }
}