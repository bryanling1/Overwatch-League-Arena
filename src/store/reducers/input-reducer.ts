
interface InitState{

}

interface ActionType{
    type: string;
}

const inputReducer = (state:InitState={}, action:ActionType) =>{
    switch(action.type){
        default:
            return state;
    }
}

export default inputReducer;