// style
import './App.css';

// useState
import { useState } from 'react';

// components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import UserList from './components/userList/UserList';
import NewUserForm from './components/newUser/NewUserForm';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([
])

// delete user
const deleteUser = (id) => {
  setUsers((prev) => {
    return prev.filter((user) => {
      return user.id !== id
    })
  })
}

// close modal
const closeModal = (e) => {
  if (e.target.className === "overlay") setShowModal(false);
  if (e.key === "Escape") setShowModal(false)
}

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className='App'>
      <Navbar usersLength={users.length}/>
        <main>
          <div className="no-users">
            {users.length === 0 && <h2>No users</h2>}
          </div>
          <UserList users={users} deleteUser={deleteUser}/>
        </main>
        {showModal && <NewUserForm/>}
        <button className='create-user' onClick={() => setShowModal(true)}>Create User</button>
      <Footer/>      
    </div>
  )
}

export default App

// id: 1,
// image: 'https://picsum.photos/400?random=1',
// firstName: 'Samariddin',
// lastName: 'Alimov',
// age: 26,
// from: 'Uzbekistan',
// job: 'Frontend Developer',
// gender: 'Male'

