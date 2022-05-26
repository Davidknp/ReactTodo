import React from 'react';

function inputtask() {
    return (
        <div>
            <a>sdjd</a>
            <form style="display:flex">
                <label>
                    Write a Task:
                    <input type="text" name="name"/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
}

export default inputtask;