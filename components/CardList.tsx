import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components'; 
import Card from './Card';
import { fetchCardData } from 'api/axios';
import { useObserver } from 'hooks/useObserver';

const CardList = () => {
  const [targetState, setTargetState] = useState(null);
  const target = useRef(targetState);
  const isIntersecting = useObserver(target);
  const [page, setPage] = useState(1);
  const [cardData, setCardData] = useState([]);
  const [stopFetch, setStopFetch] = useState(false);

  useEffect(() => {
    if (stopFetch) return;
    if (isIntersecting) setPage((page) => page + 1);
  }, [isIntersecting,stopFetch]);

  const getData =async () =>{
    const newData = await fetchCardData(
        `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`,
      );
      if (newData.length === 0) setStopFetch(true);
      setCardData((card) => [...card, ...newData]);
  }

  useEffect(()=>{
    getData();
  }, [page]);

  
  const cardItems =
  cardData && cardData.map((card) => <Card key={card.id} content={card} />);
  
  if(!cardData){
    return;
  }
  console.log('data',cardData); 
  return (
    <CardListWrapper>{cardData ? cardItems : 'Loading...'}
      <Observer className="test" ref={target} />
    </CardListWrapper>
  );
};

export default CardList;

const CardListWrapper = styled.div`
  margin: 30px auto;
  width: 500px;
`;

const Observer = styled.div`
  height: 5px;
`;