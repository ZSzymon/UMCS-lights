import React, {useReducer} from 'react'
import axios from 'axios'

import CodeContext from './CodeContext'
import CodeReducer from './CodeReducer'

import {GET_CODES, SET_CODE} from "../types"

const CodeState = (props) => {
  let initialState = {
    code: '' +
      'async function loop() {\n' +
      '\t// Your code goes here\n' +
      '\tawait sleep(46);\n' +
      '\tNextFrame();\n' +
      '}',
    codes: [],
  }

  const [state, dispatch] = useReducer(CodeReducer, initialState)

  const setCode = (code) => {
    dispatch({type: SET_CODE, payload: code})
  }

  const getCodes = async () => {
    try {
      const response = await axios.get('/api/codes/')
      console.log(response.data)
      dispatch({type: GET_CODES, payload: response.data})
    } catch (err) {
      console.log(err)
    }
  }

  const submitCode = async (formData) => {
    try {
      console.log(formData)
      const data = {...formData, 'code': state.code}
      const response = await axios.post('/api/codes/', data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <CodeContext.Provider
      displayName='CodeContext'
      value={{
        code: state.code,
        codes: state.codes,
        setCode,
        getCodes,
        submitCode,
      }}
    >
      {props.children}
    </CodeContext.Provider>
  )
};

export default CodeState