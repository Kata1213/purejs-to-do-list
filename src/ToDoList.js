class ToDoList {
  constructor(model) {
    this.data=model.getData();
  }

  render(container) {
    const rows =this.data.reduce((pre,cur)=>pre+`<tr><td>${cur.name}</td>

<td>
<select>
  <option value="TO DO" ${cur.status === "TO DO" ? "selected" : ""}>TO DO</option>
  <option value="Blocked"${cur.status === "Blocked" ? "selected" : ""}>Blocked</option>
  <option value="Finished" ${cur.status === "Finished" ? "selected" : ""}>Finished</option>
</select></td></tr>`,"");
    container.innerHTML = `<table>${rows}</table>`;

  };
}

export default ToDoList;