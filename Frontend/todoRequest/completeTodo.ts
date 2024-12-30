interface todoData {
    id: string,
    completed: boolean
    token: string
}

export async function completeTodo({ id, completed, token }: todoData) {
    try {
        const response = await fetch(`http://localhost:8000/api/completetodo`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: token ? `${token}` : ''
            },
            body: JSON.stringify({
                id,
                completed,
                token
            })
        })

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('Error to fetch request for complete todo', error)
    }
}