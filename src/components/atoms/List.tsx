import React from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul className="w-full flex flex-col gap-4">
      {items.map((item, index) => (
        <li key={index} className="bg-gray-700 p-2">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}