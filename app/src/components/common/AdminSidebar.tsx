import { Link } from 'react-router-dom';

export default function AdminSidebar() {
  return (
    <div>
      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/admin/clients">Users</Link>
      <Link to="/admin/professionals">Products</Link>
      <Link to="/admin/services">Services</Link>
      <Link to="/admin/interventions">Interventions</Link>
      <Link to="/admin/messages">Messages</Link>
    </div>
  );
}