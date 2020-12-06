const userService = require('../services/user.service')
describe('Users service test', () => {
    test('should return user named Michael', async () => {
        const { user, friends } = await userService.getUser('Michael')
        expect(user.following.length).toBe(3)
        expect(user.username).toBe('Michael')
        expect(user.following.includes('Vitalik')).toBe(true)
        expect(friends.length).toBe(3)
    })
    test('should return user named Ed', async () => {
        const { user, friends } = await userService.getUser('Ed')
        expect(user).toBe(null)
    })
})
