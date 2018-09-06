import ToDoList from "./ToDoList";
import BarChart from "./BarChart";


class ActionButtons {

  constructor(model) {
    this.model=model;
  }

  render(container) {
      const buttonA={
          html:'<button id="add">Add</button>'
      }
      const buttonB={
          html:'<button id="delete">Delete</button>'
      }
// debugger;
    container.innerHTML = `${buttonA.html} ${buttonB.html}`;
    this.addlister();
  }

  addlister(){
      const addTable = document.getElementById('add');
      addTable.addEventListener('click',()=>this.createNewRow());
      const deleteTable = document.getElementById('delete');
      deleteTable.addEventListener('click',()=>alert('delete'));
    }


    createNewRow(){
       this.model.addBlankData();
       new ToDoList(this.model).render(document.getElementById('to-do-list'));
        new BarChart(this.model).render(document.getElementById('bar-chart'));
    }
}



export default ActionButtons;