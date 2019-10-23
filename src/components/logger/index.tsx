import * as React from 'react'
export default class Logger extends React.Component {
    componentWillMount():void{
        console.time('logger')
    }
    componentDidMount():void{
        console.timeEnd('logger')
    }
    public render():React.ReactNode {
        return <div></div>
    }
}