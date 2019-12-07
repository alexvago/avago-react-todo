import React from 'react';
import './home.css';
import Todo from '../todo';
import Container from '@material-ui/core/Container';
import {Dialog, Fab, List, Paper, Typography} from "@material-ui/core";
import {Add as AddIcon} from '@material-ui/icons';

import {makeStyles} from '@material-ui/core/styles';
import InputForm from "../inputForm";

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

const initTodos = [
    {title: "Add input field", checked: true},
    {title: "Add styling", checked: false}
];

function Home() {
    const [todos, setTodos] = React.useState(initTodos);
    const [open, setOpen] = React.useState(false);


    const classes = useStyles();

    const addTodo = (text: string) => {
        const newTodos = [...todos, {title: text, checked: false}];
        setTodos(newTodos);
        setOpen(false);
    };

    const handleToggleTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos[index].checked = !todos[index].checked;
        setTodos(newTodos);
    };


    return (
        <Container maxWidth='sm'>
            <Paper className="home">
                <Typography variant='h5'>You still need to:</Typography>
                <List>
                    {todos.map((todo, i) => (
                        <Todo todo={todo} key={i} index={i} handleToggle={handleToggleTodo}/>
                    ))}
                </List>
            </Paper>

            <Dialog open={open} onClose={(e) => setOpen(false)}>
                <InputForm addTodo={addTodo}/>
            </Dialog>

            <Fab color="primary" aria-label="add" className={classes.fab} onClick={(e) => setOpen(true)}>
                <AddIcon/>
            </Fab>
        </Container>
    );
}

export default Home;
