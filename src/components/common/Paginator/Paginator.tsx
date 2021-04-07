import paginatorStyles from "./Paginator.module.css"
import {useState} from "react";

type PaginatorType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}


export const Paginator: React.FC<PaginatorType> = ({
                                                       pageSize,
                                                       totalItemsCount,
                                                       currentPage,
                                                       onPageChanged,
                                                       portionSize = 10
                                                   }) => {

    let pageCount = Math.ceil(totalItemsCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={paginatorStyles.paginator}>
            {
                portionNumber > 1 && <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREVIOUS</button>
            }
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span
                        className={currentPage === p ? paginatorStyles.selectedPage : paginatorStyles.pageNumber}
                        onClick={() => {
                            onPageChanged(p)
                        }}>{p}</span>
                })}
            {
                portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>
            }
        </div>
    )
}


