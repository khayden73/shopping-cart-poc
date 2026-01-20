import { createContext, useMemo, useState } from "react";

interface PageProviderProps {
  children: React.ReactNode;
}

type Breadcrumb = { label: string; route: string };

interface PageContextType {
  title: string;
  breadcrumbs?: Breadcrumb[];
  updateTitle: (title: string) => void;
  updateBreadcrumbs: (breadcrumbs: Breadcrumb[]) => void;
}

const initialState: PageContextType = {
  title: "Home",
  breadcrumbs: [],
  updateTitle: () => {},
  updateBreadcrumbs: () => {},
};

const PageContext = createContext<PageContextType>(initialState);

const PageProvider = ({ children }: PageProviderProps) => {
  const [title, setTitle] = useState(initialState.title);
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

  const updateTitle = (title: string) => setTitle(title);
  const updateBreadcrumbs = setBreadcrumbs;

  const providerProps = useMemo(
    () => ({
      title,
      breadcrumbs,
      updateTitle,
      updateBreadcrumbs,
    }),
    [title, breadcrumbs],
  );

  return (
    <PageContext.Provider value={providerProps}>
      {children}
    </PageContext.Provider>
  );
};

export { PageContext, PageProvider };
