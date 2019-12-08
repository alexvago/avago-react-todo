import React from 'react';
import './home.css';
import Todo from '../todo';
import Container from '@material-ui/core/Container';
import {Dialog, Fab, List, Paper, Typography} from "@material-ui/core";
import {Add as AddIcon} from '@material-ui/icons';

import {makeStyles} from '@material-ui/core/styles';
import InputForm from "../inputForm";

import {useMutation, useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const GET_TODOS = gql`
    {
        allTodos {
            id
            text
            done
        }
    }
`;

const ADD_TODO = gql`
    mutation AddTodo($todo: TodoInput!) {
        addTodo(input: $todo) {
            id
            text
            done
        }
    }
`;

const TOGGLE_TODO = gql`
    mutation ToggleTodo($id: Int!) {
        toggleTodo(id: $id){
            id,
            done
        }
    }
`;

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));


function Home() {
    const [open, setOpen] = React.useState(false);

    const {loading, error, data} = useQuery(GET_TODOS);
    const [addTodo] = useMutation(ADD_TODO, {
        refetchQueries:  [ { query: GET_TODOS }],
        /*update(cache, {data: {addTodo}}) {
            // @ts-ignore
            const {todos} = cache.readQuery({query: GET_TODOS});
            cache.writeQuery({
                query: GET_TODOS,
                data: {todos: todos.concat([addTodo])},
            });
        }*/
    });

    const [toggleTodo] = useMutation(TOGGLE_TODO, {
        refetchQueries:  [ { query: GET_TODOS }],
       /* update(cache, {data: {toggleTodo}}) {
            // @ts-ignore
            const {todos} = cache.readQuery({query: GET_TODOS});
            cache.writeQuery({
                query: GET_TODOS,
                data: {todos: todos.concat([toggleTodo])},
            });
        }*/
    });


    const classes = useStyles();

    const handleAddTodo = async (text: string) => {
        addTodo({variables: {todo: {text: text}}});
        setOpen(false);
    };

    const handleToggleTodo = (id: number) => {
        toggleTodo({variables: {id: id}})
    };


    return (
        <Container maxWidth='sm'>
            <Paper className="home">
                <Typography variant='h5'>You still need to:</Typography>
                {loading &&
                <p>Loading...</p>
                }
                {error &&
                <p>Error :(</p>
                }
                {!loading && !error &&
                <List>
                    {data.allTodos.map((todo: any) => (
                        <Todo todo={todo} key={todo.id} handleToggle={handleToggleTodo}/>
                    ))}
                </List>
                }

            </Paper>

            <Dialog open={open} onClose={(e) => setOpen(false)}>
                <InputForm addTodo={handleAddTodo}/>
            </Dialog>

            <Fab color="primary" aria-label="add" className={classes.fab} onClick={(e) => setOpen(true)}>
                <AddIcon/>
            </Fab>
        </Container>
    );
}

export default Home;
