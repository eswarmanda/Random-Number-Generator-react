import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => {
    console.log(`number generated`)
    return Math.ceil(Math.random() * 100)
  }

  isClicked = () => {
    const randomNumber = this.getRandomNumber()
    console.log(randomNumber)
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state
    // console.log(count)
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button className="button" type="button" onClick={this.isClicked}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
