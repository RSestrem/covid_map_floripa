import React from 'react';
import { LoadingSpinner } from './styles';

const Loading = () => {
    return (
        <LoadingSpinner>
            <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </LoadingSpinner>
    );
}
 
export default Loading;