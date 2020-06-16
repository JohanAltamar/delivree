import {initialState} from "./redux/reducer";
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null){
            // console.log(initialState)
            return initialState;
        }
        return JSON.parse(serializedState)
    } catch (error) {
        return initialState
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState)
    } catch (error) {

    }
}

export const removeState = () => {
  try {
      localStorage.removeItem('state')
  } catch (e) {

  }
}
