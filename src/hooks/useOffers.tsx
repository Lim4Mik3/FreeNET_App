import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from 'react';

import { useHistory } from 'react-router-dom';
import { api } from '../services/api';
import offersDataJSON from '../offers.json';

interface OffersContextData {
  getCustomerOffers: (zipcode: string) => Promise<void>;
  customerData: CustomerDataDTO;
}

interface OffersContextProviderProps {
  children: ReactNode;
}

interface CustomerDataDTO {
  querySuccess: boolean;
  offers: Offer[];
  zipcode: string;
  street: string;
  neighborhood: string;
  nation: string;
}

export interface Offer {
  id: number;
  isSelected: boolean;
  name: string;
  price: number;
}

const customerDataInitalValue: CustomerDataDTO = {
  querySuccess: false,
  offers: [],
  zipcode: '',
  street: '',
  neighborhood: '',
  nation: '',
};

const OffersContext = createContext<OffersContextData>({} as OffersContextData);

export function OffersContextProvider({
  children,
}: OffersContextProviderProps): ReactElement {
  const [customerData, setCustomerData] = useState<CustomerDataDTO>(
    customerDataInitalValue
  );
  const history = useHistory();

  const getCustomerOffers = async (zipcode: string): Promise<void> => {
    const response = await api.get(`/${zipcode}/json`);

    if (response.status !== 200) {
      return;
    }

    const { cep, bairro, logradouro, uf } = response.data;

    setCustomerData({
      querySuccess: true,
      zipcode: cep,
      street: logradouro,
      neighborhood: bairro,
      nation: uf,
      offers: offersDataJSON.userData.offers,
    });

    history.push('/offers');
  };

  return (
    <OffersContext.Provider
      value={{
        getCustomerOffers,
        customerData,
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
