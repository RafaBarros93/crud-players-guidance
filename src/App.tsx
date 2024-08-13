import { Refine, I18nProvider } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  useNotificationProvider,
  RefineThemes,
  ThemedLayoutV2,
} from "@refinedev/chakra-ui";

import { ChakraProvider } from "@chakra-ui/react";
import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { PlayerCreate, PostEdit, PostList } from "./pages/players";
import { dataProvider } from "./refine/refineDataProvider";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ChakraProvider theme={RefineThemes.Blue}>
          <Refine
            i18nProvider={i18nProvider}
            dataProvider={dataProvider}
            notificationProvider={useNotificationProvider}
            routerProvider={routerBindings}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              mutationMode: "undoable",
            }}
            resources={[
              {
                name: "players",
                list: "/players",
                show: "/players/show/:id",
                create: "/players/create",
                edit: "/players/edit/:id",
                meta: {
                  canDelete: true,
                },
              },
            ]}
          >
            <Routes>
              <Route
                element={
                  <ThemedLayoutV2 /*  Header={() => <LanguageSwitcher />} */>
                    <Outlet />
                  </ThemedLayoutV2>
                }
              >
                <Route
                  index
                  element={<NavigateToResource resource="players" />}
                />

                <Route path="/players">
                  <Route index element={<PostList />} />
                  <Route path="/players/create" element={<PlayerCreate />} />
                  <Route path="/players/edit/:id" element={<PostEdit />} />
                </Route>
              </Route>

              <Route path="*" element={<ErrorComponent />} />
            </Routes>

            <RefineKbar />
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
        </ChakraProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
