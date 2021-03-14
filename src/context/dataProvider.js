import { useState } from "react"
import axios from "axios"
import DataContext from "./dataContext"

function DataProvider({ children }) {
    const [datass, setdatass] = useState("")

    /* const cors = "https://cors-anywhere.herokuapp.com/" */
    axios.get(`https://mesverbes.herokuapp.com/api/verbs`)
        .then(response => setdatass(response.data))
        .catch(e => console.log(e.message))

    return (
        <DataContext.Provider value={{ datass }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider