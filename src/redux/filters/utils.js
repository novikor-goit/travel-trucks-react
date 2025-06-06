export function processFilterFields(filters, params) {
  const boolFields = [
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

  boolFields.forEach((field) => {
    if (filters[field]) {
      params[field] = true;
    }
  });

  if (filters.Automatic) {
    params.transmission = 'automatic';
  }

  if (filters.Van) {
    params.form = 'panelTruck';
  }

  if (filters['Fully Integrated']) {
    params.form = 'fullyIntegrated';
  }

  if (filters.Alcove) {
    params.form = 'alcove';
  }
}
