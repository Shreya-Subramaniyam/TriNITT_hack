import React from 'react'
import './addbug.css'
import image1 from './images/image1.jpg'

const AddForm = () => {
    return (
        <div className="formdiv">
            <i className="fas fa-bug fa-3x">Bug Tracker</i>
            {/* <img src={image1} alt="image1" /> */}
            <nav className="navbar">
                
            </nav>
            <form action="" className="bugform">
                <div>
                    <label htmlFor="bugDesc">Bug Description</label>
                    <input type="text" name="bugDesc" id="bugDesc" />
                </div>
                <div>
                    <label htmlFor="bugid">Bug ID</label>
                    <input type="text" name="bugid" id="bugid" />
                </div>
                <div>
                    <label htmlFor="priority">Select priority</label>
                    <select name="priority" id="priority">
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="link">Attach Link</label>
                    <input type="text" name="link" id="link" />
                </div>
                <div>
                    <label htmlFor="status">Status</label>
                    <select name="status" id="status">
                        <option value="unsolved">Unsolved</option>
                        <option value="solved">Solved</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="reportedby">Reported By</label>
                    <input type="text" name="reportedby" id="reportedby" />
                </div>
                {/* <button type="submit">Add Bug</button> */}
                <input type="submit" value="Add Bug" />
            </form>
        </div>
    )
}

export default AddForm