export const mockNextNavigation = () => {
  vi.mock("next/navigation", async importOriginal => {
    const mod = await importOriginal<typeof import("next/navigation")>();
    return {
      ...mod,
      useRouter: vi.fn()
    };
  });
};
