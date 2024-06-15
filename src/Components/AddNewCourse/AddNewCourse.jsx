import React, { useState } from 'react';
import './AddNewCourse.css'; // Import the CSS file for styling

const AddCourse = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [courseInstructor, setCourseInstructor] = useState('');

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isSelectCourseModalOpen, setIsSelectCourseModalOpen] = useState(false);
  const [editCourseIndex, setEditCourseIndex] = useState(null);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      name: courseName,
      description: courseDescription,
      duration: courseDuration,
      instructor: courseInstructor
    };
    setCourses([...courses, newCourse]);
    setCourseName('');
    setCourseDescription('');
    setCourseDuration('');
    setCourseInstructor('');
    setIsAddModalOpen(false); // Close the add modal after submission
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedCourses = [...courses];
    updatedCourses[editCourseIndex] = {
      name: courseName,
      description: courseDescription,
      duration: courseDuration,
      instructor: courseInstructor
    };
    setCourses(updatedCourses);
    setCourseName('');
    setCourseDescription('');
    setCourseDuration('');
    setCourseInstructor('');
    setIsEditModalOpen(false); // Close the edit modal after submission
  };

 
  const handleDelete = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
    setIsEditModalOpen(false); // Ensure edit modal is closed
    setIsSelectCourseModalOpen(false); // Ensure select course modal is closed
    setEditCourseIndex(null); // Clear edit index
  };

  const openEditModal = (index) => {
    setEditCourseIndex(index);
    setCourseName(courses[index].name);
    setCourseDescription(courses[index].description);
    setCourseDuration(courses[index].duration);
    setCourseInstructor(courses[index].instructor);
    setIsEditModalOpen(true);
    setIsAddModalOpen(false); // Ensure add modal is closed
    setIsSelectCourseModalOpen(false); // Ensure select course modal is closed
  };

  const openSelectCourseModal = () => {
    setIsSelectCourseModalOpen(true);
    setIsAddModalOpen(false); // Ensure add modal is closed
    setIsEditModalOpen(false); // Ensure edit modal is closed
  };

  const closeModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setIsSelectCourseModalOpen(false);
    setCourseName('');
    setCourseDescription('');
    setCourseDuration('');
    setCourseInstructor('');
  };

  return (
    <div className='ms-5 p-5'>
      <h2 id="coursesList">Available Courses</h2>
      <div className='text-center'>
        <button id="addcourse" className='mx-5 p-3' onClick={openAddModal}>Add Course</button>
        <button id="updatecourse" className='mx-5 p-3' onClick={openSelectCourseModal}>Update Course</button>
        <button id="deletecourse" className='mx-5 p-3' onClick={openSelectCourseModal}>Delete Course</button>
      </div>
      
      {/* Add Course Modal */}
      {isAddModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <form  className="" onSubmit={handleAddSubmit}>
              <div>
                <label className='labels '>Course Name:</label>
                <input 
                  type="text" 
                  value={courseName} 
                  onChange={(e) => setCourseName(e.target.value)} 
                  required 
                />
              </div><br/>
              <div>
                <label className='labels '>Course Description:</label>
                <input 
                  type="text" 
                  value={courseDescription} 
                  onChange={(e) => setCourseDescription(e.target.value)} 
                  required 
                />
                
              </div><br/>
              <div>
                <label className='labels '>Course Duration:</label>
                <input 
                  type="text" 
                  value={courseDuration} 
                  onChange={(e) => setCourseDuration(e.target.value)} 
                  required 
                />
              </div><br/>
              <div>
                <label className='labels '>Course Instructor:</label>
                <input 
                  type="text" 
                  value={courseInstructor} 
                  onChange={(e) => setCourseInstructor(e.target.value)} 
                  required 
                />
              </div><br/>
              <button className='text-center' id="addcourse" type="submit">Add Course</button>
            </form>
          </div>
        </div>
      )}

      {/* Select Course Modal */}
      {isSelectCourseModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2 id="selectcourses">Select Course</h2>
            <ul>
              {courses.map((course, index) => (
                <li key={index}>
                  <h2 className="changes"> {course.name}</h2>
                  <p className="changes">Description  :  {course.description}</p>
                  <p className="changes">Duration  :  {course.duration}</p>
                  <p className="changes">Instructor  :   {course.instructor}</p>
                  <button id="updatedailogue"  className="mx-4" onClick={() => openEditModal(index)}>Update</button>
                  <button id="deletedailogue"  className="" onClick={() => handleDelete(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Edit Course Modal */}
      {isEditModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <form onSubmit={handleEditSubmit}>
              <div>
                <label>Course Name:</label>
                <input 
                  type="text" 
                  value={courseName} 
                  onChange={(e) => setCourseName(e.target.value)} 
                  required 
                />
              </div>
              <div>
                <label>Course Description:</label>
                <input 
                  type="text" 
                  value={courseDescription} 
                  onChange={(e) => setCourseDescription(e.target.value)} 
                  required 
                />
              </div>
              <div>
                <label>Course Duration:</label>
                <input 
                  type="text" 
                  value={courseDuration} 
                  onChange={(e) => setCourseDuration(e.target.value)} 
                  required 
                />
              </div>
              <div>
                <label>Course Instructor:</label>
                <input 
                  type="text" 
                  value={courseInstructor} 
                  onChange={(e) => setCourseInstructor(e.target.value)} 
                  required 
                />
              </div>
              <button type="submit">Update Course</button>
            </form>
          </div>
        </div>
      )}
      
      {/* List of Courses */}
      <ul>
        {courses.map((course, index) => (
            
          <li key={index}>
            <h2 className="changes">{course.name}</h2>
            <p className="changes">Description :  {course.description}</p>
            <p className="changes">Duration  :  {course.duration}</p>
            <p className="changes">Instructor  :  {course.instructor}</p><br/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddCourse;
