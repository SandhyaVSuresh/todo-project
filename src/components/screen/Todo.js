import React from "react";
import style from "styled-components";

const Heading = style.h1`
font-size: 40px;
font-weight:800;
color:#fff;
margin-bottom:20px;
`;
const Inputcontent = style.input`
font-size:20px;
background:transparent;
padding:5px;
border:none;
color:#fff;
outline:none;
`;
const Additem = style.button`
padding:10px;
font-size:13px;
background-color:green;
color:#fff;
border-radius:50px;
border:none;
cursor:pointer;
`;
const Removeitems = style.button`
padding:10px;
font-size:13px;
background-color:red;
color:#fff;
border-radius:50px;
border:none;
cursor:pointer;
margin-left:10px;
`;
const Background = style.div`
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
background-color:#200020;
padding: 7px10px;
align-items:center;
justify-content:center;
`;
const Todoitems = style.ul`
list-style:none;
font-size:15px;
color:#fff;
`;
const Listitems = style.li`
font-size:15px;
display:flex;
color: #fff;
align-items:center;
margin:10px 0;
`;

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      input: "",
    };
  }
  removeItem = (id) => {
    let new_items = this.state.items.filter((item) => item.id !== id);
    this.setState({items: new_items});
  };

  renderItems = () => {
    return this.state.items.map((item) => (
      <Listitems key={item.id}>
        {item.title}
        <Removeitems onClick={() => this.removeItem(item.id)}>
          Delete
        </Removeitems>
      </Listitems>
    ));
  };
  updateItem = () => {
    let new_item = {
      id: this.state.items.length,
      title: this.state.input,
    };
    this.setState({
      items: [...this.state.items, new_item],
    });
  };
  render() {
    return (
      <>
        <Background>
          <Heading>To Do List</Heading>
          
          <Inputcontent
            type="text"
            placeholder="Add Item"
            onChange={(e) => this.setState({ input: e.target.value })}
            value={this.state.input}
          />
          <Additem onClick={this.updateItem}>Add Now</Additem>
          <Todoitems>{this.renderItems()}</Todoitems>
        </Background>
      </>
    );
  }
}

export default Todo;
