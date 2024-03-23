import { useNavigate, Link } from "react-router-dom"
import { homeOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import styles from './telaPainel.module.css'

export default function TelaPainel (){
    const navigate = useNavigate ()
    return <body>
    <div id={styles.app}>
      <nav>
        <img src="" id={styles.logoBv} alt="Logo do site" className={styles.logo} />
  
        <ul>
          <li>
            <Link to= "" className={styles.active}>
              <IonIcon icon={homeOutline}/>
              Inicio
              </Link>
          </li>

          <li>
            <a href="/components/pacientes.html"onClick={()=>navigate('/pacientes')}>
              {/* <ion-icon name="people-outline"></ion-icon> */}
              Pacientes
            </a>
          </li>
  
          <li>
            <a href="/components/relatorios.html"onClick={()=>navigate('/relatorios')}>
              {/* <ion-icon name="document-text"></ion-icon> */}
              Relatórios
            </a>
          </li>
  
          <li>
          <a href="/components/creditos.html"onClick={()=>navigate('/creditos')}>
            {/* <ion-icon name="cash-outline"></ion-icon> */}
            Créditos
          </a>
          </li>
  
          <li>
          <a href="/components/produtos.html"onClick={()=>navigate('/produtos')}>
            {/* <ion-icon name="cube-outline"></ion-icon> */}
            Produtos
          </a>
          </li>
  
          <li>
            <a href="/components/ajustes.html"onClick={()=>navigate('/ajustes')}>
              {/* <ion-icon name="cog"></ion-icon> */}
              Ajustes
            </a>
          </li>
  
        </ul>
      </nav>
      <main>
        <div className={styles.inner}>
          <section className={styles.titleAvatar}>
            <h1>Bem Vindo! <img src="./assets/pencil.svg" alt="" /></h1>
            <img alt="avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
  
          </section>
  
          <section className={styles.ilter}>
            <button>
              {/* <ion-icon name="filter-outline"></ion-icon>
              <span>Filtrar</span> */}
            </button>
            <div className={styles.inputWrapper}>
              {/* <ion-icon name="search-outline"></ion-icon> */}
              <input type="text" placeholder="Busque por cards, assuntos ou responsáveis..." />
            </div>
          </section>

          <section className={styles.kanban}>
            <div className={styles.todo}>
              <h2>Pacientes</h2>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <h3>Atualização Semanal</h3>
                  <p>
                    
                  </p>
                  <div className={styles.tags}>
                  </div>
                </div>
                <div className={styles.card}>
                  <h3>Atualização Mensal</h3>
                  <p>
                    
                  </p>
                  <div className={styles.tags}>

                  </div>
                </div>
                <div className={styles.card}>
                  <h3>Atualização Anual</h3>
                  <p>
                    
                  </p>
                  <div className={styles.tags}>

                  </div>
                </div>
              </div>
            </div>
            <div className={styles.doing}>
              <h2>Relatórios de créditos</h2>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <h3>Valores Total</h3>
                  <p>
                  </p>
                  <div className={styles.tags}>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.done}>
              <h2>Protutos Atualizados</h2>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <h3>Atualização Semanal</h3>
                  <p>
                  </p>
                  <div className={styles.tags}>
   
                  </div>
                </div>
                <div className={styles.card}>
                  <h3>Atualização Mensal</h3>
                  <p>
                  </p>
                  <div className={styles.tags}>
   
                  </div>
                </div>
                <div className={styles.card}>
                  <h3>Atualização Anual</h3>
                  <p>
                  </p>
                  <div className={styles.tags}>
   
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  </body>
}