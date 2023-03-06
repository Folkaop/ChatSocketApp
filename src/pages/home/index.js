import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const Home = ({ username, setUsername, room, setRoom, socket }) => {

    const navigate = useNavigate();
    const joinRoom = () => {
        if (room !== '' && username !== '') {
            socket.emit('join_room', { username, room });
        }
        navigate('/chat', { replace: true });
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>{`Добро пожаловать!`}</h1>
                <input
                    className={styles.input}
                    placeholder='Enter login here'
                    onChange={(e) => setUsername(e.target.value)}/>

                <select
                    className={styles.input}
                    onChange={(e) => setRoom(e.target.value)}>
                    <option>-- Select Room --</option>
                    <option value='test1'>test1</option>
                    <option value='test2'>test2</option>
                    <option value='test3'>test3</option>
                    <option value='test4'>test4</option>
                </select>

                <button
                    className='btn btn-secondary'
                    style={{ width: '100%' }}
                    onClick={joinRoom}
                        >Join Room</button>
            </div>
        </div>
    );
};

export default Home;