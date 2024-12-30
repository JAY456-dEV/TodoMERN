
interface todoParam {
    id: string,
    token: string
}

export async function deleteTodo({ id, token }: todoParam) {
    const response = await fetch(`http://localhost:8000/api/deletetodo`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `${token}` : '',
        },
        body: JSON.stringify({
            id, token
        })
    })

    if (!response.ok) {
        throw new Error('Error To Send Reuqest For Delete Todo')
    }

    const result = await response.json()

    return true
}