import {Student} from "../Student/Sudent";
export class Entry {
    constructor (public id: number = -1,  public entryAuthorId: number, 
                 public entryTitle:string, public entryText : string, raiting:number=0 ) {
        
    }
}
export class Comment {
    constructor (public id:number=-1, public entryId:number,
                 public commentText : string, public commentAuthorId:number){
    
    }
}