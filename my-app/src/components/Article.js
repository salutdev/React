
import React, {Component} from 'react'

export class Article extends Component {

    text = "This is article text again"

    render() {
        return (
            <div style={{width: '100%', border: '1px solid red'}}>{ this.getArticleText() }</div>
        )
    }

    getArticleText() {

        return this.text
    }
}
