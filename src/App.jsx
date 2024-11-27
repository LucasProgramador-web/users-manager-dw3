// En el componente principal
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserList from './UserList';
import UserEdit from './UserEdit';
import UserDetails from './UserDetails';
import UserForm from './UserForm';
import UserDelete from './UserDelete';
import { UserProvider, useUserContext } from './context/UserContext';


const App = () => {

const addUser = async (newUser) => {
// Agregar nuevo usuario al estado
try {
const response = await fetch('https://673515775995834c8a91d7ca.mockapi.io/users', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
  body: JSON.stringify(newUser),
});
if (response.ok) {
// Obtener la respuesta y agregar usuario al estado
const data = await response.json();
setUsers([...users, data]);
} else {
console.error('Error al agregar usuario');
}
} catch (error) {
console.error('Error en la solicitud: ', error);
}
};

return (
  <UserProvider>
    <Router>
  <nav>
    <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/create">crear usaurio</Link></li>
    </ul>
  </nav>

 <Routes>
  <Route path="/" element={<UserList/>} />
  <Route path="/users/:id" element={<UserDetails />} />
  <Route path="/create" element={<UserForm />} />
  <Route path="/edit/:id" element={<UserEdit />} />
  <Route path="/delete/:id" element={<UserDelete />} />
 </Routes>
</Router>
  </UserProvider>

);
};

export default App;