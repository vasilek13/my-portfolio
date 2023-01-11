import React from 'react'
import WorkLeft from '../../components/work/work-left'
import WorkRight from '../../components/work/work-right'
import work1 from '../../img/helthcare.png';
import work2 from '../../img/cloverly.png';
import work3 from '../../img/woodhouse.png';

export default function Work() {
  return (
    <div>
        <h1>Мои работы</h1>
        <WorkLeft nameProject="Helthcare" aboutProject="Breve descripcion del proyecto, amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." imgProject={work1}/>
        <WorkRight nameProject="Cloverly" aboutProject="Breve descripcion del proyecto, amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." imgProject={work2}/>
        <WorkLeft nameProject="Woodhouse" aboutProject="Breve descripcion del proyecto, amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." imgProject={work3}/>
    </div>
  )
}
