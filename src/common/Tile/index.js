import {
  Tile,
  TileImageContainer,
  TileImage,
  TileTextContainer,
  TileTitle,
  TilePrice,
  DetailTile,
  DetailImageContainer,
  DetailTextContainer,
  DetailImage,
  DetailTitle,
  DetailPrice,
  DetailDescription,
} from "./styled";
import { Star } from "../Star";

export const ListLargeTile = ({ image, name, price, rate }) => {
  return (
    <Tile>
      <TileImageContainer>
        {image ? <TileImage src={image} alt={name} /> : "no image"}
      </TileImageContainer>
      <TileTextContainer>
        <TileTitle>{name ? name : "no title detected"}</TileTitle>
        {rate ? <Star rating={rate} /> : "no rate"}
        <TilePrice>{price ? price : "sorry dont have price now"}$</TilePrice>
      </TileTextContainer>
    </Tile>
  );
};

export const DetailsTile = ({ image, name, price, rate, description, children }) => {
  return (
    <DetailTile>
      <DetailImageContainer>
        {image ? <DetailImage src={image} alt={name} /> : ""}
      </DetailImageContainer>
      <DetailTextContainer>
        <DetailTitle>{name ? name : "no name"}</DetailTitle>
        {rate ? <Star rating={rate} /> : "no rate"}
        <DetailPrice>{price} $</DetailPrice>
        <DetailDescription>{description}</DetailDescription>
        {children}
      </DetailTextContainer>
    </DetailTile>
  );
};
