import { UserRepository } from 'repositories/userRepository';

export class LoginStore {
  private userRepo = UserRepository.getInstance();

  login() {
    this.userRepo
      .getListUsers()
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
  }
}
