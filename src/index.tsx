import { AppContainer } from 'react-hot-loader';
import App from './App';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
const root =  document.getElementById('root') as HTMLElement

const render = (Component:any) =>{
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        root
    );
}
render(App)
if ((module as any).hot) {
    console.log((module as any).hot,'hot');
    (module as any).hot.accept('./App', () => {
        render(App)
    })
}
registerServiceWorker();
