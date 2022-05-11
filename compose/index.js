


export const compose=(...funcs)=>{
    if(funcs.length===0) return (arg)=>arg

    return funcs.reduce((accum,func)=>(...args)=>accum(func(...args)))
}

//test
const a=(arg)=>{console.log(arg,'a');return arg}
const b=(arg)=>{console.log(arg,'b');return arg}

const c=(arg)=>{console.log(arg,'c');return arg}

compose(a,b,c)('COMPOSE')

//reducer就是一个纯函数，接受旧的state和action 返回新的state
