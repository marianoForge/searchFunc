import React, { useState } from 'react'
import SearchList from './SearchList'
import { Container, Row } from 'react-bootstrap'

function Search({ details }) {
    const [searchField, setSearchField] = useState('')

    const filteredPersons = details.filter((person) => {
        return (
            person.name.toLowerCase().includes(searchField.toLowerCase()) ||
            person.email.toLowerCase().includes(searchField.toLowerCase())
        )
    })

    const handleChange = (e) => {
        setSearchField(e.target.value)
    }

    function searchList() {
        return <SearchList filteredPersons={filteredPersons} />
    }

    return (
        <Container fluid style={{ maxWidth: '768px' }}>
            <Row>
                <h2
                    style={{
                        marginTop: '1rem',
                        width: '100%',
                        textAlign: 'center',
                    }}
                >
                    Search for a Name
                </h2>
            </Row>
            <Row
                style={{
                    marginTop: '1rem',
                    width: '100%',
                }}
            >
                <input
                    type="search"
                    placeholder="Search People"
                    onChange={handleChange}
                />
            </Row>
            <Row style={{ marginTop: '1rem', width: '100%' }}>
                {searchList()}{' '}
            </Row>
        </Container>
    )
}

export default Search
