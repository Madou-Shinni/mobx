import {useContext} from "react";
import {context} from "../store.js";
import {observer} from "mobx-react-lite";
const Header = observer(() => {
    const storeCtx = useContext(context)
    return <div style={{margin: '0 auto',width: '200px',height: '200px'}}>
        <h1>{storeCtx.count}</h1>
    </div>
})

export default Header
