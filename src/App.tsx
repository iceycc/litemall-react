import * as React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import routers from './router/index'
import './App.scss';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
const Store = { // 模拟全局仓库
    theme: 'dark',
    toggle: () => { }, //向上下文设定一个回调方法
}
// 新的context
export const ThemeContext = React.createContext(Store);
class App extends React.Component {
    state = Store;
    public render() {
        return (
            <Router>
                <React.Suspense fallback={<div />}>
                    <Switch>
                        <Redirect exact={true} from='/' to='/home' />
                        <ThemeContext.Provider value={this.state}>
                            {
                                routers && routers.map((item, ind) => {
                                    return <Route exact={item.exact} key={ind} path={item.path} render={(location) => {
                                        return <item.component {...location} />
                                    }} />
                                })
                            }
                        </ThemeContext.Provider>

                    </Switch>
                </React.Suspense>
            </Router>
        );
    }
}

export default App;
