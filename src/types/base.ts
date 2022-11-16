export interface Table {
    endRow: number
    firstPage: number
    hasNextPage: boolean
    hasPreviousPage: boolean
    isFirstPage: boolean
    isLastPage: boolean
    lastPage: number
    navigatePages: number
    navigatepageNums: number[]
    nextPage: number
    pageNum: number
    pageSize: number
    pages: number
    prePage: number
    size: number
    startRow: number
    total: number
}

export interface TableReq {
    pageNum?: number
    pageSize?; number
}