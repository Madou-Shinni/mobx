# react状态管理

## 技术湛

1. [x] react18
2. [x] mobx6

## 安装mobx

```bash
npm install --save mobx
npm install --save mobx-react-lite
```

## 目录结构

```bash
.          
├── App.jsx
├── assets
│   └── react.svg
├── index.css
├── main.jsx
└── pages
    ├── Home.jsx
    ├── cpn
    │   ├── Content.jsx
    │   └── Header.jsx
    └── store.js # 状态管理
```

## 最佳实践

> no provider 根据页面来写store，每个页面组件内写store.js，使用createContext创建上，useContext来获取

注意：组件需要使用 **observer()** 包裹才能共享state

**[store.js](src%2Fpages%2Fstore.js)**

```jsx
import {makeAutoObservable} from "mobx";
import {createContext} from "react";

class Store {
    // state
    count = 0

    constructor() {
        makeAutoObservable(this)
    }

    // actions
    increment() {
        console.log(1)
        this.count++
    }

    set(value) {
        this.count = value
    }

}

const store = new Store()
const context = createContext(store);

export {store,context}
```

**[Header.jsx](src%2Fpages%2Fcpn%2FHeader.jsx)**

```jsx
import {useContext} from "react";
import {context} from "../store.js";
import {observer} from "mobx-react-lite";
const Header = observer(() => {
    {/* 获取state */}
    const storeCtx = useContext(context)
    
    return <div style={{margin: '0 auto',width: '200px',height: '200px'}}>
        <h1>{storeCtx.count}</h1>
    </div>
})

export default Header
```

**[Content.jsx](src%2Fpages%2Fcpn%2FContent.jsx)**

```jsx
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {context} from "../store.js";

const Content = observer(() => {
    const storeCtx = useContext(context)
    return <div style={{width: '100%',height: '100%'}}>
        ......
            {/* 获取state */}
            {storeCtx.count}
            <span style={{
                marginLeft: '10px',
                padding: '5px 10px',
                borderRadius: '8px',
                background: '#e3e2e2',
                cursor: "pointer"
            }} 
                {/* 执行action */}
                onClick={() =>storeCtx.increment()}>+</span>
        ......
    </div>
})

export default Content
```



