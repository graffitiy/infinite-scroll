import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
 
import Card from './Card';
import { fetchCardData } from 'api/axios';

const CardList = () => {
  const [page, setPage] = useState(1);
  const [cardData, setCardData] = useState([]);

  const getData =async () =>{
    const cards = await fetchCardData(
        `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`,
      );
      
    setCardData(cards);
  }

  useEffect(()=>{
    getData();
  }, [page]);
  console.log('data',cardData);
  const cardItems =
    cardData && cardData.map((card:any) => <Card key={card.id} content={card} />);

  return <CardListWrapper>{cardData ? cardItems : 'Loading'}</CardListWrapper>;
};

export default CardList;

const CardListWrapper = styled.div`
  margin: 30px auto;
  width: 500px;
`;