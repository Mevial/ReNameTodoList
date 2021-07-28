import React, {ChangeEvent, useState} from "react";

type PropsType = {
    title: string
    updateTask: (todolistId: string, id: string, title: string) => void
    todolistId: string
    id: string
}

export const EditableSpan = (props: PropsType) => {
    let [title, setTitle] = useState(props.title)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    let [edit, setEdit] = useState(false)
    const onDoubleClickHandler = () => {
        console.log('double')
        setEdit(true)
    }
    const onBlurHandler = () => {
        console.log('blur')
        setEdit(false)
        props.updateTask(props.todolistId,props.id, title)

    }
    return (
        edit
            ? <input
                value={title}
                onBlur={onBlurHandler}
                autoFocus={true}
                onChange={onChangeHandler}/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    )
}