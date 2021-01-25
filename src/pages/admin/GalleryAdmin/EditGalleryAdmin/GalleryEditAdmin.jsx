import React, { useState } from 'react';
import { Container, Form, Flex } from './GalleryEditAdmin.style.js';

const GalleryEditAdmin = () => {
  const [images, setImages] = useState(['']);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [text, setText] = useState('');

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...images];
    list[index] = value;
    setImages(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...images];
    list.splice(index, 1);
    setImages(list);
  };

  const handleAddClick = () => {
    setImages([...images, '']);
  };

  return (
    <Container>
      <h2>Passeé</h2>
      <Form>
        <label>Title</label>
        <input type="text" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Date</label>
        <input type="text" name="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
        <label>Text</label>
        <input type="text" name="text" placeholder="text" value={text} onChange={(e) => setText(e.target.value)} />
        <label>Photo</label>
        {images.map((img, i) => {
          return (
            <Flex>
              <input name="image" placeholder="image" value={img} onChange={(e) => handleInputChange(e, i)} />

              <div>
                {images.length !== 1 && <i onClick={() => handleRemoveClick(i)} class="fas fa-minus-square"></i>}
                {images.length - 1 === i && <i onClick={handleAddClick} class="fas fa-plus-square"></i>}
              </div>
            </Flex>
          );
        })}
        <button>Submit</button>
      </Form>
    </Container>
  );
};

export default GalleryEditAdmin;
