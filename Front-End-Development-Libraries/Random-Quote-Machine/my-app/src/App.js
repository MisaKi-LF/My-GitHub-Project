import React from 'react';
import {
    TwitterOutlined,
    FacebookOutlined
} from '@ant-design/icons';
import { Space , Button } from 'antd';
import ReactDOM from 'react-dom';
import './App.scss';


export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="quote-box">
                <Text />
                <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
            </div>
        )
    }
}

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ['fear not that the life shall come to an end, but rather fear that it shall never have a beginning.','cease to struggle and you cease to live.','And gladly would learn , and gladly teach.','When one loves one\'s art no service seems too hard.','My success just evolved from working hard at the business at hand each day.'],
            name: ['j.h. newman','thomas carlyle','Chaucer , British poet','O. Henry, American novelist','Johnny Carson, Television Host'],
            textNumber: 0,
            nameNumber: 0,
            randomNumber: null
        }
        // Modify this point
        this.nextText = this.nextText.bind(this)
    }
    componentDidMount() {
        // 
        this.nextText();
    }
    nextText() {
        const random = parseInt(Math.random() * this.state.name.length)
        if (random === this.state.randomNumber) {
            return false
        }
        this.setState({
            textNumber: random,
            nameNumber: random,
            randomNumber: random
        })
    }
    render() {
        return (
            <div>
                <div id="text">
                    <p>{this.state.text[this.state.textNumber]}</p>
                </div>
                <div id="author">
                   <p>------{this.state.name[this.state.nameNumber]}</p>
                </div>
                <div className="Btn">
                    <ul id="tweet-quote">
                        <li><Space><a href="https://twitter.com/intent/tweet" target="_blank" ><TwitterOutlined /></a></Space></li>
                        <li><Space><a href="https://facebook.com/" target="_blank"><FacebookOutlined /></a></Space></li>
                    </ul>
                    <Button onClick={this.nextText} id="new-quote">new-quote</Button>
                </div>
            </div>
        );
    }
}
