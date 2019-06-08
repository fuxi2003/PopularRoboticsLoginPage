//user.js
import  Model from 'moder.js';
export default class User extends Model{
  static pattern(){
    return 'user/:id';
  }
  constructor{id}{
    super(User.pattern().id);

  }
}
