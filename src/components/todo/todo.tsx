import React, {FunctionComponent} from "react";
import './todo.css';
import {Checkbox, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

type Props = {
    todo: {
        id: number,
        text: string
        done?: boolean
    },
    handleToggle: (id: number) => void
}

const Todo: FunctionComponent<Props> = ({todo, handleToggle}) => {

    const labelId = `checkbox-list-label-${todo.id}`;

    return (
        <ListItem dense button onClick={() => {
            handleToggle(todo.id);
        }}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={todo.done}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                />
            </ListItemIcon>
            <ListItemText id={labelId} primary={todo.text} />
        </ListItem>
    );
};

export default Todo;
