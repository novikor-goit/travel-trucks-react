export const applyFilters = (trucks) => {
  // const activeEquipment = vehicleEquipmentFilters.filter(
  //   ({ labelFilter }) => filtersData[labelFilter]
  // );
  // const activeVehicleType = vehicleTypeFilters.find(({ labelFilter }) => filtersData[labelFilter]);

  return trucks.filter((truck) => {
    // debugger;
    // if (
    //   filtersData.location &&
    //   !truck.location.toLowerCase().includes(filtersData.location.toLowerCase())
    // ) {
    //   return false;
    // }
    //
    // for (const { filter } of activeEquipment) {
    //   if (!filter(truck)) {
    //     return false;
    //   }
    // }
    //
    // if (activeVehicleType && !activeVehicleType.filter(truck)) {
    //   return false;
    // }

    return true;
  });
};
