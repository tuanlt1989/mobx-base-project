import ApiResponse from 'models/apiResponse';
import { ApiRepository } from './apiRepository';

export class UserRepository extends ApiRepository {
  private static classInstance?: UserRepository; // Class instance
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new UserRepository();
    }

    return this.classInstance;
  }

  /// Get list user
  getListUsers = () => this.instance.get<ApiResponse>('/users');

  /// Get user
  getUser = (id: string) => this.instance.get<ApiResponse>(`/users/${id}`);
}
