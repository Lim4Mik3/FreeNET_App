import {
  Route as ReactRoute,
  RouteProps as ReactRouteProps,
  Redirect,
} from 'react-router-dom';

import { useOffers } from '../hooks/useOffers';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
}

export const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  ...rest
}: RouteProps) => {
  const { customerData } = useOffers();

  if (!customerData.querySuccess && isPrivate) {
    return <Redirect to="/" />;
  }

  return <ReactRoute {...rest} />;
};
