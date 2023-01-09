import {Component} from 'react'
import ReviewsCarousel from './components/ReviewsCarousel'

import './App.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

const value = reviewsList.length

class App extends Component {
  state = {currentCompany: 0, length: value}

  onIncrease = () => {
    const {currentCompany, length} = this.state

    if (currentCompany < length) {
      this.setState(prevState => ({
        currentCompany: prevState.currentCompany + 1,
      }))
    } else {
      this.setState({currentCompany: length})
    }
  }

  onDecrease = () => {
    const {currentCompany} = this.state

    if (currentCompany >= 0) {
      this.setState(prevState => ({
        currentCompany: prevState.currentCompany - 1,
      }))
    } else {
      this.setState({currentCompany: 0})
    }
  }

  render() {
    const {currentCompany} = this.state

    const filteredList = reviewsList[currentCompany]

    return (
      <div className="main-image">
        <h1 className="main-heading">Reviews</h1>
        <div className="sub-carousel-div">
          <button
            data-testid="leftArrow"
            onClick={this.onDecrease}
            className="button"
            type="button"
          >
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="carousel-div">
            <ReviewsCarousel eachCompany={filteredList} />
          </div>
          <button
            data-testid="rightArrow"
            onClick={this.onIncrease}
            className="button"
            type="button"
          >
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default App
