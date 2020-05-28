import React from 'react'
import { VisibilityFilters } from '../actions'
import FilterLink from '../containers/FilterLink'


import styled from 'styled-components'

const FilterLinkGroup = styled.div`
    padding: 1rem 0;
    display:flex;
    justify-content: space-between;
`

const Footer = () => (
    <FilterLinkGroup>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </FilterLinkGroup>
)

export default Footer