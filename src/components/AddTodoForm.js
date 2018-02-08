import React from "react";

let AddTodoForm = ({ onSubmit }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          //Ako nije unijeto nista(trimovano-brise blankspaces) vrati se na pocetak
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          //kad korisnik unese novi todoitem salje poziv onsubmit f-ji sa Todo tekstom
          onSubmit(input.value);
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
export default AddTodoForm;
