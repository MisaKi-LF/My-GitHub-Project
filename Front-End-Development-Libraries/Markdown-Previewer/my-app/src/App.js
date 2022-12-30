import React from "react";
import './App.scss';
import { marked } from "marked";

export class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          default : "# Welcome to my React Markdown Previewer!\n" +
              "\n" +
              "## This is a sub-heading...\n" +
              "### And here's some other cool stuff:\n" +
              "\n" +
              "Heres some code, `<div></div>`, between 2 backticks.\n" +
              "\n" +
              "```\n" +
              "// this is multi-line code:\n" +
              "\n" +
              "function anotherExample(firstLine, lastLine) {\n" +
              "  if (firstLine == '```' && lastLine == '```') {\n" +
              "    return multiLineCode;\n" +
              "  }\n" +
              "}\n" +
              "```\n" +
              "\n" +
              "You can also make text **bold**... whoa!\n" +
              "Or _italic_.\n" +
              "Or... wait for it... **_both!_**\n" +
              "And feel free to go crazy ~~crossing stuff out~~.\n" +
              "\n" +
              "There's also [links](https://www.freecodecamp.org), and\n" +
              "> Block Quotes!\n" +
              "\n" +
              "And if you want to get really crazy, even tables:\n" +
              "\n" +
              "Wild Header | Crazy Header | Another Header?\n" +
              "------------ | ------------- | -------------\n" +
              "Your content can | be here, and it | can be here....\n" +
              "And here. | Okay. | I think we get it.\n" +
              "\n" +
              "- And of course there are lists.\n" +
              "  - Some are bulleted.\n" +
              "     - With different indentation levels.\n" +
              "        - That look like this.\n" +
              "\n" +
              "\n" +
              "1. And there are numbered lists too.\n" +
              "1. Use just 1s if you want!\n" +
              "1. And last but not least, let's not forget embedded images:\n" +
              "\n" +
              "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
      }
  }
  render() {
      return (
          <div className="body">
              <Editor default={this.state.default} />
          </div>
      )
  }
}
class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.default
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
        // console.log(this.state.value)
    }
    render() {
        return(
            <div>
                <textarea id="editor" value={this.state.value} onChange={this.handleChange}>

                </textarea>
                <Text value={this.state.value} />
            </div>
        )
    }
}
class Text extends React.Component {
    constructor(props) {
        super(props);
        this.getMarkdownText = this.getMarkdownText.bind(this)
    }
    getMarkdownText() {
        const value = this.props.value;
        let rawMarkup = marked.parse(value);
        return {__html: rawMarkup}
    }
    render() {
        return (
            <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()}>

            </div>
        )
    }
}