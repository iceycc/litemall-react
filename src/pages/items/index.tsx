import * as React from 'react';
import LimTabBar from 'src/components/LimTabBar'

class Items extends React.Component<any,any>{
    public render(): React.ReactNode {
        return <div>
            Items
        </div>;
    }
}
export default LimTabBar('Tab2',Items)
