import { useState, useEffect } from "react";


export default function usePagination(data, itemsPerPage = 10) {
    const [currentPage, setCurrentPage] = useState(1);
    const lastPage = Math.ceil(data.length / itemsPerPage);
    const [paginatedData, setPaginatedData] = useState(data);

    useEffect(() => {
        setPaginatedData(data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage))
    }, [currentPage, data]);

    const handlePageChange = (newPage) =>{
        setCurrentPage(newPage);
    }

    return {paginatedData, currentPage, handlePageChange}
}