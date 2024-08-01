import React from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
}

export default function List<T>({ items, renderItem, className }: ListProps<T>) {
  return (
    <ul className={`w-full flex flex-col gap-4 ${className}`}>
      {items.map((item, index) => (
        <li key={index} >
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
}