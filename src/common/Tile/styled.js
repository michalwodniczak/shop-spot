import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const LargeListWrapper = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  row-gap: 20px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevice}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
    grid-template-columns: 1fr;
    padding: 24px;
  }
`;

export const CartListWrapper = styled(LargeListWrapper)`
  grid-template-columns: 1fr;
`;

export const Tile = styled.article`
  max-width: 360px;
  height: 400px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;

export const DetailTile = styled(Tile)`
  max-width: 100%;
  height: auto;
  flex-direction: row;
  align-items: center;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevice}px) {
    max-width: calc(100% - 40px);
    margin: 0 auto;
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-width: calc(100% - 20px);
  }
`;

export const CartTile = styled(Tile)`
  max-width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevice}px) {
    max-width: calc(100% - 40px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-width: calc(100% - 2px);
  }
`;

export const TileImageContainer = styled.div`
  width: 100px;
  height: 150px;
  overflow: hidden;
  margin: 20px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
    height: 100px;
  }
`;

export const DetailImageContainer = styled(TileImageContainer)`
  width: 300px;
  height: 300px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 150px;
    height: 150px;
  }
`;

export const CartImageContainer = styled(TileImageContainer)`
  width: 100px;
  height: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 60px;
    height: 60px;
  }
`;

export const TileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const DetailImage = styled(TileImage)`
  width: 100%;
`;

export const CartImage = styled(TileImage)`
  width: 100%;
`;

export const TileTextContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;

export const DetailTextContainer = styled(TileTextContainer)`
  width: 600px;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: calc(100% - 6px);
  }
`;

export const CartTextContainer = styled(DetailTextContainer)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-direction: row;
    align-items: center;
    padding: 4px;
  }
`;

export const TileTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
`;

export const DetailTitle = styled(TileTitle)`
  font-size: 40px;
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevice}px) {
    font-size: 24px;
  }
`;

export const CartTitle = styled(TileTitle)`
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 10px;
  }
`;

export const TilePrice = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const DetailPrice = styled(TilePrice)`
  font-size: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevice}px) {
    font-size: 24px;
  }
`;

export const CartPrice = styled(TilePrice)`
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

export const DetailDescription = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;


export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
