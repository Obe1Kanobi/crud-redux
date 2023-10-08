import React, { useState, useCallback } from "react";
import Modal from "./Modal"; // Импорт компонента модального окна
import CreateButton from "./CreateButton"; // Импорт компонента кнопки создания
import Input from "./Input";
import { ProductModel } from "../../models/product.model";
import { setError } from "../../store/product/product.slice";

export const ProductCreationContainer: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false); // Состояние видимости модального окна
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleCreateClick = () => {
    setModalVisible(true); // Открывает модальное окно при клике на кнопку
  };

  const handleModalClose = () => {
    setModalVisible(false); // Закрывает модальное окно
  };

  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const handleProductDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductDescription(e.target.value);
  };

  const handleCreateProduct = useCallback(() => {
  if(titleInputValue) {
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
    }
  }
    // Ваши действия по созданию продукта
    // productName и productDescription содержат значения из инпутов
    // Закройте модальное окно после создания продукта
    dispatch(setProduct)
  };

  return (
    <div>
      <CreateButton onClick={handleCreateClick} buttonText="+" />
      <Modal
        title="Create Product"
        visible={modalVisible}
        onClose={handleModalClose}
      >
        {/* Включите инпуты в контент модального окна */}
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
        <button onClick={handleCreateProduct}>Создать продукт</button>
      </Modal>
    </div>
  );
};
