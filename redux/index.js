//createStore接收reducer 返回subscribe,dispatch,getState函数

export const createStore=(reducer)=>{
    //从reducer中获取state的初始值
    let curState
    if(reducer() || reducer()===0){
        curState=reducer()
    }
    let listeners=[]

    const subscribe=(cb)=>{
        listeners.push(cb)
    }

    const dispatch=(action)=>{
        curState=reducer(curState,action)
        //有变更，触发订阅
        listeners.forEach((cb)=>{
            cb()
        })
    }

    const getState=()=>{
        return curState
    }

}