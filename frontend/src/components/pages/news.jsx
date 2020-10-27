import React from 'react';
import Detail from '../news-detail/news-detail';
import List from '../news-list/news-list';
import Summary from '../news-summary/news-summary';

const News = () => {
    return (
        <div>
            <h1>News page</h1>
            <List />
            <Summary />
            <Detail />
        </div>
    )
}

export {
    News
};
