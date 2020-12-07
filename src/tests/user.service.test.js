const userService = require('../services/user.service')
describe('Users service test', () => {
    test('should return user named Michael', async () => {
        const { user, tweets } = await userService.getUser('Michael')
        expect(user.following.length).toBe(3)
        expect(user.username).toBe('Michael')
        expect(user.following.includes('Vitalik')).toBe(true)
        expect(tweets.length).toBe(5)
    })
    test('should return user named Ed', async () => {
        const result = await userService.getUser('Ed')
        expect(result).toBe(null)
    })
    test('should return all users', async () => {
        const users = await userService.getUsers()
        expect(users.length).toBeGreaterThan(0)
    })
})
