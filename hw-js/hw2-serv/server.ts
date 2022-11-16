// import server from 'fastify'
const fastify = require('fastify')({ logger: true })

fastify.get('/', async ()=>{
    return "hi";
})

fastify.get('/users', async()=>{
    return JSON.stringify([{user:'mohammed', age:34, majur:'cs'},{user:'ali',age:50,majour:'IT'}]);
});

fastify.get('/profile/ali', async(request,respons)=>{
    return JSON.stringify([{uaseName:'ali', age:50,msg:'wellcome ali'}]);
})

fastify.get('/posts', async(request,respons)=>{
    return JSON.stringify([{postID:1,post:'fghjklghjk'},{postID:2,post:'fghjklghjk'},{postID:3,post:'fghjklghjk'},{postID:4,post:'fghjklghjk'}])
})
const start = async () => {
    try {
      await fastify.listen({ port: 3000 })
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()
