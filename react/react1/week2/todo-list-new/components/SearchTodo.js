const SearchTodo = ({ searchTodo }) => {
    
    const handleSearch = (e) => {
        searchTodo(e)
    }

    return ( 
        <div className="text-center text-light my-4">
            <h1 className="mb-4">Todo List</h1>
            <form onSubmit={ handleSearch } className="search text-center my-4">
                <label className="text-light">Search for a todo...</label>
                <input className="form-control m-auto" type="text" name="search" />
            </form>
        </div>
     );
}
 
export default SearchTodo;