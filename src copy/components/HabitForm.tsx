import {  useState, type SubmitEvent } from "react";
import Button from "./Button";
import {  useHabits } from "../context/HabitProvider";

function HabitForm() {
  const {addHabit} = useHabits();
  const [name, setName] = useState("");
  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (name.trim().length === 0) return;
    addHabit(name);
    setName("");
   
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 rounded-lg px-2 py-1 bg-zinc-800 border-2 border-zinc-800 outline-none  transition-colors focus-visible:ring-2 focus-visible:ring-violet-500"
        placeholder="New habit ..."
      />
      <Button
        disabled={name.trim().length === 0}
        className="rounded-lg px-4 py-2 font-medium"
      >
        Add Habit
      </Button>
    </form>
  );
}

export default HabitForm;
