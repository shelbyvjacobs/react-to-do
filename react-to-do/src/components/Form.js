import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos}) => { //explicitly pass in props, so you don't need to use the props variable every time
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {text: inputText, completed: false, id: Math.random() * 1000}
        ])
        setInputText("");
    };

    return (
        <form>
            <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler} />
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="">+</i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todos">
                    <option value="all">All</option>
                    <option value="finished">Finished</option>
                    <option value="unfinished">unfinished</option>
                </select>
            </div>
        </form>
    );
};

export default Form;