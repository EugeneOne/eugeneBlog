import React from 'react'
import { Link, browserHistory } from 'react-router-dom'
import './card.scss'
import PropsTypes from 'prop-types'
import marked from 'marked'
import highlight from 'highlight.js'
import { Input, Button } from 'antd'
import Editcard from '@components/Editcard'
import api from '@config/api'
import http from '@config/http'

marked.setOptions({
    highlight: function(code) {
        return highlight.highlightAuto(code).value
    }
})

class Card extends React.Component {
    static propsTypes = {
        clickToDetail: PropsTypes.func
    }

    static defaultProps = {
        clickToDetail: () => {}
    }

    state = {
        data: {},
        isEdit: false
    }

    getContent = content => {
        let markContent = marked(content)
        return {
            __html: markContent
        }
    }
    deletArticle = id => {
        let data = {
            id: id
        }
        http.post(api.deleteArticle, data)
    }

    render() {
        return (
            <article className="card-item">
                {!this.state.isEdit && (
                    <div className="card-inner">
                        {/* 1234{this.state.data} */}
                        <header className="card-header">
                            <h1
                                onClick={() =>
                                    this.props.clickToDetail(this.props.id)
                                }
                            >
                                {this.props.title}
                            </h1>
                            {!this.props.isMore && (
                                <div>
                                    <svg
                                        className="icon edit-icon"
                                        style={{ marginRight: '20px' }}
                                        aria-hidden="true"
                                        onClick={() =>
                                            this.deletArticle(this.props.id)
                                        }
                                    >
                                        <use xlinkHref="#icon-lajitong" />
                                    </svg>
                                    <svg
                                        className="icon edit-icon"
                                        aria-hidden="true"
                                        onClick={() =>
                                            this.setState({
                                                isEdit: true
                                            })
                                        }
                                    >
                                        <use xlinkHref="#icon-bianji" />
                                    </svg>
                                </div>
                            )}
                        </header>
                        {/* <div className="card_content">
                            <div
                                className={`content_txt ${
                                    this.props.isFold ? 'content--flod' : ''
                                }`}
                                dangerouslySetInnerHTML={this.getContent(
                                    this.props.content
                                )}
                            />
                        </div> */}
                        {this.props.isMore && (
                            <div className="card_more_link">查看更多</div>
                        )}
                        <footer className="card-footer" />
                    </div>
                )}
                {this.state.isEdit && (
                    <Editcard
                        id={this.props.id}
                        title={this.props.title}
                        content={this.props.content}
                        clickcancel={() => {
                            this.setState({
                                isEdit: false
                            })
                        }}
                    />
                )}
            </article>
        )
    }
}

export default Card
