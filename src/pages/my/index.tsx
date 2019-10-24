import * as React from 'react';
import LimTabBar from 'src/components/LimTabBar'

class My extends React.Component<any,any>{
    public render(): React.ReactNode {
        return <div>
            My
        </div>;
    }
}
export default LimTabBar('Tab4',My)
