import { useState } from "react";

export function NewTodoForm({ onSubmit }){

    const [newItem, setNewItem] = useState("");


    function handleSubmit(e) {
      e.preventDefault();

      //   setTodos((currentTodos) => {
      //     return [
      //       ...currentTodos,
      //       { id: crypto.randomUUID(), title: newItem, completed: false },
      //     ];
      //   });
      if (newItem === "") return;

      onSubmit(newItem);

      setNewItem("");
    }

    return (
      <>
        <h2 style={{padding: "15px", textAlign: "center"}}>To Do App</h2>
        <form onSubmit={handleSubmit} className="new-item-form" action="">
          <div className="form-row">
            <label htmlFor="item"><h5>Add Item:</h5></label>
            {/* each time an event is fired for the input, set its text */}
            <input
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              type="text"
              id="item"
            />
            <button className="btn">Add</button>
          </div>
        </form>
      </>
    );
}