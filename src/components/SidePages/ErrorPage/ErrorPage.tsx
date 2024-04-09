import {Link} from "react-router-dom";
import styles from "./ErrorPage.module.css"
export function ErrorPage() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>404 Not Found</p>
            <Link to="/">Homecoming</Link>
        </div>
    );
}