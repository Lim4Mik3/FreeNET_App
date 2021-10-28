import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from 'react';

import { useHistory } from 'react-router-dom';
import { api } from '../services/api';

interface OffersContextData {
  getCustomerAddress: (zipcode: string) => Promise<void>;
  customerAdress: customerAdressInfo;
}

interface OffersContextProviderProps {
  children: ReactNode;
}

interface customerAdressInfo {
  zipcode: string;
  street: string;
  neighborhood: string;
  nation: string;
}

const OffersContext = createContext<OffersContextData>({} as OffersContextData);

export function OffersContextProvider({
  children,
}: OffersContextProviderProps): ReactElement {
  const [customerAdress, setCustomerAdress] = useState<customerAdressInfo>(
    {} as customerAdressInfo
  );
  const history = useHistory();

  const getCustomerAddress = async (zipcode: string): Promise<void> => {
    const response = await api.get(`/${zipcode}/json`);

    if (response.status !== 200) {
      return;
    }

    const { cep, bairro, logradouro, uf } = response.data;

    setCustomerAdress({
      zipcode: cep,
      street: logradouro,
      neighborhood: bairro,
      nation: uf,
    });

    history.push('/offers');
  };

  return (
    <OffersContext.Provider
      value={{
        getCustomerAddress,
        customerAdress,
      }}
    >
      {children}
    </OffersContext.Provider>
  );
}

export const useOffers = (): OffersContextData => {
  const contextData = useContext(OffersContext);

  return contextData;
};
