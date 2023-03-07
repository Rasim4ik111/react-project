import React, {useMemo, useState} from "react";
import './styles/App.css'
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)
    console.log(cash)

    return (
        <div className={"app"}>
            <div style={{display: "flex"}}>
                <button>ADD CASH</button>
                <button>GET CASH</button>
            </div>
        </div>
    );
}


export default App;
