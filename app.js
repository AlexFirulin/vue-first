Vue.createApp({
  data(){
    return{
      valueInput : '',
      needDoList : [],
      completeList: []

    };
  },
  methods:{
    handlyInput(event){
      this.valueInput = event.target.value
    },
    addTask(){
      if(this.valueInput===''){
        return
      }
      this.needDoList.push({
        title:this.valueInput,
        id:Math.random()
      });
      this.valueInput = "";
    },
    doCheck(index , type){
      if(type === 'need'){
        const completeMask = this.needDoList.splice(index , 1)
        this.completeList.push(...completeMask)
      } else {
        const notCompleteMask = this.completeList.splice(index,1)
        this.needDoList.push(...notCompleteMask)
      }
    },
    removeMask(index , type){
       const toDoList = type === 'need' ? this.needDoList : this.completeList;
       toDoList.splice(index,1)
    }
  },
  watch: {
    needDoList(newList, oldList) {
      console.log('Need to-do list changed:', newList, oldList);
    }
  }
}).mount('#app')