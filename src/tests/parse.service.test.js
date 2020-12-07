const parseService = require('../services/parse.service')
describe('Users service test', () => {
    test('should have 4 users in list and tweets', async () => {
        await parseService.loadTweets()
        const tweets = parseService.getLoadedTweets()
        const users = parseService.getLoadedUsers()
        const userVitalik = users.filter((user) => {
            user.username === 'Vitalik'
        })
        expect(users.length).toBe(4)
        expect(tweets.length).toBeGreaterThan(0)
        expect(userVitalik).not.toBeNull()
    })
})
