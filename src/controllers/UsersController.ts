import User from '@models/User';

export default class UsersController {
  test() {
    const user = new User();
    console.log(user);
    return this;
  }
}
