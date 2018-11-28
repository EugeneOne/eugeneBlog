import React from 'react'
import { Link, browserHistory } from 'react-router-dom'
import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class Header extends React.Component {
    state = {
        current: 'mail'
    }

    handleClick = e => {
        console.log('click ', e)
        this.setState(
            {
                current: e.key
            },
            () => {
                // browserHistory.push(e.key)
                // this.props.dispatch(
                //     updateTabList({
                //         title: e.item.props.name,
                //         content: '',
                //         key: e.key
                //     })
                // )
            }
        )
    }

    _handleClick = e => {
        console.log(e)
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="home">
                    <Link to="/home">
                        <Icon type="mail" />
                        Navigation One
                    </Link>
                </Menu.Item>
                <Menu.Item key="app">
                    <Icon type="appstore" />Navigation Two
                </Menu.Item>
                <SubMenu
                    title={
                        <span>
                            <Icon type="setting" />Navigation Three - Submenu
                        </span>
                    }
                >
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a
                        href="https://ant.design"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Navigation Four - Link
                    </a>
                </Menu.Item>
            </Menu>
        )
    }
}

// class App extends React.Component {
//     render() {
//         return <h3>123</h3>
//     }
// }

export default Header
