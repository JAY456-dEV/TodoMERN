

interface GetTodoDetailsParams {
    id: string;
    token: string;
}

interface TodoResponse {
    getTodoById: {
        id: string;
        title: string;
        description: string;
        completed: boolean;
    }
}

export async function getTodoDetails({ id, token }: GetTodoDetailsParams): Promise<TodoResponse> {
    const response = await fetch('http://localhost:8000/api/gettododetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id,
            token
        })
    });

    if (!response.ok) {
        throw new Error("Error fetching details from API");
    }

    const result = await response.json();

    if (result.errors) {
        throw new Error('Error in GraphQL query');
    }
    return result;
}
