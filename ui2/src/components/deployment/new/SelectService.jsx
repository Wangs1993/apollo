import React, { useEffect } from 'react';
import { TableTransfer } from '../../../common/TableTransfer';
import { Spinner } from '../../../common/Spinner';

export const SelectService = ({
  getServices,
  services,
  handleBreadcrumbs,
  getServicesStack,
  servicesStacks,
  resetBreadcrumbs,
  match,
}) => {
  useEffect(() => {
    resetBreadcrumbs();
    handleBreadcrumbs(`${match.url}`, 'service');
    getServices();
    getServicesStack();
  }, []);

  const stackSelection = stackId => {
    const selectedStack = servicesStacks.find(servicesStack => servicesStack.id === stackId);
    return services
      .filter(service => selectedStack.services && selectedStack.services.includes(service.id))
      .map(selectedService => selectedService.id.toString());
  };

  if (!services || !servicesStacks) {
    return <Spinner />;
  }

  return (
    <TableTransfer
      data={services}
      searchColumns={['name']}
      leftColTitles={['name']}
      rightColTitles={['name']}
      columnTitles={['Name']}
      predefinedGroups={servicesStacks}
      selectGroup={stackSelection}
      linkTo={'environment'}
      addSearch={'service'}
      match={match}
    />
  );
};
