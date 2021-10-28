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
  getCustomerAddress: (zipcode: string) => Promise<void>;
  loadOffers: () => void;
  customerAdress: CustomerAdressInfo;
  userData: UserDataDTO;
}

interface OffersContextProviderProps {
  children: ReactNode;
}

interface CustomerAdressInfo {
  zipcode: string;
  street: string;
  neighborhood: string;
  nation: string;
}

interface UserDataDTO {
  offers: Offer[];
  zipcode: string;
}

interface Offer {
  id: number;
  isSelected: boolean;
  name: string;
  price: number;
}

const OffersContext = createContext<OffersContextData>({} as OffersContextData);

export function OffersContextProvider({
  children,
}: OffersContextProviderProps): ReactElement {
  const [customerAdress, setCustomerAdress] = useState<CustomerAdressInfo>(
    {} as CustomerAdressInfo
  );
  const [userData, setUserData] = useState<UserDataDTO>({} as UserDataDTO);
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

  const loadOffers = (): void => {
    setUserData({
      zipcode: customerAdress.zipcode,
      offers: offersDataJSON.userData.offers,
    });
  };

  return (
    <OffersContext.Provider
      value={{
        getCustomerAddress,
        loadOffers,
        customerAdress,
        userData,
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
