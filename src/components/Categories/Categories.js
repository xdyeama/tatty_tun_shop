import React from 'react';
import { categories } from '../../data';
import { Container } from './Categoires.style';
import CategoryItem from './CategoryItem';


const Categories = () => {
  return (
    <Container> 
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Categories
