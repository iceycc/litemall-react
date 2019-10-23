import * as React from 'react';
import {HashRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import routers from './router/index'
import './App.scss';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

class App extends React.Component {
    public render() {
        return (
            <Router>
                <React.Suspense fallback={<div/>}>
                    <Switch>
                        <Redirect exact={true} from='/' to='/home'/>
                        {
                            routers && routers.map((item,ind)=>{
                                return <Route exact={item.exact} key={ind} path={item.path} render={(location)=>{
                                    return <item.component {...location}/>
                                }}/>
                            })
                        }
                    </Switch>
                </React.Suspense>
            </Router>
        );
    }
}

export default App;
