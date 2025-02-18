import { Outlet } from "react-router";
import { Header } from "../header";
import styles from './styles.module.scss';

export function Layout() {
  return (
    <>
      <div className={styles.bgHome}>
        <Header />
      </div>
        <Outlet />
    </>
  )
}
