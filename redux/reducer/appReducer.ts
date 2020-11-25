   import CONSTS from '../../constants/constants'
   interface initialState{
       post:any
   }
   const initialState={
      post:[]
        
       
   }
   
   
    export const appReducer=( state=initialState,action:any)=>{
            switch(action.type){
                case CONSTS.GET_REAGION:{
                    const regiondata=[...state.post,...action.post]
                    return{...state,post:regiondata}
                }
               default:{
                   return state;
                   
               }
            }
    }
    
    
