// Write your code here
import {Component} from 'react'
// import {useState} from 'react'
import './index.css'

// const ReviewsCarousel = props => {
//   const [activeReviewIndex, setActiveReviewIndex] = useState(0)
//   const {reviewsList} = props

//   const onClickLeftArrow = () => {
//     if (activeReviewIndex < reviewsList.length - 1) {
//       setActiveReviewIndex(prev => prev + 1)
//     }
//     console.log('LEft')
//   }

//   const onClickRightArrow = () => {
//     if (activeReviewIndex > 0) {
//       setActiveReviewIndex(prev => prev - 1)
//     }
//     console.log('RIGHT')
//   }

//   const renderActiveReview = review => {
//     const {imgUrl, username, companyName, description} = review
//     return (
//       <div className="review">
//         <img src={imgUrl} alt={username} className="img" />
//         <p className="username">{username}</p>
//         <p className="companyName">{companyName}</p>
//         <p className="description">{description}</p>
//       </div>
//     )
//   }

//   const currentReviewDetails = renderActiveReview(
//     reviewsList[activeReviewIndex],
//   )
//   console.log(reviewsList[activeReviewIndex])

//   return (
//     <div className="app-container">
//       <h1 className="heading">Reviews</h1>
//       <div className="carousel-container">
//         <button
//           type="button"
//           onClick={onClickLeftArrow}
//           data-testid="leftArrow"
//           className="arrow-button"
//         >
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
//             alt="left arrow"
//           />
//         </button>
//         {renderActiveReview(currentReviewDetails)}
//         <button
//           type="button"
//           onClick={onClickRightArrow}
//           data-testid="rightArrow"
//           className="arrow-button"
//         >
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
//             alt="right arrow"
//           />
//         </button>
//       </div>
//     </div>
//   )
// }

// class ReviewsCarousel extends Component {
//   state = {
//     activeReviewIndex: 0,
//   }

//   onClickRightArrow = () => {
//     const {activeReviewIndex} = this.state
//     const {reviewsList} = this.props

//     if (activeReviewIndex < reviewsList.length - 1) {
//       this.setState(prev => ({
//         activeReviewIndex: prev.activeReviewIndex + 1,
//       }))
//     }
//   }

//   renderActiveReview = review => {
// const {imgUrl, username, companyName, description} = review
// return (
//   <div className="review">
//     <img src={imgUrl} alt={username} className="img" />
//     <p className="username">{username}</p>
//     <p className="companyName">{companyName}</p>
//     <p className="description">{description}</p>
//   </div>
// )
//   }

//   onClickRightArrow = () => {
//     const {activeReviewIndex} = this.state
//     if (activeReviewIndex > 0) {
//       this.setState(prev => ({
//         activeReviewIndex: prev.activeReviewIndex - 1,
//       }))
//     }
//   }

//   render() {
//     const {activeReviewIndex} = this.state
//     const {reviewsList} = this.props
//     const currentReviewDetails = reviewsList[activeReviewIndex]
//     return (
//   <div className="app-container">
//     <h1 className="heading">Reviews</h1>
//     <div className="carousel-container">
//       <button
//         type="button"
//         onClick={this.onClickLeftArrow}
//         data-testid="leftArrow"
//         className="arrow-button"
//       >
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
//           alt="left arrow"
//         />
//       </button>
//       {this.renderActiveReview(currentReviewDetails)}
//       <button
//         type="button"
//         onClick={this.onClickRightArrow}
//         data-testid="rightArrow"
//         className="arrow-button"
//       >
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
//           alt="right arrow"
//         />
//       </button>
//     </div>
//   </div>
//     )
//   }
// }
class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review">
        <img src={imgUrl} alt={username} className="img" />
        <p className="username">{username}</p>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewDetails = reviewsList[activeReviewIndex]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            type="button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
