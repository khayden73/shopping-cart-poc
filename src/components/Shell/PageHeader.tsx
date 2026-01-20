import styles from "./PageHeader.module.css";
import { useContext } from "react";
import { PageContext } from "../Page/PageProvider.tsx";

interface PageHeaderProps {
  children?: React.ReactNode;
}

function PageHeader({ children }: PageHeaderProps) {
  const { title, breadcrumbs } = useContext(PageContext);
  console.info("[PageHeader]", { title, breadcrumbs });
  return (
    <header className={styles.pageHeader}>
      <>
        {title && <h1>{title}</h1>}
        {children}
      </>
    </header>
  );
}

export { PageHeader };
