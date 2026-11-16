interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(
  courses: Course[],
  minStudents: number
): Course[] {
  return courses.filter(
    (course) => course.isPublished === true &&
                course.students >= minStudents
  );
}

const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

console.log(getPopularCourses(courses, 80));
