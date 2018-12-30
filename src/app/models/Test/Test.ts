export class Test {
    creatorId : Number;
    testId : Number;
    testName : String;          
    taskNumber : Number;
    tasks : Task[]=[];
    constructor (creatorId:Number, testName : String) {
                 this.creatorId=creatorId;
                 this.testName=testName;
    }
    private getTaskIndex(task :Task) {
            return this.tasks.findIndex((element)=> {
                            return (element.id==task.id);
            });
   } 
   public addTask(newTask :Task ) :void {
          this.tasks.push(newTask);
    }
   public deleteTask(task:Task):void {
          let index = this.getTaskIndex(task);
          this.tasks.splice(index);
    }
    public changeTask(task:Task) :void {
           let index = this.getTaskIndex(task);
           this.tasks[index]=task;
    }
    
}
/*
* Super class of TestTask and Question Task
*
*/
export class Task {
    answers : Answer[]=[];
    taskScore:Number;
    constructor(public id : Number, public taskQuestion: string){

    }
    addAnswer (newAnswer:Answer){
              this.answers.push(newAnswer);
    }
    getAnswerIndex(answer:Answer){
             return this.answers.findIndex((element)=> {
                  return (answer.id==element.id);
              });
    }
    changeAnswer(answer:Answer){
              let index=this.getAnswerIndex(answer);
              this.answers[index]=answer;
    }
    deleteAnswer(answer:Answer) {
              let index=this.getAnswerIndex(answer);
              this.answers.splice(index);
    }

}
/*
*  test-like TASK with  2<= answer  
*/
export class TestTask extends Task {
   
    
    constructor (  id:Number,  taskQuestion: string) {
     super(id,taskQuestion);
     
    }
    
    
} 
/*
* Task with ONLY 1 answer
* 
*/
export class QuestionTask extends Task{

    constructor( id: Number, taskQuestion:string){
        super(id,taskQuestion);
        this.answers.push(new Answer(1,"",true));
        this.addAnswer=this.changeAnswer;
    }
    
    changeAnswer(answer:Answer){
       
       this.answers[0].title=answer.title.toLowerCase();
    }
    deleteAnswer(){
        this.answers[0].title="";
    }

}

export class Answer {
   constructor (public id:number, public title:string, public isCorrect: Boolean){
        
   }
}