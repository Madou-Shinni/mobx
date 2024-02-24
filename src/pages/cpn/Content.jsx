import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {context} from "../store.js";

const Content = observer(() => {
    const storeCtx = useContext(context)
    return <div style={{width: '100%',height: '100%'}}>
        <div style={{margin: 'auto', width: '100px', height: '100px'}}>
            {storeCtx.count}
            <span style={{
                marginLeft: '10px',
                padding: '5px 10px',
                borderRadius: '8px',
                background: '#e3e2e2',
                cursor: "pointer"
            }} onClick={() =>storeCtx.increment()}>+</span>

            <div onClick={() => storeCtx.set(0)} style={{marginTop: '10px',borderRadius: '8px', background: '#e3d2d2', cursor: "pointer",textAlign: "center"}}>重置</div>
        </div>
    </div>
})

export default Content
