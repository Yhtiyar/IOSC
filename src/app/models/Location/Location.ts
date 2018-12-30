
interface Location {
    id : number;
    name : String;
    raiting : Number;
    
}

export class Country implements Location {
   constructor (public id  = -1, public name : string, public raiting  = 0) {

   }
}


