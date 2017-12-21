import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { RichUtils } from 'draft-js'
import ToolBarBTn from '../../ToolBarBTn'

const Inline_STYLE = [
	{ label: 'bold', style: 'bold' },
	{ label: 'italic', style: 'italic' },
	{ label: 'underline', style: 'underline' },
];

export default class FontSize extends Component {
	static propTypes = {
		editorState: PropTypes.object.isRequired,
		onChange: PropTypes.func.isRequired,
	}
	onToggle = inlineStyle => {
		let { editorState, onChange } = this.props;
		onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle))
	}
	render() {
		let { editorState, config } = this.props;
		let currentStyle = editorState.getCurrentInlineStyle();
		return (
			<span className="Editor-toolbars">
				{
					Inline_STYLE.filter(item => config.options.includes(item.label)).map(type =>
						<ToolBarBTn
							key={type.label}
							active={currentStyle.has(type.style)}
							onToggle={this.onToggle}
							style={type.style}
						>
							{type.label}
						</ToolBarBTn>
					)
				}
			</span>
		)
	}
}