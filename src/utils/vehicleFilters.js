const labelToProp = {
  AC: 'AC',
  TV: 'TV'
};

export const vehicleEquipmentFilters = [
  { labelFilter: 'AC', iconFilter: 'icon-wind' },
  { labelFilter: 'Kitchen', iconFilter: 'icon-cup-hot' },
  { labelFilter: 'TV', iconFilter: 'icon-tv' },
  { labelFilter: 'Bathroom', iconFilter: 'icon-ph_shower' },
  { labelFilter: 'Radio', iconFilter: 'icon-radio' },
  { labelFilter: 'Refrigerator', iconFilter: 'icon-solar_fridge-outline' },
  { labelFilter: 'Water', iconFilter: 'icon-ion_water-outline' },
  { labelFilter: 'Microwave', iconFilter: 'icon-lucide_microwave' },
  {
    labelFilter: 'Automatic',
    iconFilter: 'icon-diagram',
    filter: (truck) => truck.transmission === 'automatic'
  }
].map((filterObj) => {
  if (!filterObj.filter) {
    const prop = labelToProp[filterObj.labelFilter] || filterObj.labelFilter.toLowerCase();
    return {
      ...filterObj,
      filter: (truck) => truck[prop] === true
    };
  }
  return filterObj;
});

export const vehicleTypeFilters = [
  {
    labelFilter: 'Van',
    iconFilter: 'icon-bi_grid-1x2',
    filter: (truck) => truck.form === 'panelTruck'
  },
  {
    labelFilter: 'Fully Integrated',
    iconFilter: 'icon-bi_grid',
    filter: (truck) => truck.form === 'fullyIntegrated'
  },
  {
    labelFilter: 'Alcove',
    iconFilter: 'icon-bi_grid-3x3-gap',
    filter: (truck) => truck.form === 'alcove'
  }
];
