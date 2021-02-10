import { sortableContainer, sortableElement } from "react-sortable-hoc";

let isDragging = false;
let collection = null;

const setDragging = (state) => {
  isDragging = state;
};

const setCollection = (_collection) => {
  collection = _collection;
};

const SortableItem = sortableElement((props) => {
  return (
    <div {...props} onDragStart={() => console.log("isDragging")}>
      {props.children}
    </div>
  );
});

const SortableContainer = sortableContainer((props) => {
  return <div {...props}>{props.children}</div>;
});

export {
  SortableItem,
  SortableContainer,
  setDragging,
  isDragging,
  setCollection,
  collection,
};
