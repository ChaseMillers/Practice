import React from 'react'

const Context = React.createContext({
    fun: () => {},
    noFun: () => {},
    state: {},
})

export default Context