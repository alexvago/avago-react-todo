import React, {FunctionComponent} from "react";
import './todo.css';
import {Checkbox, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

type Props = {
    todo: {
        title: string
        checked?: boolean
    },
    index: number,
    handleToggle: (index: number) => void
}

const Todo: FunctionComponent<Props> = ({todo, index, handleToggle}) => {
    const labelId = `checkbox-list-label-${index}`;

    return (
        <ListItem dense button onClick={() => {
            handleToggle(index);
        }}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={todo.checked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                />
            </ListItemIcon>
            <ListItemText id={labelId} primary={todo.title} />
        </ListItem>
    );
};

export default Todo;
