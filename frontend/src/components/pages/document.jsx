import React from 'react';
import List from '../doc-list/doc-list';
import Detail from '../doc-detail/doc-detail';
import Summary from '../doc-summary/doc-summary';

const Document = () => {
    return (
        <div>
            <h1>Document page</h1>
            <List />
            <Detail />
            <Summary />
        </div>
    )
}

export { 
    Document 
};
