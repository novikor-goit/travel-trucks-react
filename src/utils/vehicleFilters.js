const labelToProp = {
  AC: 'AC',
  TV: 'TV'
};

export const vehicleEquipmentFilters = [
  { label: 'AC', iconFilter: 'icon-wind' },
  { label: 'Kitchen', iconFilter: 'icon-cup-hot' },
  { label: 'TV', iconFilter: 'icon-tv' },
  { label: 'Bathroom', iconFilter: 'icon-ph_shower' },
  { label: 'Radio', iconFilter: 'icon-radio' },
  { label: 'Refrigerator', iconFilter: 'icon-solar_fridge-outline' },
  { label: 'Water', iconFilter: 'icon-ion_water-outline' },
  { label: 'Microwave', iconFilter: 'icon-lucide_microwave' },
  { label: 'Automatic', iconFilter: 'icon-diagram' }
];

export const vehicleTypeFilters = [
  {
    label: 'Van',
    iconFilter: 'icon-bi_grid-1x2',
    filter: (truck) => truck.form === 'panelTruck'
  },
  {
    label: 'Fully Integrated',
    iconFilter: 'icon-bi_grid',
    filter: (truck) => truck.form === 'fullyIntegrated'
  },
  {
    label: 'Alcove',
    iconFilter: 'icon-bi_grid-3x3-gap',
    filter: (truck) => truck.form === 'alcove'
  }
];
