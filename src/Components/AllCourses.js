import React, { useEffect, useState } from "react"
import Course from "./Course";
import base_url from "../Services/BootApi";
import axios from 'axios';
import { toast } from "react-toastify";

const AllCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        document.title = "All Courses by Shree";
    }, []);

    //function to call api
    const getAllCourses = () => {
        axios.get(`${base_url}/courses`).then((res) => {
            setCourses(res.data);
            toast.success("Courses has been loaded!");
        }, (err) => {
            toast.error("Something went wrong");
        });
    }

    //initial courses loading
    useEffect(() => {
        getAllCourses();
    }, []);

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/course/${id}`).then((res) => {
            setCourses(courses.filter(c => c.id !== id));
            toast.success("Courses has been deleted!");
        }, (err) => {
            toast.error("Something went wrong");
        });
    }
    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows:</p>
            {
                courses.length > 0 ? courses.map((item) => <Course deleteCourse={deleteCourse} key={item.id} course={item} />)
                    : "No courses"}
        </div>

    )
}

export default AllCourses;