import * as React from 'react'
export default function(Comp:any){
    return class extends React.Component {
        componentWillMount():void{
            console.time('logger')
        }
        componentDidMount():void{
            console.timeEnd('logger')
        }
        public render():React.ReactNode {
            return <Comp {...this.props}/>
        }
    }
}