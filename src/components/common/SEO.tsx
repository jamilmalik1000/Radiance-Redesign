import { Helmet } from "react-helmet-async";
const base = import.meta.env.VITE_SITE_URL || "https://example.com";
export function SEO({
  title,
  description,
  path = "/",
  schema,
}: {
  title: string;
  description: string;
  path?: string;
  schema?: Record<string, unknown>;
}) {
  const url = base + path;
  const crumbs = path.split("/").filter(Boolean);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base + "/" },
      ...crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb
          .replaceAll("-", " ")
          .replace(/\b\w/g, (letter) => letter.toUpperCase()),
        item: `${base}/${crumbs.slice(0, index + 1).join("/")}`,
      })),
    ],
  };
  return (
    <Helmet>
      <title>{title} | Radiance Tek</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | Radiance Tek`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content={`${base}/radiance-tek-concept-og.jpg`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content={`${base}/radiance-tek-concept-og.jpg`}
      />
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
