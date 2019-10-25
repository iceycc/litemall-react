import * as React from 'react'
import {TabBar} from 'antd-mobile';
import IconFont from 'src/components/IconFont'

const Tabs: Array<string> = ['Tab1', 'Tab2', 'Tab3', 'Tab4']
type TabType = 'Tab1' | 'Tab2' | 'Tab3' | 'Tab4'
interface StateType {
    selectedTab: TabType
    hidden: boolean
    fullScreen: boolean
    // [propName: string]: any
}

function LimTabBar(type: StateType['selectedTab'], Comp: any) {


    return class extends React.Component<any, StateType> {
        state = {
            selectedTab: type,
            hidden: false,
            fullScreen: true,
        };

        renderContent(pageText: any) {
            console.log(pageText);
            return <Comp {...this.props}/>
        }

        onPress = (type: TabType) => {
            this.setState({selectedTab: type})
            switch (type) {
                case Tabs[0]:
                    this.props.history.push('/home')
                    break;
                case Tabs[1]:
                    this.props.history.push('/items')
                    break;
                case Tabs[2]:
                    this.props.history.push('/order-cart')
                    break;
                case Tabs[3]:
                    this.props.history.push('/my')
                    break;
            }
        }

        render() {
            return (
                <div style={this.state.fullScreen ? {
                    position: 'fixed',
                    height: '100%',
                    width: '100%',
                    top: 0
                } : {height: '100%'}}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        hidden={this.state.hidden}
                    >
                        <TabBar.Item
                            title="精选"
                            key="Life"
                            icon={<IconFont icon="van-icon-compass-full"/>
                            }
                            selectedIcon={<IconFont icon="van-icon-compass-full" style={{color: '#ca4a43'}}/>
                            }
                            selected={this.state.selectedTab === Tabs[0]}
                            // badge={1}
                            onPress={this.onPress.bind(this, Tabs[0])}
                            data-seed="logId"
                        >
                            {this.renderContent('Life')}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={<IconFont icon="van-icon-class-full"/>
                            }
                            selectedIcon={<IconFont icon="van-icon-compass-full" style={{color: '#ca4a43'}}/>
                            }
                            title="分类"
                            key="Koubei"
                            // badge={'new'}
                            selected={this.state.selectedTab === Tabs[1]}
                            onPress={this.onPress.bind(this, Tabs[1])}

                            data-seed="logId1"
                        >
                            {this.renderContent('Koubei')}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={<IconFont icon="van-icon-cart-full"/>
                            }
                            selectedIcon={<IconFont icon="van-icon-cart-full" style={{color: '#ca4a43'}}/>
                            }
                            title="购物车"
                            key="Friend"
                            // dot
                            selected={this.state.selectedTab === Tabs[2]}
                            onPress={this.onPress.bind(this, Tabs[2])}

                        >
                            {this.renderContent('Friend')}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={<IconFont icon="van-icon-wode"/>
                            }
                            selectedIcon={<IconFont icon="van-icon-wode" style={{color: '#ca4a43'}}/>
                            }
                            title="我的"
                            key="my"
                            selected={this.state.selectedTab === Tabs[3]}
                            onPress={this.onPress.bind(this, Tabs[3])}

                        >
                            {this.renderContent('My')}
                        </TabBar.Item>
                    </TabBar>
                </div>
            );
        }
    }
}

export default LimTabBar
