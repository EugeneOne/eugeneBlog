import React, { Component } from 'react'
import { Input, Tag, Tabs, List } from 'antd'
import { Link, browserHistory, withRouter } from 'react-router-dom'
import './homeside.scss'
import api from '@config/api'
import http from '@config/http'

const Search = Input.Search
const CheckableTag = Tag.CheckableTag
const TabPane = Tabs.TabPane
@withRouter
class Recent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTagId: 0,
            tags: [],
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
    // 获取所有标签
    getAllTags() {
        http(api.getAllTags).then(res => {
            this.setState({
                tags: res.data
            })
        })
    }
    componentDidMount() {
        this.getRecentArticle()
        this.getAllTags()
    }

    searchArticle = e => {
        console.log(e.target.value)
    }
    // 点击相关标签
    tagCheck(tagId, checked) {
        const { selectedTagId } = this.state
        console.log(tagId, checked)
        const nextSelectedTag = tagId
        console.log('You are interested in: ', nextSelectedTag)
        this.setState({ selectedTagId: nextSelectedTag })
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
        const { recentArticle, tags } = this.state
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
                            {/* <h6 style={{ marginRight: 8, display: 'inline' }}>
                                
                            </h6> */}
                            <CheckableTag
                                checked={this.state.selectedTagId === 0}
                                onChange={checked => this.tagCheck(0, checked)}
                            >
                                全部标签
                            </CheckableTag>
                            {tags.map(tag => (
                                <CheckableTag
                                    color="#aae4c4"
                                    key={tag.id}
                                    checked={
                                        this.state.selectedTagId === tag.id
                                    }
                                    onChange={checked =>
                                        this.tagCheck(tag.id, checked)
                                    }
                                >
                                    {tag.value}
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
