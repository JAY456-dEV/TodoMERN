interface userData {
    id: string,
    username: string,
    email: string
}

export async function getUser(token: string): Promise<userData> {
    const response = await fetch('http://localhost:8000/api/getuser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token
        }),
    });

    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const result = await response.json();

    if (result.errors) {
        throw new Error('GraphQL errors occurred');
    }
    console.log(result)
    return result.getUserProfile;
}

