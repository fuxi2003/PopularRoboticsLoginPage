//group.js
import  Model from 'Mode.js';
export default class Group extends Model{
  static pattern(){
    return 'group/:id';
    constructor(id){
      super(Group.pattern(),id);

    }
  }
}
