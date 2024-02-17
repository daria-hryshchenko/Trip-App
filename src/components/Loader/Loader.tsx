import React from 'react';
import { LoaderWrapp, Item } from './Loader.styled';

const Loader: React.FC = () => {
  return (
    <LoaderWrapp>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </LoaderWrapp>
  );
};

export default Loader;
