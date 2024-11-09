import styled from "styled-components";

export const LargeListWrapper = styled.ul`
  width: 1000px;
  margin: 0 auto;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
`;

export const Tile = styled.article`
  width: 300px;
  height: 400px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TileImageContainer = styled.div`
  width: 100px;
  height: 150px;
  display: flex;
  overflow: hidden;
  margin: 20px 0;
`;

export const TileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
`;

export const TileTextContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const TileTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  text-align: left;
  padding: 10px;
`;

export const TilePrice = styled.p`
  font-weight: 700;
  font-size: 20px;
  padding: 20px;
  align-self: flex-start;
`;
