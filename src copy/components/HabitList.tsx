import { useHabits } from "../context/HabitProvider";
import type { Habit } from "../models/habits";
import Button from "./Button";
import {
  startOfWeek,
  eachDayOfInterval,
  endOfWeek,
  format,
  isFuture,
  isSameDay,
  subDays,
} from "date-fns";

function HabitList() {
  const {habits} = useHabits();
  if (habits.length === 0) {
    return (
      <p className="text-center text-zinc-500 py-12">
        No habits yet. Add one above to get started!
      </p>
    );
  }
  return (
    <div className="flex flex-col gap-3">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </div>
  );
}

function HabitItem({habit}: {habit: Habit}) {
 const {deleteHabit, toggleHabitCompletion} = useHabits();
 
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });

  const streak = getStreak(habit.completions);
  return (
    <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <span className="font-medium">{habit.name}</span>
          { streak !== 0 && (
            <span className="text-sm text-amber-400">🔥 {streak}</span>
          )}
        </div>
        <Button
          onClick={() => deleteHabit(habit.id)}
          className="text-xs"
          variant="ghost-destructive"
        >
          Delete
        </Button>
      </div>
      <div className="flex gap-1.5">
        {visibleDates.map((date) => (
          <Button
            className="flex flex-1 flex-col items-center gap-0.5 rounded-lg text-xs"
            key={date.toISOString()}
            disabled={isFuture(date)}
            onClick={() => toggleHabitCompletion(habit.id, date)}
            variant={habit.completions.some(d => isSameDay(date, d)) ? "primary" : "secondary"}
          >
            <div className="flex flex-col items-center justify-center">
              <span className="font-medium">{format(date, "EEE")}</span>
              <span>{format(date, "d")}</span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

function getStreak(completions: Date[]) {
    let streak = 0;
    let date = new Date();
    while (completions.some(c => isSameDay(c, date))) {
        streak++;
        date = subDays(date, 1);
    }
    return streak;
}
export default HabitList;
