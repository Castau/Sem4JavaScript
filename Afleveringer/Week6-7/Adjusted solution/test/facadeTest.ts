//run with 'npm test'
const expect = require('chai').expect;
import IGameUser from '../src/interfaces/GameUser';
import facade from '../src/facades/user'

describe('Test of user.ts', async () => {
    let users: Array<IGameUser> | any;
    let user: IGameUser;

    before(async function () {
        users = facade.users;
        user = { name: 'Ysera', userName: 'ysera@test.dk', password: 'test', role: 'user' }
    })
    afterEach(function () {
        facade.users = [
            { name: 'Rigmor', userName: 'one@user.dk', password: 'test', role: 'user' },
            { name: 'Silvia', userName: 'two@user.dk', password: 'test', role: 'user' },
            { name: 'Admin', userName: 'admin@admin.dk', password: 'test', role: 'admin' }
        ]
    })

    it('Testing addUser(user: IGameUser): Promise<string>', async function () {
        const expectedAmountOfUsers = (users.length) + 1;
        await facade.addUser(user)
        expect(users.length, 'Adding user').equal(expectedAmountOfUsers);
    });

    it('Testing deleteUser(userName: string): Promise<string>', async function () {
        const expectedAmountOfUsers = (facade.users.length) - 1;
        await facade.deleteUser('two@user.dk')
        const allUsers = await facade.getAllUsers();
        expect(allUsers.length, 'Deleting user').to.be.equal(expectedAmountOfUsers);
    });

    it('Testing getAllUsers(): Promise<Array<IGameUser>>', async function () {
        const result = await facade.getAllUsers()
        expect(result, 'Get all users').to.be.equal(facade.users);
    });

    it('Testing getUser(userName: string): Promise<IGameUser>', async function () {
        const expected = { name: "Rigmor", userName: "one@user.dk", password: "test", role: "user" };
        const result = await facade.getUser('one@user.dk')
        expect(result, 'Get single user').to.deep.equal(expected);
    });

    it('ErrorTesting getUser(userName: string): Promise<IGameUser>', async function () {
        try {
            await facade.getUser('wrong')
        } catch (err) {
            expect(err.errorCode).to.be.equal(404)
            expect(err.name).to.be.equal('ApiError')
            expect(err.msg).to.be.equal('User Not Found')
        }
    });

    it('Testing checkUser(userName: string, password: string): Promise<boolean>', async function () {
        const expected = true;
        await facade.addUser(user)
        const result = await facade.checkUser('ysera@test.dk', 'test')
        expect(result, 'Get single user').to.deep.equal(expected);
    });

    it('ErrorTesting checkUser(userName: string, password: string): Promise<boolean>', async function () {
        const expected = false;
        await facade.addUser(user)
        try {
            await facade.checkUser('ysera@test.dk', 'wrong')
        } catch (err) {
            expect(err).to.be.equal(expected);
        }
    });
})