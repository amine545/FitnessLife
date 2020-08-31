import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';
import '../add.css'
const Footer = () => (
  <div>
    <span style={{color:'cyan'}} >Show: </span>
    <FilterLink    filter={VisibilityFilters.SHOW_ALL}><p style={{width:'100px' , height:'30px'}}>All</p></FilterLink>
    <FilterLink  filter={VisibilityFilters.SHOW_ACTIVE}><p style={{width:'100px' , height:'30px'}}>Active</p></FilterLink>
    <FilterLink  filter={VisibilityFilters.SHOW_COMPLETED}><p style={{width:'100px' , height:'30px'}}>Completed</p></FilterLink>
  </div>
);

export default Footer;