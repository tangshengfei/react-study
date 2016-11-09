import React from 'react';
import {Button, Icon, Menu, Dropdown, Row, Col} from 'antd';
import 'antd/dist/antd.css';


function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">下拉菜单1</Menu.Item>
    <Menu.Item key="2">下拉菜单2</Menu.Item>
    <Menu.Item key="3">下拉菜单3</Menu.Item>
    <Menu.Item key="4">下拉菜单4</Menu.Item>
  </Menu>
);


var App = React.createClass({
  render: function(){
    return (
      <div>
        <Row gutter={16}>
          <Col span={5} offset={3} push={10} className="gutter-row">
            <Button type='primary'><Icon type='shrink'/>按钮</Button>
            <Dropdown overlay={menu}>
              <Button type='ghost' loading={this.state.loading} onClick={this.loadingHandler}>
                more<Icon type='down'/>
              </Button>
            </Dropdown>
          </Col>
          <Col span={5} offset={2} pull={7} className="gutter-row">
            <Button type='primary'><Icon type='shrink'/>按钮</Button>
            <Dropdown overlay={menu}>
              <Button type='ghost'>
                more<Icon type='down'/>
              </Button>
            </Dropdown>
          </Col>
        </Row>
      </div>
    )
  },
	showModel: function(){
		alert(1);
	},
	getInitialState: function(){
		return {
		  loading:false
		}
	},
	loadingHandler: function () {
		this.setState({
		  loading:true
		});
	  var  that = this;
	  setTimeout(function () {
			that.setState({loading:false}) ;
	  }, 3000);
	},
	componentDidMount: function () {
		this.setState({
			loading:true
		})
	}
	

})























export default App;
