import React from 'react'

function Plate() {
    return (
        <div className="plate-container">
            <div className="plate plate-hard">
                <div className="expression">Template</div>
                <input type="text" className="translate-exp"></input>
                <div className="button-apply">Apply</div>
            </div>
        </div>
    )
}

export default Plate