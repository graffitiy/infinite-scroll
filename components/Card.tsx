import React from 'react';
import styled from 'styled-components';

const Card = ({ content: { id, email, body } }) => {  
  return (
    <CardWrapper>
    <CardTitle>
      Comment Id<span>{id}</span>
    </CardTitle>

    <CardTitle>
      Email<span>{email}</span>
    </CardTitle>

    <CardTitle>Comment</CardTitle>
    <p>{body}</p>
  </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  width: 500px;
  margin-bottom: 12px;
  padding: 20px;
  border: 0.5px solid ${({ theme }) => theme.color.borderLine};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.darkGray};
`;

const CardTitle = styled.div`
  font-weight: 800;
  margin: 12px 0;
  &:nth-last-child(2) {
    margin-bottom: 2px;
  }
  span {
    display: inline-block;
    margin-left: 12px;
    font-weight: 400;
  }
`;