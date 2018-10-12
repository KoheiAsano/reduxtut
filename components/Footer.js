import React from 'react'
import FilterLink from '../containers/FilterLiink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
    ALL
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
    active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
    completed
    </FilterLink>
  </div>
)

export default Footer
