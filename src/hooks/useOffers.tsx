import { createContext, ReactElement, ReactNode, useContext } from 'react';

interface OffersContextData {
  name: string;
}

interface OffersContextProviderProps {
  children: ReactNode;
}

const OffersContext = createContext<OffersContextData>({} as OffersContextData);

export function OffersContextProvider({
  children,
}: OffersContextProviderProps): ReactElement {
  return (
    <OffersContext.Provider value={{ name: 'test' }}>
      {children}
    </OffersContext.Provider>
  );
}

export const useOffers = (): OffersContextData => {
  const contextData = useContext(OffersContext);

  return contextData;
};
