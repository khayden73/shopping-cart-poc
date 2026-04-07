import styles from "./PageHeader.module.css";
import { useContext } from "react";
import { PageContext } from "../Page/PageProvider.tsx";
import { PageBreadcrumbs } from "../Page/PageBreadcrumbs.tsx";

interface PageHeaderProps {
  children?: React.ReactNode;
}

function PageHeader({ children }: PageHeaderProps) {
  const { title, breadcrumbs } = useContext(PageContext);
  // console.info("[PageHeader]", { title, breadcrumbs });
  return (
    <header className={styles.pageHeader}>
      {title && (
        <section className={styles.pageTitle}>
          {/* <h1>{title}</h1> */}
        </section>
      )}
      {breadcrumbs && (
        <section className={styles.pageBreadcrumbs}>
          <PageBreadcrumbs crumbs={breadcrumbs} />
        </section>
      )}
      {children}
    </header>
  );
}

export { PageHeader };
