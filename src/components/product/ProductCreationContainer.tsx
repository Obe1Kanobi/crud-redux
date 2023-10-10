import React, { useState, useCallback } from "react";
import Modal from "./Modal"; // Импорт компонента модального окна
import CreateButton from "./CreateButton"; // Импорт компонента кнопки создания
import Input from "./Input";
import { ProductModel } from "../../models/product.model";
import { setError, setNewProduct } from "../../store/product/product.slice";
import { useDispatch } from "react-redux";
import { InputCont } from "../../style/ModalCont.style";

export const ProductCreationContainer: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false); // Состояние видимости модального окна
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const dispatch = useDispatch();
  //////
  const handleCreateClick = () => {
    setModalVisible(true); // Открывает модальное окно при клике на кнопку
  };

  const handleModalClose = () => {
    setModalVisible(false); // Закрывает модальное окно
  };
  //////
  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
    console.log(e.target.value);
  };

  const handleProductDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductDescription(e.target.value);
    console.log(e.target.value);
  };

  const handleCreateProduct = () => {
    setError(false);
    const newProduct: ProductModel = {
      id: 21,
      title: productName,
      description: productDescription,
      category: "",
      price: 0,
      image: "",
      rating: {
        count: 0,
        rate: 0,
      },
    };
    console.log(newProduct);
    dispatch(setNewProduct(newProduct));
  };

  return (
    <div>
      <Modal
        title="Create Product"
        visible={modalVisible}
        onClose={handleModalClose}
      >
        <InputCont>
          <Input
            type="text"
            placeholder="Название продукта"
            value={productName}
            onChange={handleProductNameChange}
            onClick={(e) => e.stopPropagation()}
          />
          <Input
            type="text"
            placeholder="Описание продукта"
            value={productDescription}
            onChange={handleProductDescriptionChange}
            onClick={(e) => e.stopPropagation()}
          />
        </InputCont>
        <button onClick={handleCreateProduct}>Создать продукт</button>
      </Modal>
      <CreateButton onClick={handleCreateClick} buttonText="+" />
    </div>
  );
};
