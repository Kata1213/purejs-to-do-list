//在这里hard coding这个数组
class Model {
  constructor() {
    this.data=[
        {name:'finish homework',status:'TO DO'},
        {name:'refactor code',status:'TO DO'},
        {name:'sleep early',status:'Blocked'},
        {name:'have a dinner',status:'Blocked'},
        {name:'clean the room ',status:'Blocked'},
        {name:'go shopping ',status:'Blocked'},
        {name:'call my daddy',status:'Blocked'},
        {name:'read some books',status:'TO DO'},
        {name:'chat with friends',status:'Blocked'},
        {name:'eat medicine',status:'Finished'}
    ]
  }

  getData(){return this.data}

  addBlankData(){
    this.data.push({name:'',status:'TO DO'});
    // console.log(this.data);
    }


}



export default Model;