import { SessionContextValue, useSession } from "next-auth/react";

export const mockAuthState = (authState: SessionContextValue) => {
  vi.mocked(useSession).mockReturnValue({
    ...authState
  });
};
