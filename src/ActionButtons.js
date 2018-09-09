import ToDoList from "./ToDoList";
import BarChart from "./BarChart";
import Model from './Model';

class ActionButtons {

    constructor(model) {
        //debugger;
        console.log(model);
        this.model = model;
    }

    render(container) {
        const buttonA = {
            html: '<button id="add">Add</button>'
        }
        const buttonB = {
            html: '<button id="delete">Delete</button>'
        }

        const search={
            html: '<input type="text" id="searchInput"/><button id="search">search</button>'
        }
// debugger;
        container.innerHTML = `${buttonA.html} ${buttonB.html} ${search.html}`;
        this.addlister();
    }

    addlister() {
        let deleteText = "";
        document.getElementById("to-do-list").addEventListener("click", function (event) {
            deleteText = event.target.innerText;
            console.log("delete target", event.target.innerText);
        });

        const addTable = document.getElementById('add');
        addTable.addEventListener('click', () => this.createNewRow(this.model));
        const deleteTable = document.getElementById('delete');
        deleteTable.addEventListener('click', () => this.delete_item(this.model, deleteText));
        const searchTable = document.getElementById("search");
        searchTable.addEventListener('click', () => this.searchItem(this.model))
    }

    searchItem(model) {
        let searchText = document.getElementById("searchInput").value;
        let data = model.getData();
        model.data = data.filter((obj) => obj.name.includes(searchText));
        new ToDoList(model).render(document.getElementById('to-do-list'));
        new BarChart(model).render(document.getElementById('bar-chart'));
    }

    delete_item(model, deleteText) {

        let data = model.getData();
        model.data = data.filter((obj) => obj.name !== deleteText);
        new ToDoList(model).render(document.getElementById('to-do-list'));
        new BarChart(model).render(document.getElementById('bar-chart'));
    }

    createNewRow(model) {
        const newEle = `<tr><td><input type="text" name="todo-things"  id="input"/>
</td> <td>
      <select>
      <option value="TO DO"selected>TO DO</option>
      <option value="Blocked">Blocked</option>
          <option value="Finished">Finished</option>
          </select></td></tr>`
        document.getElementById('to-do-list').innerHTML += newEle;
        // this.model.addBlankData();
        // new ToDoList(this.model).render(document.getElementById('to-do-list'));
        //  new BarChart(this.model).render(document.getElementById('bar-chart'));
        document.getElementById("input").addEventListener("keypress", function (event) {
            //debugger;
            //console.log(event.keyCode);
            if (event.keyCode === 13) {
                // console.log(event.target.value);
                // console.log(new Model().getData());
                console.log(model);
                let data = model.getData();
                data.push({name: event.target.value, status: 'TO DO'});
                new ToDoList(model).render(document.getElementById('to-do-list'));
                new BarChart(model).render(document.getElementById('bar-chart'));
            }
        })
    }
}


export default ActionButtons;