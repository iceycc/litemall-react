import * as React from "react";
import { query } from "src/utils/tools";
class CateGory extends React.Component<any, any> {
  state = {
    id: ""
  };
  componentDidMount() {
    let { id }: any = query() || {};
    console.log(id);
    this.setState({
      id
    })
  }
  public render(): React.ReactNode {
    let {id} = this.state
    return <div>CateGory: {id}</div>;
  }
}
export default CateGory;
