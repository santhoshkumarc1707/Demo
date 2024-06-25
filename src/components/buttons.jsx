import { useState } from 'react';

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [isEdit, setIsEdit] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit !== null) {
            todoList[isEdit] = todo
            setIsEdit(null);
            setTodo('')
        }
        else {
            setTodoList(pre => ([...pre, todo]));
            setTodo('')
        }
    };

    const handleDelete = (idx) => {
        const list = todoList?.filter((_, index) => index !== idx);
        setTodoList(list);
    };

    const handleEdit = (idx) => {
        const list = todoList?.find((_, index) => index === idx);
        setTodo(list);
        setIsEdit(idx)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button type='submit' > {isEdit !== null ? "Update" : "Submit"}</button>
            </form>
            <div>
                <ul>
                    {!!todoList?.length && todoList?.map((curr, idx) =>
                        <li key={idx}>{curr}
                            <button onClick={() => handleEdit(idx)} >edit</button>
                            <button onClick={() => handleDelete(idx)}>delete</button>
                        </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Todo