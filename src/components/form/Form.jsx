import './form.css'
import { useState } from 'react'

function Form() {
    const [todos, setTodos] = useState('')
  
    const SetTodo = (e)=> {
        e.preventDefault()
        const todoWrap = document.querySelector('.todo-wrap')
        todoWrap.innerHTML += `<li>${todos}</li>`
    }
    return (
        <form className='form' onSubmit={SetTodo}>
            <input type="text" value={todos} onChange={(e)=> setTodos(e.target.value)} placeholder='Please write ...' autoComplete='of'/>
            <button type='submit'>Add</button>
        </form>
    )
}

export default Form