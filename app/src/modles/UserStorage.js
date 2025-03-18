"use strict";

class UserStorage {
  static #users = {
    id: ["wjddbsgh1228", "dbsgh1228", "kj11", "1234"],
    password: ["le0011ee", "dbsgh1228@", "@junghj9733", "1234"],
    name: ["정윤호", "유노윤호", "youno"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }
}

module.exports = UserStorage;
