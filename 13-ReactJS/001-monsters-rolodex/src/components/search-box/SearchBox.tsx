import React, {FC} from 'react';

import './search-box.css';

interface IProps {
    handleChange: (event: any) => void;
    placeholder: string;
}

const SearchBox: FC<IProps> = ({placeholder, handleChange}) => (
    <input
        className="search-box"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
);

export default SearchBox;
