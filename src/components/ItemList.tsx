import type React from "react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import type { Item } from "../types/itemTypes";

interface ItemListProps {
  items: Item[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, item: { title: string; body: string }) => void;
  newItemIds: number[];
}

export const ItemList: React.FC<ItemListProps> = ({
  items,
  onDelete,
  onUpdate,
  newItemIds,
}) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedTask, setEditedTask] = useState({ title: "", body: "" });

  const handleEdit = (item: Item) => {
    setEditingId(item.id);
    setEditedTask({ title: item.title, body: item.body });
  };

  const handleSave = (id: number) => {
    onUpdate(id, editedTask);
    setEditingId(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-cols-1 p-4 gap-4 rounded-lg shadow-md"
        >
          {editingId === item.id ? (
            <>
              <input
                type="text"
                value={editedTask.title}
                onChange={(e) =>
                  setEditedTask({ ...editedTask, title: e.target.value })
                }
                className="border p-3 rounded w-full shadow-md mb-2"
              />
              <textarea
                value={editedTask.body}
                onChange={(e) =>
                  setEditedTask({ ...editedTask, body: e.target.value })
                }
                className="border p-3 rounded w-full shadow-md mb-3"
              />
              <div className="flex gap-3">
                <button
                  onClick={() => handleSave(item.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded shadow-md hover:bg-green-600 transition duration-300 cursor-pointer"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded shadow-md hover:bg-gray-600 transition duration-300 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="col-span-2 text-lg font-bold capitalize rounded-md">
                {item.title}
              </div>
              <div className="col-span-2 rounded-md">{item.body}</div>
              <div className="flex gap-3 mt-3">
                {!newItemIds.includes(item.id) && (
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-blue-500 text-white cursor-pointer px-4 h-8 rounded shadow-md flex items-center hover:bg-blue-800 hover:text-slate-200 transition duration-300"
                  >
                    <FaEdit className="mr-2" /> Edit
                  </button>
                )}
                <button
                  onClick={() => onDelete(item.id)}
                  className="bg-red-500 text-white cursor-pointer px-4 h-8 rounded shadow-md flex items-center hover:bg-red-800 transition duration-300"
                >
                  <FaTrash className="mr-2" /> Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
