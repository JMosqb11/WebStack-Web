import React from "react"


import styles from './Contacto.module.css'
import Contacts from '@/components/Contacts/Contacts'


const Contacto = () => {
return (
<>
    <section className={styles.containerContacto}>
        <div>
            <p className={styles.titleContacto}>¿Cómo puedo ayudarte?, ¡Cuéntame de tú proyecto!</p>
        </div>
        <div>
            <Contacts/>
        </div>
    </section>
</>
);
}

export default Contacto