import "../Styles/Cards.css";

function SkillCard(props) {
  return (
    <div style={props.style} className="card skill-card">
      <h2>{props.title}</h2>
      <svg
        onClick={props.close}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
      </svg>
      <img src={props.img} alt="" />
      <h3>Desciption</h3>
      <div className="description">
        {props.description.map((desciption) => (
          <p>{desciption}</p>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
