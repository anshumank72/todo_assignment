import React, { useState } from 'react';
import ListItem from './Component/ListItem';
import { Grid, Typography, TextField } from '@material-ui/core';


const App = () => {
  const [todo, setTodo] = useState([{
    id: null,
    text: '',
  }])
  const [listItem, setListItem] = useState([])

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
      id: listItem.length + 1
    })
  }
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      //console.log(todo.text)
      setListItem([...listItem, todo.text])
    }
  }


  return <Grid container direction='column'
    style={{ backgroundColor: '#472769', height: '100vh' }}>
    <Grid item container direction='column'>
      <Grid item>
        <Typography>ToDo List</Typography>
      </Grid>
      <Grid item>
        <TextField placeholder='Add todo' value={todo.text} name="text" onChange={handleChange} onKeyPress={(e => handleSubmit(e))} />
      </Grid>
      <Grid item>
        <ListItem listItem={listItem} />
      </Grid>
    </Grid>
  </Grid>
}

export default App;
