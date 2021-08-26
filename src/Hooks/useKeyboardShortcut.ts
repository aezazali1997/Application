/* import React,  {useCallback, useReducer, useEffect } from 'react'
type ActionType = {
  type :string,
  key:string,
  data?:{}
} 
type StateType = {
  data?:string[]
}

const keysReducer = (state:StateType, action:ActionType) => {
  switch (action.type) {
    case "set-key-down":
      const keydownState = { ...state, [action.key]: true };
      return keydownState;
    case "set-key-up":
      const keyUpState = { ...state, [action.key]: false };
      return keyUpState;
    case "reset-keys":
      const resetState = { ...action.data };
      return resetState;
    default:
      return state;
  }
};

export const useKeyboardShortcut = (callback:(keys:string[])=>void, shortcutKeys:string[]) => {
  if (!Array.isArray(shortcutKeys)) {  
      throw new Error('The first parameter must be shortcut Key');
  }
  if (!shortcutKeys.length) {
    throw new Error('One shortcut key must be present');
  }
  if (!callback && typeof callback !== 'function') {
    throw new Error('Second paramter must be a function');
  }
    const initialKeyMapping = shortcutKeys.reduce((currentKeys, key) => {
    currentKeys[key] = false;
    return currentKeys
  }, { })
  const [keys, setKeys] = useReducer(keysReducer, initialKeyMapping)
  const keyDownListener = useCallback((keyDownEvent) => {
    const { key, target, repeat } = keyDownEvent;
    if (repeat) return;
    if (!shortcutKeys.includes(key)) return;
    if (!keys[key]) {
      setKeys({
        type: 'set-key-down',
        key
      })
    }
  },
    [shortcutKeys, keys],
  )
  const keyUpListener = useCallback((keyDownEvent) => {
    const { key, target, repeat } = keyDownEvent;
    if (repeat) return;
    if (!shortcutKeys.includes(key)) return;
    if (!keys[key]) {
      setKeys({
        type: 'set-key-up',
        key
      })
    }
  },
    [shortcutKeys, keys],
  )


  useEffect(() => {
    window.addEventListener('keydown', keyDownListener, true)
    return () => window.removeEventListener('keydown', keyDownListener, true)
  }, [keyDownListener]);
  useEffect(() => {
    window.addEventListener('keyup', keyUpListener, true)
    return () => window.addEventListener('keyup', keyUpListener, true)
  }, [keyUpListener])
  useEffect(() => {
    if (!Object.values(keys).filter(value => !value).length) {
      callback(keys)
    }
  }, [callback, keys])
}
 */
import React from 'react'
