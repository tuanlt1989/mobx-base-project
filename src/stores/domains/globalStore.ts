import { UserStore } from './userStore';

export class GlobalStore {
  userStore: UserStore; // User store

  constructor() {
    this.userStore = new UserStore();
  }

  /// Reset user store
  resetUserStore() {
    this.userStore = new UserStore();
  }
}
