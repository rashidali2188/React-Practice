import React from 'react'

function TableAndArray() {
    const emplo = [
        {
            id: '1',
            name: "Rashid Ali",
            age: '23',
            salary: '33000'

        },
        {
            id: '2',
            name: "Ahmed Khan",
            age: '25',
            salary: '34000'

        },
        {
            id: '3',
            name: "arshad Ali",
            age: '25',
            salary: '35000'

        },
        {
            id: '4',
            name: "saad Ali",
            age: '24',
            salary: '36000'

        }
    ]
    return (
        <div className="table-wrap">
            <h2 className="table-title">Learn Table & Array Data</h2>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {emplo.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableAndArray;
