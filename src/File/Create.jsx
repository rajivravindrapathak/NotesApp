import React, { useState } from 'react'
import {Container, Form} from 'react-bootstrap';
import uniqid from "uniqid"


function Create({ setNotes }) {
  const [form, setForm] = useState({ title: "", text: ""})
  const [id, setId] = useState(uniqid())

  function handleChange(event) {
      const {value, name} = event.target
      setForm[{...form, [name]: value, id}]
  }

  function addNote() {
    if(form.title !== '' || form.text !== '') {
      setNotes(note => [...note, form])
      setId(uniqid())
      setForm({ title: "", text: ""})
    }
  }

  return (
    
    <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Title</Form.Label>
            <Form.Control onChange={handleChange} value={form.title} type="text" placeholder="Enter Title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Text</Form.Label>
            <Form.Control onChange={handleChange} value={form.text} type="text" placeholder="Enter Description" />
          </Form.Group>
      </Form>
      <button onClick={addNote} className='btn btn-dark'>Add Note</button>
    </Container>
  )
}

export default Create
