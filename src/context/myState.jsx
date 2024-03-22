import myContext from './myContext'

function MyState({children}){
    const name = "kushal@thingslinker"
    return (
        <myContext.Provider value={name}>
            {children}
        </myContext.Provider>
    )
}

export default MyState;