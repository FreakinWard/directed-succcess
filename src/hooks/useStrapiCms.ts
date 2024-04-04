import useGraphQl, { UseGraphQlProps } from '@/hooks/useGraphQl';

export default function useStrapiCms<T>({ ...props }: UseGraphQlProps) {
  return useGraphQl<T>({
    ...props,
    staleTime: Infinity,
  });
}
