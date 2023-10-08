import React, { useState } from "react";
import Modal from "./Modal"; // Импорт компонента модального окна
import CreateButton from "./CreateButton"; // Импорт компонента кнопки создания
import Input from "./Input";

const ProductCreationContainer: React.FC = () => {
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

  const handleCreateProduct = () => {
    // Ваши действия по созданию продукта
    // productName и productDescription содержат значения из инпутов
    // Закройте модальное окно после создания продукта
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

export default ProductCreationContainer;
