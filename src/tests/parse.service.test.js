const parseService = require('../services/parse.service')
describe('Users service test', () => {
    test('should have 4 users in list and tweets', async () => {
        await parseService.loadTweets()
        const tweets = parseService.getLoadedTweets();
        const users = parseService.getLoadedUsers();
        console.log(users);
  
    })
})
