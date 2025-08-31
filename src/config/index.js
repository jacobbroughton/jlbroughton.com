const dev = process.env.NODE_ENV !== 'production'

const server = dev ? 'http://localhost:3000' : 'http://localhost:3000' // 2nd one should be the production url

export default server