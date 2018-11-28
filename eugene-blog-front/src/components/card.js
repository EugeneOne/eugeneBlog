import React from 'react'
import { Link, browserHistory } from 'react-router-dom'
import './card.scss'
import PropsTypes from 'prop-types'
import marked from 'marked'
import highlight from 'highlight.js'
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
		data: {}
	}

	getContent = content => {
		let markContent = marked(content)
		return {
			__html: markContent
		}
	}

	render() {
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

					<div className="card_content">
						<div
							className={`content_txt ${
								this.props.isFold ? 'content--flod' : ''
							}`}
							dangerouslySetInnerHTML={this.getContent(
								this.props.content
							)}
						/>
					</div>
					{this.props.isMore && (
						<div className="card_more_link">查看更多</div>
					)}

					<footer className="card-footer" />
				</div>
			</article>
		)
	}
}

export default Card
