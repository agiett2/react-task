export interface Habit {
    id: string;
    name: string;
    completed?: boolean;
    completions: Date[];
  }
  
  export type HabitListProps = {
    habits: Habit[];
    deleteHabit: (id: string) => void;
    toggleHabitCompletion: (id: string, date: Date) => void;
  }

  export type HabitFormProps = {
    onAddHabit: (name: string) => void;
   
  }

  export type HabitItemProps = {
    habit: Habit;
    deleteHabit: (id: string) => void;
    toggleHabitCompletion: (id: string, date: Date) => void;
  }