export const saveState = (state, stateName) => {
  if(typeof window !== "undefined") {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(stateName, serializedState)
  }
}

export const loadState = (stateName) => {
  try {
    if(typeof window !== "undefined") {
      const serializedState = localStorage.getItem(stateName)
      if (serializedState === null) {
        return undefined
      }
      const state = JSON.parse(serializedState)
      return state
    }
  } catch (err) {
    console.log(err)
    return undefined
  }
}