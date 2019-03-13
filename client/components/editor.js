import React, {Component} from 'react'

// import brace from 'brace'
import AceEditor from 'react-ace'

import 'brace/mode/jsx'
import 'brace/ext/searchbox'
import 'brace/mode/javascript'
import 'brace/snippets/javascript'
import 'brace/theme/monokai'
import 'brace/ext/language_tools'

export default class Editor extends Component {
  constructor() {
    super()
    this.state = {
      mode: 'javascript',
      theme: 'monokai',
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      fontSize: 14,
      // showGutter: true,
      showPrintMargin: true,
      highlightActiveLine: true,
      tabSize: 2,
      wrapEnabled: true
      //   width: '100%',
      //   height: '100%'
    }
  }

  render() {
    return (
      <div className="App">
        <AceEditor
          mode={this.state.mode}
          theme={this.state.theme}
          name="input"
          onChange={this.props.onChange}
          onSelectionChange={this.onSelectionChange}
          onCursorChange={this.onCursorChange}
          fontSize={this.state.fontSize}
          showPrintMargin={this.state.showPrintMargin}
          highlightActiveLine={this.state.highlightActiveLine}
          value={this.props.value}
          enableBasicAutocompletion={this.state.enableBasicAutocompletion}
          enableLiveAutocompletion={this.state.enableLiveAutocompletion}
          tabSize={this.state.tabSize}
          wrapEnabled={this.state.wrapEnabled}
        />
      </div>
    )
  }
}
