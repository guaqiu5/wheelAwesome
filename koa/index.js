const Koa = require('koa');
const app = new Koa();

app.use(async(ctx,next)=>{
    const start = Date.now()
    await next();
    const end = Date.now() 
    console.log(`${ctx.url} 耗时${parseInt(end-start)}ms`)
})

app.use(async(ctx)=>{
    const expire = Date.now() + 50
    while(Date.now()<expire){
        ctx.body = {
            name:'HHHH'
        }
    }
})

app.use(ctx =>{
    ctx.body={
        name:`111`
    }
})

app.listen(3000,()=>{
    console.log('111')
})