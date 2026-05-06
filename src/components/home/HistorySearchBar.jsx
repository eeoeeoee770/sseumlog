// 거래 내역 검색창.

import useSearch from "../../hook/useSearch";

const HistorySearchBar = ({ onSearch }) => {
  const { keyword, handleChange } = useSearch(onSearch);

  return (
    <div className="mt-4">
      <input
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="검색..."
        className="w-full p-2 pl-4 border bg-gray-50 border-gray-200 rounded-lg focus:outline-none"
      />
    </div>
  );
};

export default HistorySearchBar;
