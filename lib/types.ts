export interface Workout {
  id: string | number;
  name: string;                 
  image: string;                
  muscleGroups: string[];           
  equipment: string;            
  duration: number;             
  calories: number;             
  rating: number;                
  difficulty: string;           
  sets: number;                 
  reps: string;                
  description: string;         
  instructions: string[];     
}
export interface PlanItem extends Workout {
  done?: boolean;
}
