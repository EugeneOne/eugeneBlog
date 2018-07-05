import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import menuConfig from '@config/menu'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

@withRouter
class Nav extends React.Component {
    state = {
        current: ''
    }
    componentDidMount() {
        console.log(this.props)
    }
    _select = e => {
        this.setState(
            {
                current: e.key
            },
            () => {
                if (this.state != e.key) {
                    this.props.history.push(e.key)
                }
            }
        )
    }

    render() {
        return (
            <Menu
                onSelect={this._select}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                {menuConfig.map(
                    (item, i) =>
                        item.list && item.list.length > 0 ? (
                            ''
                        ) : (
                            <Menu.Item key={item.key}>
                                <span className={'font icon-' + item.icon} />
                                <span>{item.title}</span>
                            </Menu.Item>
                        )
                )}
            </Menu>
        )
    }
}

export default Nav
