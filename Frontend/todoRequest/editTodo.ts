interface todoForm {
    id: string,
    title: string,
    description: string,
    completed: boolean,
    token: string
}

export async function editTodoFun({ id, title, description, completed, token }: todoForm) {
    console.log(id)
    const response = await fetch(`http://localhost:8000/api/updatetodo`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id, title, description, completed, token
        })
    })

    if (!response.ok) {
        throw new Error('error to update todo fetch err')
    }

    const result = await response.json()

    if (result.errors) {
        throw new Error('Error in grapql')
    }

    return result
}