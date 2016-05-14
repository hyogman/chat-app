
import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;
//message is broken and getting google pic
class Message extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ListItem
        leftAvatar={<Avatar src={this.props.message.profilePic} />}
      >{this.props.message.message}</ListItem>
    );
  }
}

export default Message;