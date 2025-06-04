export const applyFilters = (trucks, filtersData) => {
  return trucks.filter((truck) => {
    if (
      filtersData.location &&
      !truck.location.toLowerCase().includes(filtersData.location.toLowerCase())
    ) {
      return false;
    }

    if (filtersData.Automatic && truck.transmission !== 'automatic') {
      return false;
    }

    if (filtersData.Petrol && truck.engine !== 'petrol') {
      return false;
    }

    const boolFilters = [
      'AC',
      'bathroom',
      'kitchen',
      'TV',
      'radio',
      'refrigerator',
      'microwave',
      'gas',
      'water'
    ];

    for (const key of boolFilters) {
      if (filtersData[key] && !truck[key]) {
        return false;
      }
    }

    if (filtersData.Van && truck.form !== 'panelTruck') {
      return false;
    }

    if (filtersData['Fully Integrated'] && truck.form !== 'fullyIntegrated') {
      return false;
    }

    if (filtersData.Alcove && truck.form !== 'alcove') {
      return false;
    }

    return true;
  });
};
