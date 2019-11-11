import * as React from "react";
import "./index.scss";

interface Props {
  tabList: Array<Record<string, any>>;
  tabCallback: any;
}
interface State {
  data: Array<Record<string, any>>;
  urlbg: string;
  currentIndex: string;
  desc: string;
}
export default class Tabs extends React.Component<Props, State> {
  state = {
    data: [],
    currentIndex: "",
    urlbg: "",
    desc: ""
  };
  public componentDidMount() {
    this.setState({
      data: this.props.tabList,
      currentIndex: this.props.tabList[0].id
    });
  }

  tabClick = (id: string | number, desc: string, picUrl: string) => {
    this.setState({
      currentIndex: id + "",
      urlbg: picUrl,
      desc: desc
    });
    this.props.tabCallback(id, picUrl, desc);
  };
  public render(): React.ReactNode {
    const { data, currentIndex } = this.state;
    return (
      <div className="tabsWrap">
        <div className="tabsLeft">
          <ul className="tabsUl">
            {data.length &&
              data.map(({ id, name, desc, picUrl }) => {
                return (
                  <li
                    key={id}
                    className={`${currentIndex == id ? "selected " : ""}tabli`}
                    onClick={this.tabClick.bind(this, id, desc, picUrl)}
                  >
                    {name}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="tabsRight">
          {this.props.children}
        </div>
      </div>
    );
  }
}
