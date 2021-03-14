export type FormattedData = {
    users: [{}]
}

export type SearchType = {
    search: string
}

export type FilterType = {
    filter: () => FormattedData
}

export type SortType = {
    sortBy: string
}