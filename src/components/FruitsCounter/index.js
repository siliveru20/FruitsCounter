// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onclickMango = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onclickBanana = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }
  render() {
    const {count1} = this.state
    const {count2} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Bob ate 0 mangoes 0 bananas</h1>
          <div className="d-flex flex-row justify-content-center">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button onClick={this.onclickMango} className="btn1">
                Eat Mango
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button onClick={this.onclickBanana} className="btn2">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
