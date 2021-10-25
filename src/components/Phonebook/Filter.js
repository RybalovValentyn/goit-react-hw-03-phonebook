import React from 'react';
import s from './Phonebook.module.css'
const Filter = ({ value, onChange }) => (
  <label className={s.labelInpt}>
    Фильтр по имени
    <input className={s.input} type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;