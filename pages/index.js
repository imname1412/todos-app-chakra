import React  , { useState , useEffect } from 'react'
import { VStack ,
  HStack ,
  Box ,
  Heading ,
  StackDivider ,
  IconButton ,
  useColorMode
} from "@chakra-ui/react"
import Add from '../components/Add'
import TodoList from "../components/TodoList"
import { FaSun , FaMoon } from 'react-icons/fa'

export default function Home() {
  // const initialTodos = [
  //   {
  //     id: 1,
  //     body: 'get bread',
  //   },
  //   {
  //       id: 2,
  //       body: 'get butter',
  //     },
  //   ]


  const { colorMode , toggleColorMode } = useColorMode()
  const [todos, setTodos] = useState([])


  

  useEffect(() => {
    const getData = localStorage.getItem('todos')


    if(getData !== null){
      // console.log(getData)
      setTodos(JSON.parse(getData))
    }else{
      // localStorage.setItem('todos' , JSON.stringify([]))
    }


  } , [])
    
  


  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })

    const getData = JSON.parse(localStorage.getItem('todos'))

    if(getData !== null){
      localStorage.setItem('todos' , JSON.stringify(newTodos))
    }

    setTodos(newTodos)
  }

  const addTodo = (todo) => {

    setTodos([...todos , todo])
    
    
    // console.log(todos)
  }

  return (
    <VStack
      p={4}
      spacing='1rem'
    >
      <IconButton 
        icon={colorMode === 'light'? <FaSun />:<FaMoon />}
        size='lg'
        alignSelf='flex-end'
        isRound='true'
        onClick={toggleColorMode}
        transition={3}
      />
      <Heading
        size='2xl'
        fontWeight='extrabold'
        bgGradient='linear(to right , pink.500 , pink.300 , blue.500)'
        bgClip='text'
        mb={8}
      >
        Todo Application
      </Heading>
      
      
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <Add addTodo={addTodo} />

    </VStack>
  )
}
