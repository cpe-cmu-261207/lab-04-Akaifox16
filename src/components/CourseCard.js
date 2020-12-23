export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return (<>
    <div class="CourseCard">
      <td>
        <div class="tag">
          <p>วิชา : {props.subj}</p>
          <p>เกรด : {props.grade}</p>
          <p>หน่วยกิต : {props.credit}</p>
        </div>
      </td>
      <td>
      <div>
        <button class="btn" onClick = {() =>{
            props.del(props.subj)
        }}>del</button></div>
      </td>
    </div>
  </>);
};
