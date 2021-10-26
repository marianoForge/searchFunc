import React from 'react'
import { Table } from 'react-bootstrap'

function Card({ person }) {
    return (
        <Table striped bordered hover size="md" style={{ width: '100%' }}>
            <thead>
                <tr>
                    <th
                        style={{
                            width: '50%',
                        }}
                    >
                        Full Name
                    </th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{person.name}</td>
                    <td>{person.email}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Card
