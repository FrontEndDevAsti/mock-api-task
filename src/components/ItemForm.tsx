import type React from "react";
import { useState } from "react";

interface ItemFormProps {
  onSubmit: (item: { title: string; body: string }) => void;
}

export const ItemForm: React.FC<ItemFormProps> = ({ onSubmit }) => {
  const [newTask, setNewTask] = useState({ title: "", body: "" });
  const [formErrors, setFormErrors] = useState({ title: "", body: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({ title: "", body: "" });

    let hasError = false;
    if (!newTask.title.trim()) {
      setFormErrors((prev) => ({ ...prev, title: "Please enter the title" }));
      hasError = true;
    }
    if (!newTask.body.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        body: "Please enter the description",
      }));
      hasError = true;
    }

    if (hasError) return;

    onSubmit(newTask);
    setNewTask({ title: "", body: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mb-8 bg-[#1E222A] p-6 rounded-lg shadow-lg border border-[#2B3040]"
      data-aos="fade-down"
    >
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-white text-sm font-bold mb-2"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Enter task title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
        />
        {formErrors.title && (
          <p className="text-red-500 text-sm mt-1">{formErrors.title}</p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-white text-sm font-bold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          placeholder="Enter task description"
          value={newTask.body}
          onChange={(e) => setNewTask({ ...newTask, body: e.target.value })}
          className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
          rows={3}
        />
        {formErrors.body && (
          <p className="text-red-500 text-xs italic mt-1">{formErrors.body}</p>
        )}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="group p-[4px] rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995] cursor-pointer"
        >
          <div className="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[8px] px-2 py-2">
            <div className="flex gap-2 items-center">
              <span className="font-semibold">Add Item</span>
            </div>
          </div>
        </button>
      </div>
    </form>
  );
};
