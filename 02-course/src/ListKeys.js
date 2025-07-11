import { ItemList } from "./ItemList";

const ListKeys = ({ items, handleChange, handleDelete, fetchError }) => {
  return (
    <>
      {!fetchError && (
        <ItemList
          items={items}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default ListKeys;
