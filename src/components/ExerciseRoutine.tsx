import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Flame } from "lucide-react";
import pushupImage from "@/assets/exercise-pushup.jpg";
import squatImage from "@/assets/exercise-squat.jpg";
import plankImage from "@/assets/exercise-plank.jpg";
import lungeImage from "@/assets/exercise-lunge.jpg";
import burpeeImage from "@/assets/exercise-burpee.jpg";
import mountainClimberImage from "@/assets/exercise-mountain-climber.jpg";

const exercises = [
  {
    id: 1,
    name: "Push-Ups",
    image: pushupImage,
    duration: "3 sets × 12 reps",
    calories: 45,
    difficulty: "Intermediate",
    description: "Upper body strength builder targeting chest, shoulders, and triceps",
  },
  {
    id: 2,
    name: "Squats",
    image: squatImage,
    duration: "3 sets × 15 reps",
    calories: 60,
    difficulty: "Beginner",
    description: "Lower body powerhouse for quads, glutes, and hamstrings",
  },
  {
    id: 3,
    name: "Plank Hold",
    image: plankImage,
    duration: "3 sets × 45 sec",
    calories: 35,
    difficulty: "Intermediate",
    description: "Core strengthening exercise for stability and endurance",
  },
  {
    id: 4,
    name: "Lunges",
    image: lungeImage,
    duration: "3 sets × 10 each",
    calories: 50,
    difficulty: "Beginner",
    description: "Unilateral leg exercise for balance and strength",
  },
  {
    id: 5,
    name: "Burpees",
    image: burpeeImage,
    duration: "3 sets × 10 reps",
    calories: 80,
    difficulty: "Advanced",
    description: "Full body cardio exercise for explosive power",
  },
  {
    id: 6,
    name: "Mountain Climbers",
    image: mountainClimberImage,
    duration: "3 sets × 30 sec",
    calories: 70,
    difficulty: "Advanced",
    description: "Dynamic core and cardio exercise for endurance",
  },
];

const difficultyColors = {
  Beginner: "bg-primary/10 text-primary border-primary/20",
  Intermediate: "bg-secondary/10 text-secondary border-secondary/20",
  Advanced: "bg-destructive/10 text-destructive border-destructive/20",
};

export const ExerciseRoutine = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-4xl font-bold">Today's Workout Routine</h2>
        <p className="text-lg text-muted-foreground">
          Visual guide to your personalized training session
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {exercises.map((exercise) => (
          <Card
            key={exercise.id}
            className="group overflow-hidden border-border bg-card shadow-glow hover:shadow-glow-secondary transition-all duration-300 hover:scale-105"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={exercise.image}
                alt={exercise.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <Badge
                className={`absolute right-3 top-3 border ${
                  difficultyColors[exercise.difficulty as keyof typeof difficultyColors]
                }`}
              >
                {exercise.difficulty}
              </Badge>
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">{exercise.name}</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {exercise.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-medium">{exercise.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Flame className="h-4 w-4 text-secondary" />
                  <span className="font-medium">{exercise.calories} cal</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
