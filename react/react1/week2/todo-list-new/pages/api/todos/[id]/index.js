export default async function handler(req, res) {
    try {
        if (req.method === 'DELETE') {
            await deleteTodo(req, res)
        }
        else if (req.method === 'PUT') {
            await putTodo(req, res)
        }
        else {
            res.json({"message": "Method not found"})
        }
    }
    catch (error) {
        res.json(error)    
    }
}

const deleteTodo = async (req, res) => {
    try {
        const id = req.url.slice(req.url.lastIndexOf('/'))

        const response = await fetch(process.env.URL + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await response.json()
        return res.json({ "message": "Successfully deleted" })   
    }
    catch (error) {
        return res.json(error)        
    }
}

const putTodo = async (req, res) => {
    try {
        const { todo, completed, id } = await req.body

        const resp = await fetch(`${process.env.URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                todo, completed, id
            })
        })    
        const updatedTodo = await resp.json()
        return res.json(updatedTodo)        
    }
    catch (error) {
        return res.json(error)        
    }
}
