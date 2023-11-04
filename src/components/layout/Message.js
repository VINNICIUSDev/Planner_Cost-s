import {useState, useEffect} from 'react'
import styles from './Message.module.css'
export function Message({type, msg}){
    const [visible, setVisible] = useState(false)
    
    useEffect(()=>{
        if(!msg){
            setVisible(false)
            return
        }
        setVisible(true)

        const timer = setTimeout(()=> {
            setVisible(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [msg])

    return (
        <>
        {   //if
            visible && (
                <div className={`${styles.message} ${styles[type]}`}>
                    {msg}
                </div>
            )
        }
        </>
        
    )
}