import { ItemList } from "./ItemList";

const ListKeys = ({ items, handleChange, handleDelete }) => {
  return (
    <ItemList
      items={items}
      handleChange={handleChange}
      handleDelete={handleDelete}
    />
  );
};

export default ListKeys;
