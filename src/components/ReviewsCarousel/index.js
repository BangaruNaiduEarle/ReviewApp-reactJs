// Write your code here

import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {review: 0}

  createReview = reviewData => {
    const {imgUrl, username, companyName, description} = reviewData

    return (
      <div className="reviewItems">
        <img src={imgUrl} alt={username} />
        <p className="userName">{username}</p>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  afterReview = () => {
    const {review} = this.state
    const {reviewsList} = this.props

    if (review < reviewsList.length - 1) {
      this.setState(prevState => ({review: prevState.review + 1}))
    }
  }

  previousReview = () => {
    const {review} = this.state

    if (review > 0) {
      this.setState(prevState => ({review: prevState.review - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {review} = this.state
    const reviewData = reviewsList[review]

    return (
      <div className="mainBgContainer">
        <div className="reviewContainer">
          <h1 className="heading">Reviews</h1>
          <div className="itemsAlign">
            <button
              type="button"
              onClick={this.previousReview}
              className="button"
              // eslint-disable-next-line react/no-unknown-property
              testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            {this.createReview(reviewData)}
            <button
              type="button"
              className="button"
              onClick={this.afterReview}
              // eslint-disable-next-line react/no-unknown-property
              testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
