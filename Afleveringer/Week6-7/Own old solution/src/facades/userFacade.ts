import IGameUser from '../interfaces/GameUser';
const bcrypt = require('bcryptjs');
const debug = require('debug')('game-case')


export default class UserFacade {

    public static users: Array<IGameUser> = [
        { name: 'Rigmor', userName: 'rigmor@icc.dk', password: 'void', role: 'user' },
        { name: 'Silvia', userName: 'silvia@icc.dk', password: 'dragonslayer', role: 'user' },
        { name: 'admin', userName: 'lich@king.dk', password: 'bolvar', role: 'admin' }
    ];

    static async addUser(user: IGameUser): Promise<boolean> {
        let result = false;
        await new Promise((resolve, reject) => {
            bcrypt.hash(user.password, 10, (err:Error, hash:string) => {
                if (err) {
                    reject(err);
                } else {
                    user.password = hash;
                    UserFacade.users.push(user);
                    result = true;
                    resolve(hash);
                }
            });
        })
        debug('usersarray', UserFacade.users)
        return result;
    }
    static async deleteUser(userName: string): Promise<boolean> { 
        const user = UserFacade.users.find(u => u.userName === userName);
        if(!user) return false
        else {
            const index = UserFacade.users.indexOf(user);
            UserFacade.users.splice(index, 1);
            return true
        }
    }

    static async getAllUsers(): Promise<Array<IGameUser>> { 
        const allusers = await UserFacade.users;
        return allusers
    }
    static async getUser(userName: string): Promise<IGameUser> { 
        const user = await UserFacade.users.find(u => u.userName === userName);
        if(user) return user
        else throw new Error('User not found')
    }
    static async checkUser(userName: string, password: string): Promise<boolean> {
        let result = false;
        const user = UserFacade.users.find(u => u.userName === userName);
        if (!user) throw new Error('User not found')
        await new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err:Error, res:boolean) => {
                if (err) {
                    reject(err);
                } else {
                    result = res;
                    resolve(res);
                }
            });
        })
        return result;
    }
}

