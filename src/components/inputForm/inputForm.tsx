import {Button, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import React, {FunctionComponent} from "react";
import './inputForm.css';

type Props = {
    addTodo: (text: string) => void
}

const InputForm: FunctionComponent<Props> = props => {

    const [inputText, setInputText] = React.useState('');

    const handleAddTodo = (e: any) => {
        e.preventDefault(); // prevent bubbling of click
        props.addTodo(inputText); // actually add element to list
        setInputText(''); // reset input
    };

    return (
        <>
            <DialogTitle id="form-dialog-title">Add Todo</DialogTitle>
            <DialogContent>
                <form id='add-todo-form' onSubmit={handleAddTodo}>

                    <TextField value={inputText}
                               onChange={(e) => setInputText(e.target.value)}
                               fullWidth
                               autoFocus
                               label='What needs doing?'
                               inputProps={{'aria-label': 'naked'}}
                               color='secondary'
                               style={{color: 'white'}}/>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleAddTodo} disabled={!inputText} color="primary" aria-label="add to list">
                    Add
                </Button>
            </DialogActions>
        </>
    );
};

export default InputForm;

