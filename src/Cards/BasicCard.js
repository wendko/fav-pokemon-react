import React from 'react'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class BasicCard extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      visible: false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }

  toggleVisibility(){
    this.setState({
      visible:!this.state.visible});
    console.log(this.state.visible);
  }

  render() {
      return (<div>
        <Button color={this.props.buttonColor} onClick={this.toggleVisibility}>{this.props.buttonTitle}</Button>
        {this.state.visible && this.props.content}
       </div>
      );
  }
}

export default BasicCard;
