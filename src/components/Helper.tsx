export const prepareHeaders = (method: string = "GET", params: { [key: string]: any } = {}) => {
    return {
        method: "POST",
        body: JSON.stringify(params),
    }
}

export const Skeleton = () => {
    return <>
        {Array.from(Array(10).keys()).map((index) => (
            <tr className="animate-pulse mb-2" key={index}>
                <td className="px-4 py-2 bg-gray-200">&nbsp;</td>
                <td className="px-4 py-2 bg-gray-200">&nbsp;</td>
                <td className="px-4 py-2 bg-gray-200">&nbsp;</td>
                <td className="px-4 py-2 bg-gray-200">&nbsp;</td>
                <td className="px-4 py-2 bg-gray-200">&nbsp;</td>
                <td className="px-4 py-2 bg-gray-200">&nbsp;</td>
            </tr>
        ))}
    </>
}

export const jsonData = [
    {
        "name": "Alice",
        "email": "alice@example.com",
        "password": "alice123",
        "dob": "1990-05-25"
    },
    {
        "name": "Bob",
        "email": "bob@example.com",
        "password": "bob456",
        "dob": "1985-10-12"
    },
    {
        "name": "Charlie",
        "email": "charlie@example.com",
        "password": "charlie789",
        "dob": "1995-03-18"
    },
    {
        "name": "David",
        "email": "david@example.com",
        "password": "david111",
        "dob": "1982-08-07"
    },
    {
        "name": "Eve",
        "email": "eve@example.com",
        "password": "eve222",
        "dob": "2000-11-30"
    },
    {
        "name": "Frank",
        "email": "frank@example.com",
        "password": "frank333",
        "dob": "1978-04-22"
    },
    {
        "name": "Grace",
        "email": "grace@example.com",
        "password": "grace444",
        "dob": "1993-09-15"
    },
    {
        "name": "Harry",
        "email": "harry@example.com",
        "password": "harry555",
        "dob": "1987-12-03"
    },
    {
        "name": "Ivy",
        "email": "ivy@example.com",
        "password": "ivy666",
        "dob": "1998-06-28"
    },
    {
        "name": "Jack",
        "email": "jack@example.com",
        "password": "jack777",
        "dob": "2002-02-14"
    },
    {
        "name": "Frank",
        "email": "frank@example.com",
        "password": "frank333",
        "dob": "1978-04-22"
    },
    {
        "name": "Grace",
        "email": "grace@example.com",
        "password": "grace444",
        "dob": "1993-09-15"
    },
    {
        "name": "Harry",
        "email": "harry@example.com",
        "password": "harry555",
        "dob": "1987-12-03"
    }
];