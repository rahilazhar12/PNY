import React, { useState, useEffect } from 'react';

const Testapi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    // Fetch data from the provided URL
    fetch('https://www.pnytrainings.com/api/header_menu')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedCourse('');
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div>
      <h1>Testapi</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <label htmlFor="categorySelect">Select a Category:</label>
          <select
            id="categorySelect"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select Category</option>
            {data.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>

          {selectedCategory && (
            <div>
              <label htmlFor="courseSelect">Select a Course:</label>
              <select
                id="courseSelect"
                value={selectedCourse}
                onChange={handleCourseChange}
              >
                <option value="">Select Course</option>
                {data
                  .find((item) => item.name === selectedCategory)
                  .obj.map((course) => (
                    <option key={course.id} value={course.name}>
                      {course.name}
                    </option>
                  ))}
              </select>
            </div>
          )}

          {selectedCourse && (
            <div>
              <h2>{selectedCourse}</h2>
              {data
                .find((item) => item.name === selectedCategory)
                .obj.find((course) => course.name === selectedCourse) && (
                <div>
                  <p>
                    Monthly Tuition Fee:{' '}
                    {
                      data
                        .find((item) => item.name === selectedCategory)
                        .obj.find((course) => course.name === selectedCourse)
                        .monthly_tuition_fee
                    }
                  </p>
                  <p>
                    Teacher:{' '}
                    {
                      data
                        .find((item) => item.name === selectedCategory)
                        .obj.find((course) => course.name === selectedCourse)
                        .teacher
                    }
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Render second dropdowns for all categories with an 'obj' array */}
          {data
            .filter((item) => item.obj.length > 0)
            .map((category) => (
              <div key={category.id}>
                <h3>{category.name}</h3>
                <select
                  value={selectedCategory === category.name ? selectedCourse : ''}
                  onChange={handleCourseChange}
                >
                  <option value="">Select Course</option>
                  {category.obj.map((course) => (
                    <option key={course.id} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Testapi;
