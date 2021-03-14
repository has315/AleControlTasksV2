import React, { useState } from 'react'
import { FilterType, FormattedData, SearchType, SortType } from '~/types/formattedTypes';

const useFormattedData = (users: FormattedData)=> {

    const [formatted, setformatted] = useState(users);

    //search, filter, sortBy

    const search = (input: SearchType) => {
        // return search
    }

    const filter = (input: FilterType) => {
        // return filter
    }

    const sortBy = (input: SortType) => {
        //return sortBy
    }


    return {search, filter, sortBy}
}

export default useFormattedData
