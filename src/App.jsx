import { useState } from "react";


function App()
{
    const [count, setCount] = useState(0);

    return <div>
        {
            <CustomButtom count={count} setCount={setCount}/>
            // <CustomButtom count={count} setCount={setCount}/>
        }
    </div>
}

function CustomButtom(x)
{
    function onClickhandler()
    {
        x.setCount(x.count + 1)
    }
    return <div>
        <button onClick={onClickhandler}>Counter {x.count}</button>
    </div>
}

export default App;