import {
  Tile,
  TileImageContainer,
  TileImage,
  TileTextContainer,
  TileTitle,
  TilePrice,
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
