import classes from "./Skills.module.css";
import Card from "./UI/Card";
import { IconContext } from "react-icons";
import {
  SiPhp,
  SiLaravel,
  SiJavascript,
  SiReact,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiPython,
  SiDjango,
  SiGraphql,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

const MY_SKILLS = [
  { title: "HTML5", name: <SiHtml5 /> },
  { title: "CSS", name: <SiCss3 /> },
  { title: "Bootstrap", name: <SiBootstrap /> },
  { title: "Javascript", name: <SiJavascript /> },
  { title: "React", name: <SiReact /> },
  { title: "Redux", name: <SiRedux /> },
  { title: "Python", name: <SiPython /> },
  { title: "Django REST", name: <SiDjango /> },
  { title: "GraphQL", name: <SiGraphql /> },
  { title: "PHP", name: <SiPhp /> },
  { title: "Laravel", name: <SiLaravel /> },
  { title: "MySQL", name: <SiMysql /> },
  { title: "PostgreSQL", name: <SiPostgresql /> },
];

const MySkills = (props) => {
  return (
    <Card classProps={classes["focus-items"]}>
      <div className={`${"centered"} ${classes.content}`}>
        {props.name}
        <p>{props.title}</p>
      </div>
    </Card>
  );
};

const Skills = () => {
  const skills = MY_SKILLS.map((skill) => (
    <MySkills key={skill.title} name={skill.name} title={skill.title} />
  ));

  return (
    <section className={classes.skills} id="skills">
      <h1 className="centered">SKILLS</h1>
      <div className={classes.items}>
        <IconContext.Provider
          value={{ size: "4rem", color: "rgb(115, 93, 134)" }}
        >
          {skills}
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Skills;
