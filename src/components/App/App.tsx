import React from 'react';
import { Typography } from '@ff/ui-kit';
import './App.scss';

function App() {
  return (
    <div className="App">
     Тест
     <div className="form">
      <div className="form__head">
      <div className="head__part">
        <div className="title__big"><Typography.Title>ПАСПОРТ СИСТЕМЫ</Typography.Title></div>
        <div className="title__name">ППА-ВК</div>
      </div>
        <div className="head__part">
        <div className="icon"> 
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
</svg></div>
<div>
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="7" r="4" />
  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
</svg>
<Typography size="lg"> Администратор Иванов</Typography>
</div>

        </div>
      </div>

     </div>
    </div>
  );
}

export default App;
