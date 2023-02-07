import "./App.css";
import React from "react";

class App extends React.Component {
  quoteLength = 0;
  textObjArr = [
    {
      text: "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
      author: "Ann Landers",
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Do what you can, where you are, with what you have.",
      author: "Teddy Roosevelt",
    },
    {
      text: "The question isn't who is going to let me; it's who is going to stop me.",
      author: "Ayn Rand",
    },
    {
      text: "We become what we think about.",
      author: "Earl Nightingale",
    },
    {
      text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      author: "Joshua J. Marine",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      author: '',
    }
    this.quoteLength = this.textObjArr.length;
    this.nextQuote = this.nextQuote.bind(this);
    
  }
  componentDidMount(){
    this.nextQuote();
  }
  nextQuote(){
    const randomIndex = Math.floor(Math.random() * this.quoteLength);
    
    const nextQuote = this.textObjArr[randomIndex];
    this.setState({
      text: nextQuote.text,
      author: nextQuote.author
    })
  }
  randomColor(){
    const randomColor1 = Math.floor(Math.random() * 255);
    const randomColor2 = Math.floor(Math.random() * 255);
    const randomColor3 = Math.floor(Math.random() * 255);
    const randomSonuc = 'rgb('+randomColor1+','+randomColor2+', '+randomColor3+')';
    return randomSonuc;
  }
  tweetQuote(){
    const tweet = 'https://twitter.com/intent/tweet?text='+ encodeURI(this.state.text) +'&via=hatchsteph';
    return tweet;
  }

  render() {
    const randomResult = this.randomColor();
    return (
      <div className="App" style={{backgroundColor: randomResult}} >
        <div className="wrapper" >
          <div id="quote-box">
            <div id="text" style={{color: randomResult}} >" {this.state.text}</div>
            <div id="author" style={{color: randomResult}}> - {this.state.author}</div>
            <div className="buttons row mt-2">
              <div className="col-sm">
                <a style={{backgroundColor: randomResult}}
                  className="button"
                  id="tweet-quote"
                  title="Tweet this quote!"
                  href={this.tweetQuote()}
                >
                  Tweet
                </a>
              </div>
              <div className="col-sm text-right">
                <button style={{backgroundColor: randomResult}} onClick={this.nextQuote}  className="button" id="new-quote">
                  New Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
