export const WorkSectionItem = ({
  title,
  firm,
  startDate,
  endDate,
  location,
  description,
}) => (
  <div>
    <p>
      {startDate} - {endDate}
    </p>
    <div>
      <p>{firm}</p>
      <p>{Location}</p>
    </div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);
