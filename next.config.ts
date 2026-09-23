import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/eki-bi-mi-z", destination: "/hakkimda", permanent: true },
      { source: "/services-4", destination: "/hizmetler", permanent: true },
      { source: "/yayinlar-2", destination: "/yazilar", permanent: true },
      { source: "/contact-5", destination: "/iletisim", permanent: true },
      {
        source: "/y%C3%BCksek%C3%B6%C4%9Fretimhukuku",
        destination: "/hizmetler/yuksekogrenim-hukuku",
        permanent: true,
      },
      {
        source: "/do%C3%A7entlikiptaldavalar%C4%B1",
        destination: "/hizmetler/docentlik-iptal-davalari",
        permanent: true,
      },
      {
        source: "/i-%C5%9F-hukuku",
        destination: "/hizmetler/is-hukuku",
        permanent: true,
      },
      {
        source: "/arabuluculuk",
        destination: "/hizmetler/arabuluculuk",
        permanent: true,
      },
      {
        source: "/kira-hukuku",
        destination: "/hizmetler/kira-hukuku",
        permanent: true,
      },
      {
        source: "/s%C3%B6zle%C5%9Fmeler-hukuku",
        destination: "/hizmetler/sozlesmeler-hukuku",
        permanent: true,
      },
      {
        source: "/post/:slug*",
        destination: "/yazilar/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
