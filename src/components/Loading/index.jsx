import React from 'react';
import { LoadingSpinner } from './styles';

/* enquanto o mapa não é carregado, apresenta um loading spinner */
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