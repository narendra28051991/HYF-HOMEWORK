import { Inter } from 'next/font/google'

import { useEffect, useState } from 'react'

import Title from '@/components/Title'
import Footer from '@/components/Footer'
import SearchTodo from '@/components/SearchTodo'
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    
  const url = 'http://localhost:3000/api/todos'
  const [todos, setTodos] = useState([])
  const [todoId, setTodoId] = useState(null)
  
  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch(url)
          const data = await response.json()
          setTodos(data)
      }
      fetchData()
  }, [])

  const searchTodo = (e) => {
      const originalTodos = todos
      e.preventDefault()
      const term = e.target[0].value.trim().toLowerCase()
      const filteredTodos = todos.filter(each => each.todo.includes(term));
      setTodos(filteredTodos)
      setTimeout(() => {
        setTodos(originalTodos)
        e.target.reset()
      }, 3000);
  }

  const addTodo = async (e) => {
      e.preventDefault();
      const todo = e.target[0].value.trim().toLowerCase();

      if (todo.length) {
          const res = await fetch(url, {
              method: 'POST',
              headers: {'Content-type': 'application/json'},
              body: JSON.stringify({ todo, completed: false })
          })
          const data = await res.json()
          setTodos([...todos, data])
          e.target.reset()
      }
  }

  const editTodoId = async (e) => {
      setTodoId(+e.target.dataset.doc)
  }

  const editTodo = async (e) => {
      e.preventDefault()
      const todo = e.target.querySelector('#textInput').value.trim().toLowerCase()
      const status = e.target.querySelector('#select').value
      const button = document.querySelector('.btn-close')

      if (todo.length) {
          const res = await fetch(`${url}/${todoId}`, {
              method: 'PUT',
              headers: {'Content-type': 'application/json'},
              body: JSON.stringify({ todo, completed: status === 'true', id: todoId })
          })
          const updatedTodo = await res.json()
          const newTodos = todos.map(todo => [updatedTodo].find(obj => obj.id === todo.id) || todo);
          setTodos(newTodos)
          e.target.reset()
          button.click()
      }
  }

  const deleteTodo = async (e) => {
      const id = e.target.dataset.doc;
      const response = await fetch(`${url}/${id}`, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'}
      });
      await response.json();
      const newTodos = todos.filter(each => each.id !== +id);
      setTodos(newTodos);
  }

  return (
    <>
      <Title title='Homepage' />

      <div className={styles.container}>
          <SearchTodo searchTodo={searchTodo} />
          <TodoList todos={todos} editTodoId={editTodoId} editTodo={editTodo} deleteTodo={deleteTodo} />
          <AddTodo addTodo={addTodo}/>
      </div>

      <Footer />
    </>
  )
}
