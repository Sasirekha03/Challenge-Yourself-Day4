import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const books = [
  {
    title: 'Moby Dick',
    summary: 'Moby Dick by Herman Melville. This now-famous book about a mans hunt for the great whale is considered one of the greatest American novels ever written. Moby Dick is heavy on symbolism, but is also famous for the detailing of the whaling industry in the 19th century and its many different narrative styles and structures.'
  },
  {
    title: 'Arabian Nights',
    summary: 'Arabian Nights translated by Andrew Lang. This English language version of One Thousand and One Nights retells the ancient stories that have now become popularized around the world, including the plight of Scheherazade, the adventures of Aladdin, and the voyages of Sinbad.'
  },
  {
    title: 'The Republic',
    summary: 'The Republic is a philosophical work by Plato, in which he explores the nature of justice, the ideal society, and the role of the philosopher in society. It has had a significant impact on Western philosophy and political thought.'
  },
  {
    title: 'Silent Spring',
    summary: 'Silent Spring by Rachel Carson. Carson wrote on the topic of environmental justice in this book that inspired readers to think more seriously about their relationship to the Earth. Silent Spring helped the modern environmental movement get off the ground and led to the nationwide ban on DDT'
  },
  {
    title: 'The Complete Works of William Shakespeare',
    summary: ' William Shakespeare is often considered the greatest writer in the English language and the greatest dramatist in all of history. The characters, stories, and language have taken hold of readers for hundreds of years and have greatly contributed to shaping modern culture. Shakespeares complete works have been translated into every major language and are still enjoyed around the world.'
  },
];
function BookList() {
  return (
    <List>
      <h2><center>Lists of Books</center></h2>
      {books.map((book) => (
        <React.Fragment key={book.title}>
          <ListItem>
            <ListItemText
              primary={book.title}
              secondary={book.summary}
            />
          </ListItem>
          {<Divider />}
        </React.Fragment>
      ))}
    </List>
  );
}

export default BookList;

/*import {  Divider } from '@mui/material';
function BookList()
{ 
const books = [
  {
    title: 'Moby Dick',
    summary: 'Moby Dick by Herman Melville. This now-famous book about a mans hunt for the great whale is considered one of the greatest American novels ever written. Moby Dick is heavy on symbolism, but is also famous for the detailing of the whaling industry in the 19th century and its many different narrative styles and structures.'
  },
  {
    title: 'Arabian Nights',
    summary: 'Arabian Nights translated by Andrew Lang. This English language version of One Thousand and One Nights retells the ancient stories that have now become popularized around the world, including the plight of Scheherazade, the adventures of Aladdin, and the voyages of Sinbad.'
  },
  {
    title: 'The Republic',
    summary: 'The Republic is a philosophical work by Plato, in which he explores the nature of justice, the ideal society, and the role of the philosopher in society. It has had a significant impact on Western philosophy and political thought.'
  },
  {
    title: 'Silent Spring',
    summary: 'Silent Spring by Rachel Carson. Carson wrote on the topic of environmental justice in this book that inspired readers to think more seriously about their relationship to the Earth. Silent Spring helped the modern environmental movement get off the ground and led to the nationwide ban on DDT'
  },
  {
    title: 'The Complete Works of William Shakespeare',
    summary: ' William Shakespeare is often considered the greatest writer in the English language and the greatest dramatist in all of history. The characters, stories, and language have taken hold of readers for hundreds of years and have greatly contributed to shaping modern culture. Shakespeares complete works have been translated into every major language and are still enjoyed around the world.'
  },
];

  return(
    <div>
      <h2><center>Lists of Books</center></h2>
      {books.map(book => <div>
        <h4> {book.title}</h4>
         {book.summary}
          <Divider />
         </div>)}
          </div>
          );
        
    
      }  

export default BookList;*/

