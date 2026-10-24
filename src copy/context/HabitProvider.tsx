import { createContext, useContext, useState, type ReactNode } from "react";
import type { Habit } from "../models/habits";
import { isSameDay } from "date-fns";

type Context = {
  habits: Habit[];
  addHabit: (name: string) => void;
  deleteHabit: (id: string) => void;
  toggleHabitCompletion: (id: string, date: Date) => void;
};

type HabitProviderProps = {
  children: ReactNode;
};
export const HabitContext = createContext<null | Context>(null);

export function HabitProvider({ children }: HabitProviderProps) {
  const [habits, setHabits] = useState<Habit[]>([]);

  function addHabit(name: string) {
    setHabits((curr) => [
      ...curr,
      { id: crypto.randomUUID(), name, completions: [new Date()] },
    ]);
  }

  function deleteHabit(id: string) {
    setHabits((curr) => curr.filter((habit) => habit.id !== id));
  }

  function toggleHabitCompletion(id: string, date: Date) {
    setHabits((curr) =>
      curr.map((h) => {
        if (h.id !== id) return h;
        const alreadyDone = h.completions.some((c) => isSameDay(c, date));
        const completions = alreadyDone
          ? h.completions.filter((c) => !isSameDay(c, date))
          : [...h.completions, date];
        return { ...h, completions };
      }),
    );
  }

  return (
    <HabitContext
      value={{ habits, addHabit, deleteHabit, toggleHabitCompletion }}
    >
      {children}
    </HabitContext>
  );
}

export function useHabits() {
    const habitContext = useContext(HabitContext);
    if(!habitContext) {
        throw new Error("useHabits must be used within a HabitProvider");
    }
    return habitContext;
}

