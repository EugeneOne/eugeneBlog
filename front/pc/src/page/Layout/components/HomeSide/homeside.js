import React, { Component } from 'react'
import { Input, Tag, Tabs, List } from 'antd'
import { Link, browserHistory, withRouter } from 'react-router-dom'
import './homeside.scss'
import api from '@config/api'
import http from '@config/http'

const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports']
const Search = Input.Search
const CheckableTag = Tag.CheckableTag
const TabPane = Tabs.TabPane
@withRouter
class Recent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTag: '',
            recentArticle: []
        }
    }
    // 获取最新文章
    getRecentArticle() {
        http(api.getAllArticle, {
            params: {
                num: 10
            }
        }).then(res => {
            this.setState({
                recentArticle: res.data
            })
        })
    }
    componentDidMount() {
        this.getRecentArticle()
    }

    searchArticle = e => {
        console.log(e.target.value)
    }
    // 点击相关标签
    tagCheck(tag, checked) {
        const { selectedTag } = this.state
        console.log(tag, checked)
        const nextSelectedTag = tag
        console.log('You are interested in: ', nextSelectedTag)
        this.setState({ selectedTag: nextSelectedTag })
    }
    // 切换最近更新
    tagRecent = e => {}
    // 跳转到详情页
    clickToDetail = value => {
        console.log(value)
        // this.props.history.push({
        //     pathname: '/article/' + value
        // })
    }
    render() {
        const { recentArticle } = this.state
        return (
            <aside
                className={'home_side-profile f-right ' + this.props.propsClass}
            >
                <div className="home_side-profile-content">
                    <Search
                        placeholder="input search text"
                        onSearch={this.searchArticle}
                        enterButton
                    />
                    <div className="home_side-profile-tag-box">
                        <div
                            className="home_side-profile-tag_title"
                            style={{ margin: '10px 0' }}
                        >
                            相关标签
                        </div>
                        <div className="home_side-profile-tag-box">
                            <h6 style={{ marginRight: 8, display: 'inline' }}>
                                全部标签:
                            </h6>
                            {tagsFromServer.map(tag => (
                                <CheckableTag
                                    key={tag}
                                    checked={this.state.selectedTag === tag}
                                    onChange={checked =>
                                        this.tagCheck(tag, checked)
                                    }
                                >
                                    {tag}
                                </CheckableTag>
                            ))}
                        </div>
                    </div>
                    <div className="home_side-profile-recent-box">
                        <Tabs defaultActiveKey="1" onChange={this.tagRecent}>
                            <TabPane tab="Tab 1" key="1">
                                <List
                                    itemLayout="vertical"
                                    bordered
                                    dataSource={recentArticle}
                                    style={{ cursor: 'pointer' }}
                                    renderItem={item => (
                                        <List.Item key={item.title}>
                                            <List.Item.Meta
                                                title={
                                                    <a
                                                        href={
                                                            '#/article/' +
                                                            item.id
                                                        }
                                                        target="_blank"
                                                    >
                                                        {item.title}
                                                    </a>
                                                }
                                            />
                                            {/* {item.title} */}
                                        </List.Item>
                                    )}
                                />
                            </TabPane>
                            <TabPane tab="Tab 2" key="2">
                                <List
                                    itemLayout="vertical"
                                    bordered
                                    dataSource={recentArticle}
                                    style={{ cursor: 'pointer' }}
                                    renderItem={item => (
                                        <List.Item key={item.title}>
                                            {item.title}
                                        </List.Item>
                                    )}
                                />
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </aside>
        )
    }
}

export default Recent
