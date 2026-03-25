import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import type { Breadcrumb } from "../../lib/types.ts";

interface PageBreadcrumbsProps {
  crumbs: Breadcrumb[];
}

function PageBreadcrumbs({ crumbs }: PageBreadcrumbsProps) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {crumbs.map((crumb) => {
        return crumb.route ? (
          <Link to={crumb.route}>{crumb.label}</Link>
        ) : (
          <span>{crumb.label}</span>
        );
      })}
    </Breadcrumbs>
  );
}

export { PageBreadcrumbs };
