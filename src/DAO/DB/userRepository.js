import UserManager from "./userManager.js";

class UserRepository {
  static async getUserByEmail(email) {
    return await UserManager.getUserByEmail(email);
  }

  static async getUserByCreds(email, password) {
    return await UserManager.getUserByCreds(email, password);
  }

  static async insertUser(first_name, last_name, age, email, password, role) {
    return await UserManager.insertUser({
      first_name,
      last_name,
      age,
      email,
      password,
      role,
    });
  }

  static async getUserById(userId) {
    return await UserManager.getUserByID(userId);
  }

  static async getCurrentPassword(userId) {
    return await UserManager.getCurrentPassword(userId);
  }

  static async getCurrentUser(userId) {
    return await UserManager.getCurrentUser(userId);
  }

  static async getAllUsers() {
    return await UserManager.getAllUsers();
  }

  static async getInactiveUsers(minutes) {
    return await UserManager.getInactiveUsers(minutes);
  }

  static async deleteUserById(userId) {
    return await UserManager.deleteUserById(userId);
  }
}

export default UserRepository;
