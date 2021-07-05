import React,{Component} from 'react';
import marked from 'marked';
import "./MyEditor.css";
const sampleText = '# Title\n## Sub-Title \n### Deeper title \n \n Paragraphs are separated\n by an empty line.\n\n Leave two spaces at the end of a line\n to go to the line.\n\n Attributs: *italic*, **bold**, \n`monospace`, ~~striped~~.\n\n List:\n\n * apples\n * oranges\n * pears\n\n Numbered list:\n\n 1. tofu\n 2. mushrooms\n 3. bread\n\n Link with placeholder text: *[Medium](https://www.medium.com)* \n\n Simple link: https://www.medium.com/ \n\n Code: ```\n console.log("Hello folks! I hoped you enjoyed this quick tutorial. Thanks for reading."); \n``` '

class MyEditor extends Component {
    state = {
      text: sampleText
    }
    renderText = text => {
        const __html = marked(text, { sanitize: true })
        return { __html }
      }
    handleChange = event => {
      const text = event.target.value
      this.setState({ text })
    }
    render () {
        return (
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
              <textarea
                    onChange={this.handleChange}
                    value={this.state.text}
                    className='form-control'
                    rows='35' />
              </div>
              <div className='col-sm-6'>
                 <div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
              </div>
            </div>
          </div>
        )
    }
}

export default MyEditor;