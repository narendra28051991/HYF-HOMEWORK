const TodoList = ({ todos, deleteTodo, editTodoId, editTodo }) => {

    const handleDelete = (e) => {
        deleteTodo(e)
    }

    const handleId = (e) => {
        editTodoId(e)
    }

    const handleEdit = (e) => {
        editTodo(e)
    }
    
    return (
      <>
        <ul className="list-group todos mx-auto">
            {
              todos.map((todo) => (
                <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center text-light">
                  {
                    todo.completed === false
                      ? <span>{todo.todo}</span>
                      : <span className="text-decoration-line-through">{todo.todo}</span>
                  }
                  <span>
                    <i onClick={ handleId } className="bi bi-pencil-square me-5" id="pencil" data-bs-toggle="modal" data-bs-target="#reg-modal" data-doc={ todo.id }></i>
                    <i onClick={ handleDelete } className="bi bi-trash" data-doc={ todo.id }></i>
                  </span>
                </li>
              ))
            }
        </ul>

        {/* bootstrap-modal */}
        <div className="modal fade" id="reg-modal" tabIndex="-1" aria-labelledby="modal-title" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modal-title">Edit the todo</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={ handleEdit } className="m-3">
                        <div className="mb-3">
                          <label htmlFor="textInput" className="form-label">Todo</label>
                          <input type="text" id="textInput" className="form-control text-dark" placeholder="e.g. buy some groceries" required />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="select" className="form-label">Change the status</label>
                          <select id="select" className="form-select">
                            <option value="true">completed</option>
                            <option value="false">pending</option>
                          </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>

      </>
     );
}
 
export default TodoList;