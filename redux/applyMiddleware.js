import {compose} from '../compose'

export const applyMiddleware=(...middlewares)=>{
    return (createStore)=>(reducer)=>{
        const store=createStore(reducer)
        let dispatch=store.dispatch
        let getState=store.getState
        let reduxApi={
            dispatch,
            getState
        }
        const middlewareChain=middlewares.map((middleware)=>middleware(reduxApi))

        //compose组合middleware且执行
        compose(...middlewareChain)


        return {...store,...dispatch}
    }
}