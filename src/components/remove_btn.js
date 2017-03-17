// React
import React from 'react';

// Component
const RemoveBtn = function({ onRemoveAll }) {
    return (
        <div className="remove-btn-wrapper">
            <div className="remove-btn" onClick={() => onRemoveAll()}>
                <i className="material-icons">remove</i>
            </div>
        </div>
    )
};

// Export component
export default RemoveBtn;
