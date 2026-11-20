import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  poweredByHeader: false,
  headers() {
    return [
      {
        source: "/Muhammad-Usman.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Muhammad-Usman.pdf"',
          },
        ],
      },
    ];
  },
};
export default nextConfig;
