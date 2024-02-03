import style from './footer.module.css'
export default function Footer({done,total}){
    return <div className={style.container}>
     <span className={style.item}>Completed :{done}</span>
     <span className={style.item}>Total :{total}</span>
    </div>
}