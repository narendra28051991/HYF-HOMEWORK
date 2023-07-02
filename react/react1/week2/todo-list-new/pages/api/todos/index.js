const handler = async (req, res) => {
    try {
        if (req.method === 'GET') {
            await getTodo(req, res)
        }
        else if (req.method === 'POST') {
            await postTodo(req, res)
        }
        else {
            res.json({ "message": "Method not found" })
        }
    }
    catch (error) {
        res.json(error)
    }
}

export default handler;

const getTodo = async (req, res) => {
    const response = await fetch(process.env.URL)
    const todos = await response.json()
    return res.json(todos);
}

const postTodo = async (req, res) => {
    const { todo } = await req.body

    if (!todo) return res.json({ "message": "Missing required data" })

    const response = await fetch(process.env.URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            todo, completed: false
        })
    })
    const newTodo = await response.json()
    return res.json(newTodo)
}
