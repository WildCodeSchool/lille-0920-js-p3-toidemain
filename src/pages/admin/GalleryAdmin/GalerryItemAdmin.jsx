import React from "react";
import { connect } from "react-redux";
import { deleteGallery } from "../../../redux/actions/GalleryActions";
import { ContainerGalleryItem, Img, Box, Del } from "./style";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

const GalleryItemAdmin = ({
  id,
  image1,
  image2,
  image3,
  image4,
  title,
  date,
  datefin,
  text,
  deleteGallery,
}) => {
  const onDelete = (e) => {
    e.preventDefault()
    deleteGallery(id);
    alert("Gallery Deleted");
  };

  return (
    <ContainerGalleryItem>
      <Box>
        <h3>
          <span>Title:</span> {title}
        </h3>
        <p>
          <span>Date:</span> {moment(date).format("dddd Do MMMM YYYY")} à{" "}
          {moment(datefin).format("dddd Do MMMM YYYY")}
        </p>
        <p>
          <span>Description:</span> {text}
        </p>
        <Img>
          {image1 != null && <img src={image1} alt="img1" />}
          {image2 != null && <img src={image2} alt="img1" />}
          {image3 != null && <img src={image3} alt="img1" />}
          {image4 != null && <img src={image4} alt="img1" />}
        </Img>
      </Box>
      <Del>
        <a href="#!" onClick={onDelete}>
          <i class="fas fa-trash-alt"></i>
        </a>
      </Del>
    </ContainerGalleryItem>
  );
};

export default connect(null, { deleteGallery })(GalleryItemAdmin);
