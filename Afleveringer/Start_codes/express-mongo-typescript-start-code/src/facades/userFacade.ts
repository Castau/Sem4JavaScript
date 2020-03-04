const bcrypt = require('bcryptjs');
const debug = require("debug")("game-case")

export interface IGameUser { name: string, userName: string, password: string, role: string }

export const users: Array<IGameUser> = [];
export class UserFacade {
    static async addUser(user: IGameUser): Promise<boolean> {
        let result = false;
        await new Promise((resolve, reject) => {
            bcrypt.hash(user.password, 10, (err:Error, hash:string) => {
                if (err) {
                    reject(err)
                } else {
                    user.password = hash;
                    users.push(user);
                    result = true;
                    resolve(hash)
                }
            });
        })
        debug('usersarray', users)
        return result;
    }
    static deleteUser(userName: string): boolean { 
        const user = users.find(u => u.userName === userName);
        if(!user) return false
        else {
            const index = users.indexOf(user);
            users.splice(index, 1);
            return true
        }
    }
    static getAllUsers(): Array<IGameUser> { 
        return users;
    }
    static getUser(userName: string): IGameUser { 
        const user = users.find(u => u.userName === userName);
        if(user) return user
        else throw new Error('User not found')
    }
    static async checkUser(userName: string, password: string): Promise<boolean> {
        let result = false;
        const user = users.find(u => u.userName === userName);
        if (!user) throw new Error('User not found')
        await new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err:Error, res:boolean) => {
                if (err) {
                    console.log(err);
                } else {
                    result = res;
                }
            });
        })
        return result;
    }
}
