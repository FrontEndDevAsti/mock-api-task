import { useState, useEffect } from "react";
import { toast } from "sonner";
import { fetchItems, deleteItem, updateItem, createItem } from "../api/api";
import { Loader } from "../components/Loader";
import { ItemList } from "../components/ItemList";
import { ItemForm } from "../components/ItemForm";
import { FaSort } from "react-icons/fa";
import type { Item } from "../types/itemTypes";

export default function HomePage() {
  const [items, setItems] = useState<Item[]>([]);
  const [displayedItems, setDisplayedItems] = useState<Item[]>([]);
  const [sortBy, setSortBy] = useState<"newestFirst" | "aToZ" | "zToA">(
    "newestFirst"
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [newItemIds, setNewItemIds] = useState<number[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const fetchedItems = await fetchItems();
        setItems(fetchedItems);
        setDisplayedItems(fetchedItems.slice(0, 6));
      } catch (err) {
        setError("Failed to fetch items");
      } finally {
        setIsLoading(false);
      }
    };
    loadItems();
  }, []);

  useEffect(() => {
    const sorted = [...items].sort((a, b) => {
      if (sortBy === "aToZ") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "zToA") {
        return b.title.localeCompare(a.title);
      } else if (sortBy === "newestFirst") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
      return 0;
    });

    setDisplayedItems(sorted.slice(0, 6));
  }, [items, sortBy]);

  const handleDelete = async (id: number) => {
    try {
      await deleteItem(id);
      setItems(items.filter((i) => i.id !== id));
      toast.success("Task deleted successfully");
    } catch {
      toast.error("Failed to delete task");
    }
  };

  const handleUpdate = async (
    id: number,
    updatedItem: { title: string; body: string }
  ) => {
    try {
      const result = await updateItem(id, updatedItem.title, updatedItem.body);
      if (result) {
        setItems(
          items.map((item) => (item.id === id ? { ...item, ...result } : item))
        );
        toast.success("Task updated successfully");
      }
    } catch {
      toast.error("Failed to update task");
    }
  };

  const handleAddTask = async (newTask: { title: string; body: string }) => {
    try {
      const addedItem = await createItem(newTask.title, newTask.body);
      if (addedItem) {
        const updatedItems = [addedItem, ...items];
        setItems(updatedItems);
        setDisplayedItems(updatedItems.slice(0, 6));
        setNewItemIds((prev) => [...prev, addedItem.id]);
        toast.success("Task added successfully");
      }
    } catch {
      toast.error("Failed to add task");
    }
  };

  const handleLoadMore = () => {
    const nextItems = items.slice(
      displayedItems.length,
      displayedItems.length + 6
    );
    setDisplayedItems([...displayedItems, ...nextItems]);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (isLoading) return <Loader />;
  if (error)
    return <div className="flex justify-center items-center h-64">{error}</div>;

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Task Manager</h1>

      <ItemForm onSubmit={handleAddTask} />

      <div className="flex justify-end mb-6">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Sort By <FaSort className="ml-2" />
          </button>
          {isDropdownOpen && (
            <div className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <button
                    onClick={() => {
                      setSortBy("newestFirst");
                      setIsDropdownOpen(false);
                    }}
                    className="block px-4 py-2 w-full text-left hover:bg-gray-100 cursor-pointer"
                  >
                    Newest First
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSortBy("aToZ");
                      setIsDropdownOpen(false);
                    }}
                    className="block px-4 py-2 w-full text-left hover:bg-gray-100 cursor-pointer"
                  >
                    A to Z
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSortBy("zToA");
                      setIsDropdownOpen(false);
                    }}
                    className="block px-4 py-2 w-full text-left hover:bg-gray-100 cursor-pointer"
                  >
                    Z to A
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <ItemList
        items={displayedItems}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
        newItemIds={newItemIds}
      />

      {items.length > displayedItems.length && (
        <div className="mt-8 text-center">
          <button
            onClick={handleLoadMore}
            className="bg-gray-500 cursor-pointer text-white px-5 py-3 hover:bg-gray-800 rounded shadow-md"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
