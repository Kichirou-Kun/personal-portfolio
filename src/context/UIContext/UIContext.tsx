import React from "react";

interface InitialState {
  openSidebar: boolean;
  openAdminSidebar: boolean;
}
type Action =
  | { type: "OPEN_SIDEBAR" }
  | { type: "CLOSE_SIDEBAR" }
  | { type: "OPEN_ADMIN" }
  | { type: "CLOSE_ADMIN" };
const initialState = {
  openSidebar: false,
  openAdminSidebar: false,
};

export const UIContext = React.createContext<InitialState | any>(initialState);
export const uireducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR": {
      return {
        ...state,
        openSidebar: true,
      };
    }
    case "CLOSE_SIDEBAR": {
      return {
        ...state,
        openSidebar: false,
      };
    }
    case "OPEN_ADMIN": {
      return {
        ...state,
        openAdminSidebar: true,
      };
    }
    case "CLOSE_ADMIN": {
      return {
        ...state,
        openAdminSidebar: false,
      };
    }
    default:
      return state;
  }
};
export const UIContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(uireducer, initialState);
  const setOpenSidebar = React.useCallback(() => {
    dispatch({ type: "OPEN_SIDEBAR" });
  }, [dispatch]);
  const setCloseSidebar = React.useCallback(() => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  }, [dispatch]);

  const setOpenAdmin = React.useCallback(() => {
    dispatch({ type: "OPEN_ADMIN" });
  }, [dispatch]);
  const setCloseAdmin = React.useCallback(() => {
    dispatch({ type: "CLOSE_ADMIN" });
  }, [dispatch]);

  const value = React.useMemo(
    () => ({
      ...state,
      setOpenSidebar,
      setCloseSidebar,
      setOpenAdmin,
      setCloseAdmin,
    }),
    [state, setOpenSidebar, setCloseSidebar, setOpenAdmin, setCloseAdmin]
  );
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
type ContextState = InitialState & {
  setCloseSidebar: () => void;
  setOpenSidebar: () => void;
  setOpenAdmin: () => void;
  setCloseAdmin: () => void;
};
export const useUI = () => {
  const context = React.useContext<ContextState>(UIContext);
  if (context === undefined)
    throw new Error(`useUI must be used within a UIProvider`);

  return context;
};
