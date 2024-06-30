import { IProduct, IProductContent } from '@/lib/types/product.type';
import { useFetch } from '@/lib/utils/queries';
import { pathToUrl } from '@/lib/utils/router';
import { apiRoutes } from '@/routes';

export const useGetProductList = () =>
  useFetch<IProduct>(apiRoutes.getProductList);

export const useGetProduct = (id: string) =>
  useFetch<IProductContent>(pathToUrl(apiRoutes.getProduct, { id }));
