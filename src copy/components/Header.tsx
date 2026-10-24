import { format, isToday } from "date-fns";
import { useHabits } from "../context/HabitProvider";
import Button from "./Button";
type HeaderProps = {
    visibleDates: Date[];
    onNext: () => void;
    onPrevious: () => void;
}

function Header({visibleDates, onNext, onPrevious}: HeaderProps) {
    const {habits} = useHabits();
    const doneToday = habits.filter(h => h.completions.some(c => isToday
        (c))).length;
        
const dateRange = `${format(visibleDates[0], "MMM d")} - ${format(visibleDates.at(-1)!, "MMM d")}`;
  return (
   <header className="flex justify-between items-center">
    <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Habit Tracker</h1>
        <span className="text-sm text-zinc-400">{doneToday} /{ habits.length} done today</span>
    </div>
    <div className="flex flex-col gap-1 items-end">
    <span className="text-sm text-zinc-400">{dateRange}</span>
    <div className="flex items-center gap-3">
        <Button onClick={onPrevious}>Previous</Button>
        <Button onClick={onNext}>Next</Button>
    </div>
    </div>
   </header>
  );
}

export default Header;