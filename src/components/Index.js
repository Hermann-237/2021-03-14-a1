import React, { useContext } from "react"
import SideLeft from "./SideLeft"
import SideRight from "./SideRight"
import SideCenter from "./SideCenter"
import DataContext from "../context/dataContext"


function Index(props) {
    const { datass } = useContext(DataContext)
    console.log("voici le datass", datass)

    return (
        <div>
            <div className="row d-flex">

                <SideLeft />

                <SideCenter />
                <SideRight />
            </div>


        </div>
    )
}

export default Index
