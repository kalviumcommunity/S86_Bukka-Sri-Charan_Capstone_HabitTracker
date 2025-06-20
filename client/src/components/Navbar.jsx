import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        width: '100%',
        backgroundColor: '#1e293b',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 50px',
        boxSizing: 'border-box',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Habit Tracker</div>
      <div style={{ display: 'flex', gap: '25px' }}>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/add-habit" style={navLinkStyle}>Add Habit</Link>
        <Link to="/analytics" style={navLinkStyle}>Analytics</Link>
        <Link to="/profile" style={navLinkStyle}>Profile</Link>
      </div>
    </nav>
  );
}

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '500',
};

export default Navbar;
