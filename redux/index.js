//createStore接收reducer 返回subscribe,dispatch,getState函数

export const createStore=(reducer,enhancer)=>{
    if(enhancer){
        return enhancer(createStore)(reducer)
    }
    let curState
    let listeners=[]

    const subscribe=(cb)=>{
        listeners.push(cb)
        return ()=>{
            //订阅和取消订阅成对出现
            const index=listeners.indexOf(cb)
            listeners.splice(index,1)
        }
    }

    //redux 只能接受plain object的action 对于其他类型 需要借助于中间件
    const dispatch=(action)=>{
        curState=reducer(curState,action)
        //state有变更，触发订阅
        listeners.forEach((cb)=>{
            cb()
        })
    }

    const getState=()=>{
        return curState
    }

    //获取state初始值
    dispatch({type:`${Date.now()}__MYREDUX`})

    return {
        subscribe,
        dispatch,
        getState
    }
}