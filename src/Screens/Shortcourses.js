import React from 'react'
import { Link } from 'react-router-dom'

const Shortcourses = ({ courses }) => {
    return (
        <>
            <div className="flex flex-col space-y-2 ">
                {courses.map(course => (
                    <Link to={course.url_slug} target='_blank'  key={course.id} className="text-black">
                        <div>
                           <div className='link link-hover'>{course.name}</div> 
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Shortcourses
