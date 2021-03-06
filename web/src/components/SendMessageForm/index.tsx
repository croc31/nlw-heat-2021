import { FormEvent, useContext, useState } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { AuthContext } from '../../context/auth';
import { api } from '../../services/api';
import styles from './styles.module.scss';

export function SendMessageForm(){
    const {user} = useContext(AuthContext);
    const [message, setMessage] = useState('');

    async function handleSendMensage(event : FormEvent) {
        event.preventDefault();

        if(!message.trim()){
            return;
        }

        await api.post('messages', {message});
        setMessage('');
    }

    return(
        <div className={styles.sendMessageFormWrapper}>
            <button className={styles.signOutButton}>
                <VscSignOut size="32"></VscSignOut></button>

        <header className={styles.userInformation}>
            <div className={styles.userImage}>
                <img src={user?.avatar_url} alt={user?.name} />

            </div>

            <strong className={styles.userName}>{user?.name}</strong>
            <span className={styles.userGithub}>
                <VscGithubInverted  size="16"/>
                {user?.login}
            </span>
        </header>
        <form className={styles.sendMessageForm} onSubmit={handleSendMensage}>
                <label htmlFor="message">Mensagem</label>
                <textarea 
                name="message" 
                id="message" 
                placeholder="Qual sua expectativa para o evento?"
                onChange={event => setMessage(event.target.value)}
                value={message}
                ></textarea>

                <button type="submit"> Enviar </button>
            </form>
        </div>

);
}