function HabitCard({ title, frequency }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{title}</h3>
      <p>Frequency: {frequency}</p>
    </div>
  );
}
export default HabitCard;
