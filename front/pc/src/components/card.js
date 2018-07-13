import React from 'react'
import { Link, browserHistory } from 'react-router-dom'
import './card.less'
import PropsTypes from 'prop-types'

class Card extends React.Component {
    static propsTypes = {
        clickToDetail: PropsTypes.func
    }

    static defaultProps = {
        clickToDetail: () => {}
    }

    render() {
        console.log(this.props)
        return (
            <article className="card-item">
                <div className="card-inner">
                    <header className="card-header">
                        <h1
                            onClick={() =>
                                this.props.clickToDetail(this.props.id)
                            }
                        >
                            {this.props.title}
                        </h1>
                    </header>
                    <div className="card-content">
                        <p>{this.props.content}</p>
                        {this.props.isMore && (
                            <div className="card-more-link">查看更多</div>
                        )}
                    </div>

                    <footer className="card-footer" />
                </div>
            </article>
        )
    }
}

export default Card
