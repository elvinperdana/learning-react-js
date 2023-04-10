import React, {useEffect, useState} from "react";
import Introduction from "./component/introduction";
import Profile from "./component/profile";

function App() {
    // variable getData is a getter, variable setData is a setter
    const [getData, setData] = useState(1)
    const [getDataLambo, setDataLambo] = useState(1)

    useEffect(() => {
        if (getData%5 == 0){
            setDataLambo((data) => data + 1)
        }
    }, [getData]) // '[]' is make the function running just 1 time

    return (
        <>
            {/*lamborghini will increase every 5 ferrari*/}
            <h5>I Have {getDataLambo} Lamborghini</h5>
            <h1>I Have {getData} Ferrari</h1>
            <button onClick={() => setData((prev) => prev + 1 )}>Add Ferrari</button>
            {getData > 1 ? <button onClick={() => setData((prev) => prev - 1 )}>Decrease Ferrari</button> : ''}
        </>
    );
}

export default App;
