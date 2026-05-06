// 검색 기능.

import { useState } from "react";

const useSearch = (onSearch) => {
    const [keyword, setKeyword] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setKeyword(value);
        onSearch(value);
    };

    return { keyword, handleChange };
}

export default useSearch;