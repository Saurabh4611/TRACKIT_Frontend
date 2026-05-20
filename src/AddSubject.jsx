import React from 'react'

const AddSubject = () => {
   const handleAddSubject = () => {
    const subjectName = prompt("Enter Subject Name:");
    if (!subjectName || subjectName.trim() === "") {
      alert("Subject name cannot be empty!");
      return;
    }

    fetch("http://localhost:8091/subject/add-subject/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: subjectName }),
    })
      .then((res) => {
        if (res.ok) {
          alert("Subject added successfully!");
          fetchSubjects();
        } else {
          alert("Failed to add subject.");
        }
      })
      .catch((err) => console.error("Error adding subject:", err));
  };
  return (
    <div className="flex justify-center items-center py-12 px-4">
      
      
      <div className="flex justify-between items-center m-4">
       <h1>Add Subject Here== </h1>
       <br/>
        <button
          onClick={handleAddSubject}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Add Subject
        </button>
      </div>
      
    </div>
  )
}

export default AddSubject

