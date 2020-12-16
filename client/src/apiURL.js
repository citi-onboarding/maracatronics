const host = process.env.NODE_ENV;

export default {
    url: host === 'development' ? 'http://localhost:3001' : 'https://maracatronics.herokuapp.com',
}