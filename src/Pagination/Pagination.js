import React from "react"
import classnames from "classnames"
import { usePagination, DOTS} from "./usePagination"

const Pagination = ({onPageChange,totalCount,siblingCount =1,currentPage,pageSize,className})=>{

    const paginationRange = usePagination({currentPage, totalCount, siblingCount, pageSize})

    if (currentPage === 0 || paginationRange.length <2){
        return null
    }

    const onNext = ()=>{
        onPageChange(currentPage +1)
    }

    const onPrevious = ()=>{
        onPageChange(currentPage -1)
    
    }
let lastPage = paginationRange[paginationRange.length -1]

}