import { useSelector } from "react-redux";

export const useFilters = () => {
  const typesId = useSelector((state) =>
    state.typeReducer.activeTypes.length !== 0
      ? state.typeReducer.activeTypes.map((elem) => elem.id)
      : []
  );
  const brandsId = useSelector((state) =>
    state.brandReducer.activeBrands.length !== 0
      ? state.brandReducer.activeBrands.map((elem) => elem.id)
      : []
  );
  const sortingField = useSelector((state) => state.deviceReducer.sortingField);
  const sortingOrder = useSelector((state) => state.deviceReducer.sortingOrder);

  const limit = useSelector((state) => state.deviceReducer.limit);
  const page = useSelector((state) => state.deviceReducer.page);

  return {
    typesId,
    brandsId,
    sortingField,
    sortingOrder,
    limit,
    page,
  };
};
