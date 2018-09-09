import Model from './Model';
class ToDoList {
  constructor(model) {
    this.data=model.getData();
    this.insertData = this.insertData.bind(this);
  }

  render(container) {
    const rows =this.data.reduce((pre,cur)=>
        pre+`${this.print_show_todo_things(cur)}${this.print_select(cur)}`,"");
         container.innerHTML = `<table>${rows}</table>`;

  };


  print_show_todo_things(cur){
    if(cur.name===""){
      //console.log("---this",this);
      return `<tr><td><input type="text" name="todo-things"  id="input" 
                onkeypress="if(event.keyCode===13) {
                    ${console.log("target",document.getElementById("input"))};
                   ${this.addNewData(event.target.value)};
               
                }"
                /></td>`
    }else{
      return `<tr><td>${cur.name}</td>`;
    }
  }

  insertData(event){
      debugger;
      console.log(event);
      if(event.keyCode===13) {
          debugger;
          // this.addNewData(event.target.value);
          alert('a')
      }
  }


    addNewData(text){
    //debugger;
        console.log("text",text);
        this.data.pop();
        this.data.push({name:`${text}`,status:'TO DO'});
        console.log("add",this.data);
       // new ToDoList(this.model).render(document.getElementById('to-do-list'));
    }


  print_select(data){
    return `
  <td>
      <select>
      <option value="TO DO" ${data.status === "TO DO" ? "selected" : ""}>TO DO</option>
      <option value="Blocked"${data.status === "Blocked" ? "selected" : ""}>Blocked</option>
          <option value="Finished" ${data.status === "Finished" ? "selected" : ""}>Finished</option>
          </select></td>`;
  }
}

export default ToDoList;