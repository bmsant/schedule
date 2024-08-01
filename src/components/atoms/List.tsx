import React from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

export default function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul className="w-full flex flex-col gap-4">
      {items.map((item, index) => (
        <li key={index} >
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
}