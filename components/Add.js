import React , { useState } from 'react'
import {
  HStack,
  Button,
  Input,
  useToast
} from '@chakra-ui/react'
import { nanoid } from 'nanoid'


const Add = ({addTodo}) => {

  const [content, setContent] = useState('')
  const toast = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!content){
      toast({
        title: 'No content',
        // description: "Plese fill the content",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })

      return
    }

    const todo = {
      id: nanoid(),
      body: content,
    }

    const getData = JSON.parse(localStorage.getItem('todos'))


    if(getData !== null){
      const appendData = [...getData , todo]
      console.log('####')
      console.log(appendData)
      localStorage.setItem('todos' , JSON.stringify(appendData))
    }else{
      const newArr = [todo]
      localStorage.setItem('todos' , JSON.stringify(newArr))
    }


    


    addTodo(todo)
    setContent('')
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <HStack>
        <Input
          fontWeight={400}
          placeholder='Basic usage' 
          variant='filled'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          type='submit'
          colorScheme='pink'
          px={8}
        >
          Add Todo
        </Button>
      </HStack>
    </form>
  )
}

export default Add