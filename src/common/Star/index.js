import { StarImage, HalfStarImage, CountStar, Container } from "./styled";
import star from ".././../assets/star.png";
import halfStar from "../../assets/halfStarpng.png";

export const Star = ({ rating }) => {
  const roundedRating = Math.floor(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStars = roundedRating % 1 !== 0;

  return (
    <Container>
      {[...Array(fullStars)].map((_, index) => (
        <StarImage src={star} key={index} />
      ))}
      {hasHalfStars && <HalfStarImage src={halfStar} />}
      <CountStar>{roundedRating}/5</CountStar>
    </Container>
  );
};
