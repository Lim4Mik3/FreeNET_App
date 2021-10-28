import {
  ChangeEventHandler,
  FormEventHandler,
  ReactElement,
  useState,
} from 'react';

import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { PublicLayout } from '../../components/PublicLayout';
import { useOffers } from '../../hooks/useOffers';
import { zipcodeMask } from '../../utils/zipcodeMask';

import { Content } from './styles';

export function Home(): ReactElement {
  const [zipcode, setZipcode] = useState('');

  const { getCustomerOffers } = useOffers();

  const handleZipcodeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;

    setZipcode(zipcodeMask(value));
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();
    if (!zipcode.trim()) return;

    getCustomerOffers(zipcode);
  };

  return (
    <PublicLayout>
      <Content>
        <div>
          <h1>Olá visitante, seja bem vindo!</h1>

          <span>
            Para buscarmos os planos disponíveis, por favor insira seu CEP
            abaixo.
          </span>

          <form onSubmit={handleFormSubmit}>
            <Input
              subtitle="Apenas números"
              type="text"
              placeholder="XXXXX-XXX"
              onChange={handleZipcodeInput}
              value={zipcode}
            />

            <Button title="Buscar" type="submit" />
          </form>
        </div>
      </Content>
    </PublicLayout>
  );
}
