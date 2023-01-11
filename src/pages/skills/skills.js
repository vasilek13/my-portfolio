import React from "react";
import Card from "../../components/card/card";
import HTML from '../../img/html.svg';
import CSS from '../../img/css.svg';
import REACT from '../../img/react.svg';
import JS from '../../img/js.svg';
import SQL from '../../img/sql.svg';
import SASS from '../../img/sass.svg';
import TS from '../../img/typescript.svg';
import FIGMA from '../../img/figma.svg';
import TILDA from '../../img/tilda.svg';
import './skills.scss';

export default function Skills() {
  return (
    <div className="my_skills">
      <h1>Hard skills</h1>
      <div className="my_skills__cards">
        <Card card_name="html 5" card_logo={HTML}/>
        <Card card_name="css" card_logo={CSS}/>
        <Card card_name="react" card_logo={REACT}/>
        <Card card_name="javascript" card_logo={JS}/>
        <Card card_name="mysql" card_logo={SQL}/>
        <Card card_name="scss" card_logo={SASS}/>
        <Card card_name="typescript" card_logo={TS}/>
        <Card card_name="figma" card_logo={FIGMA}/>
        <Card card_name="tilda" card_logo={TILDA}/>
      </div>
    </div>
  )
}
