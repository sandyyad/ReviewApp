// Write your code here
import './index.css'

const ReviewsCarousel = props => {
  const {eachCompany} = props
  const {imgUrl, username, companyName, description} = eachCompany

  return (
    <div className="sub-sub-div">
      <img src={imgUrl} alt={username} />
      <p className="heading">{username}</p>
      <p>{companyName}</p>
      <p className="description">{description}</p>
    </div>
  )
}

export default ReviewsCarousel
