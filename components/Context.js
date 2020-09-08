import {createContext} from 'react'

const Context = createContext({
    startDate: '',
    endDate:'',
    selectedEndDate: null,
    selectedStartDate: null
})

export default Context