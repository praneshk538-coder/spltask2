import React, { useState } from "react";

const App = () => {
  const [courses, setCourses] = useState(["HTML", "CSS"]);


  const addJavaScript = () => {
    if (!courses.includes("JavaScript")) {
      setCourses([...courses, "JavaScript"]);
    }
  };

  
  const addReact = () => {
    if (!courses.includes("React")) {
      setCourses([...courses, "React"]);
    }
  };

  
  const removeCSS = () => {
    const updatedCourses = courses.filter((course) => course !== "CSS");
    setCourses(updatedCourses);
  };

  return (
    <div>
      <h2>Courses List</h2>

      {courses.map((course, index) => (
        <p key={index}>{course}</p>
      ))}

      <button onClick={addJavaScript}>Add JavaScript</button>

      <button onClick={addReact}>Add React</button>

      <button onClick={removeCSS}>Remove CSS</button>
    </div>
  );
};

export default App;