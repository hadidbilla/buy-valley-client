import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddProducts.css";

const AddProducts = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageUrl, setImageUrl] = useState();
  const onSubmit = (data) => {
    console.log(data);
    const itemData = {
      name: data.name,
      price: data.price,
      pic: imageUrl,
    };
    fetch("https://enigmatic-harbor-97669.herokuapp.com/addProducts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemData),
    }).then((res) => console.log("sever side", res));
  };
  const handlePicUpload = (event) => {
    const picData = new FormData();
    picData.set("key", "3db7fa98d0f1e5b21415db14460f0d44");
    picData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", picData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <h1>Add Product</h1>
      </div>
      <div className="row">
        <h4 style={{ textAlign: "center" }}>We'd love to hear from you!</h4>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} class="row input-container">
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input name="name" ref={register} />
            <label>Product Name</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input name="price" ref={register({ required: true })} />
            <label>Price</label>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="styled-input wide">
            <input name="pic" onChange={handlePicUpload} type="file" />
          </div>
        </div>
        <div className="col-xs-12">
          <input class="submit-btn" type="submit" value="Add Product" />
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
