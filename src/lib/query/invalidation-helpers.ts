import type { QueryClient } from "@tanstack/react-query";

import { queryKeys } from "@/shared/constants/query-keys";

export const invalidationHelpers = {
  invalidateAuth(queryClient: QueryClient) {
    return queryClient.invalidateQueries({ queryKey: queryKeys.admin.me });
  },
};
