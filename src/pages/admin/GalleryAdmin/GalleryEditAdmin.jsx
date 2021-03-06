import React, { useState } from "react";
import { connect } from "react-redux";
import { AddGallery } from "../../../redux/actions/GalleryActions";
import { ContainerEditGallery, Flex } from "./style";

const GalleryEditAdmin = ({ AddGallery }) => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [datefin, setDatefin] = useState("");
  const [text, setText] = useState("");

  const onAdd = (e) => {
    e.preventDefault();
    if (
      !images.length ||
      date === "" ||
      datefin === "" ||
      title === "" ||
      text === ""
    ) {
      alert("Please enter all fields");
    } else {
      const newEvenement = {
        title,
        date,
        datefin,
        text,
        images,
      };
      AddGallery(newEvenement);

      alert("Gallery added");

      setImages([]);
      setTitle("");
      setText("");
      setDate("");
      setDatefin("");
    }
  };

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
    setImages([...images, ""]);
  };

  return (
    <ContainerEditGallery>
      <form>
        <h1>Evenements passés </h1>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          name="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="date"
          name="datefin"
          placeholder="Date Fin"
          value={datefin}
          onChange={(e) => setDatefin(e.target.value)}
        />

        <input
          type="text"
          name="text"
          placeholder="Description"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {images.map((img, i) => {
          return (
            <Flex>
              <input
                name="image"
                placeholder="Image"
                value={img}
                onChange={(e) => handleInputChange(e, i)}
              />

              <div>
                {images.length !== 1 && (
                  <i
                    onClick={() => handleRemoveClick(i)}
                    class="fas fa-minus-square"
                  ></i>
                )}
              </div>
            </Flex>
          );
        })}
        {images.length < 4 && (
          <i onClick={handleAddClick} class="fas fa-plus-square"></i>
        )}
        <button onClick={onAdd}>Soumettre</button>
      </form>
    </ContainerEditGallery>
  );
};

export default connect(null, { AddGallery })(GalleryEditAdmin);
