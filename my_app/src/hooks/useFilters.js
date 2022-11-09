import { useSelector } from "react-redux";

export const useFilters = () => {
  const typeId = useSelector((state) =>
    "id" in state.typeReducer.activeType
      ? state.typeReducer.activeType.id
      : null
  );
  const brandId = useSelector((state) =>
    "id" in state.brandReducer.activeBrand
      ? state.brandReducer.activeBrand.id
      : null
  );
  const limit = useSelector((state) => state.deviceReducer.limit);
  const page = useSelector((state) => state.deviceReducer.page);

  return {
    typeId,
    brandId,
    limit,
    page,
  };
};
