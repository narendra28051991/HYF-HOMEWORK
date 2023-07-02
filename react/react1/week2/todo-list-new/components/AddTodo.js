const AddTodo = ({ addTodo }) => {

    const handleAdd = (todo) => {
        addTodo(todo)
    }

    return ( 
        <form onSubmit={ handleAdd } className="add text-center my-4">
            <label className="text-light">Add a new todo...</label>
            <input className="form-control m-auto" type="text" name="add" />
        </form>
     );
}
 
export default AddTodo;